export function setTextContent(parent, selector, text) {
    if (!parent) return;

    const element = parent.querySelector(selector);
    if (element) element.textContent = text;
}

export function truncate(text, maxLength) {
    if (text.length <= maxLength) return text;

    return `${text.slice(0, maxLength - 1)}…`;
}

export function setBackgroundImage(parent, selector, imageUrl) {
    if (!parent) return;

    const element = parent.querySelector(selector);
    if (element) element.src = `./images/${imageUrl}`;
}