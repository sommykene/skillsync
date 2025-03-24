import { PlanBreakdown } from "@skillsync/utils/breakdowns";
import { getPrompt } from "@skillsync/utils/prompt";
import { NextResponse } from "next/server";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    // Extract parameters from the request body
    const { plan, topics, hoursPerWeek } = await request.json();

    // Send the prompt to the AI model
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content:
            "You will be generating a roadmap to help the user develop their skill set in a given area. The roadmap will be broken down into weeks, with each week focusing on a specific topic. Each week will have a goal, tasks, and actions to complete. The user will be able to track their progress and mark tasks as completed. The roadmap will also include a final outcome section to summarize the key takeaways from the roadmap.",
        },
        {
          role: "user",
          content: getPrompt({ plan, topics, hoursPerWeek }),
        },
      ],
      response_format: { type: "json_object" },
    });

    // Extract the AI's response
    const aiContent = response.choices[0].message.content?.trim();

    // Attempt to parse the AI's response as JSON
    let parsedPlan;
    try {
      parsedPlan = aiContent ? JSON.parse(aiContent) : null;
    } catch (parseError) {
      console.error("Error parsing AI response as JSON:", parseError);
      // If parsing fails, return the raw text with an error message
      return NextResponse.json(
        { error: "Failed to parse plan. Please try again." },
        { status: 500 }
      );
    }

    // Validate the structure of the parsedPlan
    if (typeof parsedPlan !== "object" || parsedPlan === null) {
      throw new Error("Invalid plan format received from AI.");
    }

    // Optionally, perform additional validation on the structure here

    // Return the parsed plan
    return NextResponse.json({ ...(parsedPlan as PlanBreakdown) });
  } catch (error) {
    console.error("Error generating plan:", error);
    return NextResponse.json(
      { error: "Failed to generate plan. Please try again later." },
      { status: 500 }
    );
  }
}
