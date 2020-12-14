import { ContextTool } from './context.tool';
import { ModelTool } from './model.tool';
import { ServiceTool } from './service.tool';
import { Tool } from './tool';

export const tools: Tool[] = [
    new ModelTool(),
    new ServiceTool(),
    new ContextTool()
];