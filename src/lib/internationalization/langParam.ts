export const langParams = ["en", "es"] as const;
export const defaultLangParam = langParams[0];
export type LangParam = (typeof langParams)[number];

export type ServerComponentLangProp = {
    lang?: LangParam
}

export function getLangFromUrlServerSide(langParam: LangParam): LangParam {
    if (!langParams.includes(langParam)) {
        return defaultLangParam;
    }
    return langParam as LangParam;
}

export function getLangFromUrlClientSide(): LangParam {
    if (!window) {
        throw Error(
            "Trying to call 'getLangFromUrlClientSide' function," +
                " while the 'window' is not accessible. Maybe trying" +
                " to call this on the server-side?"
        );
    }
    const currentPathname = window.location.pathname;
    const pathnameParts = currentPathname.split("/");
    const filteredParts = pathnameParts.filter((part) => part !== "");
    if (filteredParts.length < 1) {
        return defaultLangParam;
    }

    const chosenLang = filteredParts[0].toLowerCase() as LangParam;
    if (!langParams.includes(chosenLang)) {
        return defaultLangParam;
    }
    return chosenLang;
}
