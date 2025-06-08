// supabase/functions/clerk-user-webhook/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

serve(async (req) => {
  const authHeader = req.headers.get("Authorization");
  const expectedSecret = Deno.env.get("CLERK_WEBHOOK_SECRET");

  if (!authHeader || authHeader !== `Bearer ${expectedSecret}`) {
    return new Response("Unauthorized", { status: 401 });
  }

  const payload = await req.json();

  const userId = payload.data?.id; // Clerk user ID
  const email = payload.data?.email_addresses?.[0]?.email_address || "";
  const eventType = payload.type;

  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const supabaseServiceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  let response: Response;

  switch (eventType) {
    case "user.created":
      response = await fetch(`${supabaseUrl}/rest/v1/profile`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: supabaseServiceRoleKey,
          Authorization: `Bearer ${supabaseServiceRoleKey}`,
        },
        body: JSON.stringify({
          userId: userId,
          email,
        }),
      });
      break;
    case "user.updated":
      response = await fetch(
        `${supabaseUrl}/rest/v1/profile?userId=eq.${userId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            apikey: supabaseServiceRoleKey,
            Authorization: `Bearer ${supabaseServiceRoleKey}`,
          },
          body: JSON.stringify({
            email,
          }),
        }
      );
      break;
    case "user.deleted":
      response = await fetch(
        `${supabaseUrl}/rest/v1/profile?userId=eq.${userId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            apikey: supabaseServiceRoleKey,
            Authorization: `Bearer ${supabaseServiceRoleKey}`,
          },
        }
      );
      break;
    default:
      // For unsupported event types, return 204 No Content
      return new Response("Error unsupported event type", {
        status: 500,
      });
  }

  if (!response.ok) {
    const errorBody = await response.text(); // or .json() if you expect JSON
    console.error(
      `❌ Error ${eventType.replace("user.", "").replace("ed", "ing")} user`
    );
    console.error("Status:", response.status);
    console.error("Status Text:", response.statusText);
    console.error("Response Body:", errorBody);
    return new Response(`Error ${eventType.replace("user.", "")} user`, {
      status: 500,
    });
  }

  return new Response(`User ${eventType.replace("user.", "")}`, {
    status: 200,
  });
});
