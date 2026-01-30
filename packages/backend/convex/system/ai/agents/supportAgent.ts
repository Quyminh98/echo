import { openai } from "@ai-sdk/openai";
import { Agent, AgentComponent } from "@convex-dev/agent";
import { components } from "../../../_generated/api";

export const supportAgent = new Agent(components.agent as any, {
    chat: openai.chat("gpt-4o-mini"),
    instructions: "You are a customer support agent",
});

