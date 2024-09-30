export default function puck<T, K extends keyof T>(data: T[], key: K): T[K][] {
    return data.map((value: T) => value[key]);
}

export function getValue<T, K extends keyof T>(data: T, key: K): T[K] {
    return data[key];
}