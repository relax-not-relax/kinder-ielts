import { setBackgroundImage, setTextContent } from "./common";

export function createSubBannerElement(subBanner) {
    if (!subBanner) return;

    // find and clone template
    const template = document.getElementById('subBannerTemplate');
    if (!template) {
        return;
    }

    const bannerElement = template.content.firstElementChild.cloneNode(true);
    if (!bannerElement) {
        return;
    };

    setTextContent(bannerElement, '[data-id="title"]', subBanner.title);
    setTextContent(bannerElement, '[data-id="description"]', subBanner.description);
    setBackgroundImage(bannerElement, '[data-id="thumbnail"]', subBanner.thumbnail);

    return bannerElement;

}

export function renderSubBannerList(elementId, subBannerList) {
    if (!Array.isArray(subBannerList)) {
        console.log('null');
        return;
    }

    const divElement = document.getElementById(elementId);
    if (!divElement) {
        return;
    };

    divElement.textContent = '';
    
    subBannerList.forEach((subBanner) => {
        const card = createSubBannerElement(subBanner);
        divElement.appendChild(card);
    })
}