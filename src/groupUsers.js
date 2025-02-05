/**
 * Write a function to group two types of users into EMPLOYEE and CONTRACTOR groups
 *
 * A function should return an object consists of two arrays of grouped users:
 * {
 *   employees: [...]
 *   contractors: [...]
 * }
 * @param {Array<unknown>} users
 * @returns {Object<employees: Array<any>, contractors: Array<any>>}
 */
module.exports.groupUsers = function (users) {
    return {
        employees: users.filter(function (user) { return user.type === 'EMPLOYEE'; }),
        contractors: users.filter(function (user) { return user.type === 'CONTRACTOR'; }),
    };
};
