interface ApiCountDto {
  value: number;
}

// NOTE: counter external resource unit
export const CounterApi = {
  async getCount(): Promise<ApiCountDto> {
    const response = await fetch("/api/counter");
    if (!response.ok) {
      throw new Error("Failed to fetch count");
    }
    return response.json();
  },

  async incrementCount(): Promise<ApiCountDto> {
    const response = await fetch("/api/counter/increment", { method: "POST" });
    if (!response.ok) {
      throw new Error("Failed to increment count");
    }
    return response.json();
  },

  async decrementCount(): Promise<ApiCountDto> {
    const response = await fetch("/api/counter/decrement", { method: "POST" });
    if (!response.ok) {
      throw new Error("Failed to decrement count");
    }
    return response.json();
  },

  async resetCount(): Promise<ApiCountDto> {
    const response = await fetch("/api/counter/reset", { method: "POST" });
    if (!response.ok) {
      throw new Error("Failed to reset count");
    }
    return response.json();
  },
};
