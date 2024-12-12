import { Request, Response } from 'express';
import { chatWithTencent } from '../utils/tencentAI';

export const handleChat = async (req: Request, res: Response) => {
  try {
    const { message } = req.body;
    const response = await chatWithTencent(message);
    res.json({ success: true, data: response });
  } catch (error: any) {
    res.status(500).json({ 
      success: false, 
      error: error?.message || 'Unknown error'
    });
  }
}; 