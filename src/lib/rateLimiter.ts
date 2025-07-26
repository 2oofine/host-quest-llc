import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});

export async function limitByIp(ip: string, keyPrefix: string, maxRequests = 5, durationInSeconds = 60) {
  const key = `${keyPrefix}:${ip}`;

  const count = await redis.incr(key);
  if (count === 1) {
    await redis.expire(key, durationInSeconds);
  }

  if (count > maxRequests) {
    return false;
  }

  return true;
}
