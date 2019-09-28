export const formatPhoneUtil = (phone) => {
    return phone.slice(2).replace(/[\(\)\-\s]+/g, '');
};