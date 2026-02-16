const API_BASE_URL = 'https://emailmarketin.simplyfound.com.na/api';

export interface SubscribeResponse {
  success: boolean;
  message: string;
  subscriber?: {
    id: number;
    email: string;
    subscribed: boolean;
    subscribedAt: string;
  };
}

export const subscribeToNewsletter = async (email: string): Promise<SubscribeResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/subscribers/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: 'Failed to subscribe' }));
      throw new Error(errorData.message || 'Failed to subscribe');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Network error. Please try again.');
  }
};

