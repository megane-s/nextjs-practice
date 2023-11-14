import { z } from "zod";

export const mockServerUrl = z.string().default("http://localhost:3001").parse(process.env.NEXT_PUBLIC_MOCK_SERVER_URL)
