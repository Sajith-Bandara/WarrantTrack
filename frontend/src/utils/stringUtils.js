// utils/stringUtils.js
export const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
};

export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
