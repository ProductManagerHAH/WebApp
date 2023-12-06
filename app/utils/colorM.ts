import random from "random";
import { print } from "./console";

export function randomRGBAColor(): string {
    const r = random.int(0, 51);
    const color = [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        "rgba(255, 0, 0, 1)",
        "rgba(0, 255, 0, 1)",
        "rgba(0, 0, 255, 1)",
        "rgba(255, 255, 0, 1)",
        "rgba(0, 255, 255, 1)",
        "rgba(255, 0, 255, 1)",
        "rgba(128, 128, 128, 1)",
        "rgba(153, 50, 204, 1)",
        "rgba(0, 0, 0, 1)",
        "rgba(242, 187, 3), 1)",
        "rgba(249, 245, 252, 1)",
        "rgba(160, 0, 102, 1)",
        "rgba(218, 194, 17, 1)",
        "rgba(0, 170, 255, 1)",
        "rgba(26, 69, 231, 1)",
        "rgba(255, 207, 122, 1)",
        "rgba(237, 221, 241, 1)",
        "rgba(244, 102, 95, 1)",
        "rgba(153, 50, 204, 1)",
        "rgba(255, 173, 62, 1)",
        "rgba(229, 193, 116, 1)",
        "rgba(0, 128, 128, 1)",
        "rgba(218, 112, 214, 1)",
        "rgba(0, 0, 0, 1)",
        "rgba(255, 102, 204, 1)",
        "rgba(165, 42, 42, 1)",
        "rgba(246, 225, 236, 1)",
        "rgba(191, 214, 201, 1)",
        "rgba(0, 255, 0, 1)",
        "rgba(128, 128, 0, 1)",
        "rgba(75, 0, 130, 1)",
        "rgba(255, 255, 0, 1)",
        "rgba(178, 69, 195, 1)",
        "rgba(255, 207, 122, 1)",
        "rgba(128, 0, 0, 1)",
        "rgba(255, 0, 0, 1)",
        "rgba(165, 42, 42, 1)",
        "rgba(128, 128, 128, 1)",
        "rgba(255, 255, 255, 1)",
        "rgba(50, 205, 50, 1)",
        "rgba(255, 0, 255, 1)",
        "rgba(196, 228, 133, 1)",
        "rgba(255, 231, 204, 1)",
        "rgba(139, 0, 0, 1)",
        "rgba(255, 185, 0, 1)",
    ];
    return color[r];
}