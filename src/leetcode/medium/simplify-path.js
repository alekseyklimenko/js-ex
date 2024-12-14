// https://leetcode.com/problems/simplify-path/description/

const simplifyPath = function(path) {
    let validPath = '';
    if (path.length === 0) {
        return '/';
    }

    const slicedPath = path.split('/');
    const result = [];
    for (let i = 0; i < slicedPath.length; i++) {
        const s = slicedPath[i];
        if (s.length === 0 || s === '.') {
            continue;
        }
        if (s === '..') {
            if (result.length > 0) {
                result.pop();
            }
        } else {
            result.push(s);
        }
    }
    if (result.length === 0) {
        return '/';
    }

    result.forEach((s) => {
        validPath += `/${s}`;
    });

    return validPath;
};

console.log(' => ', simplifyPath(''));
console.log('/ => ', simplifyPath('/'));
console.log('/home/ => ', simplifyPath('/home/'));
console.log('/home//foo/ => ', simplifyPath('/home//foo/'));
console.log('/../ => ', simplifyPath('/../'));
console.log('/home/user/Documents/../Pictures => ', simplifyPath('/home/user/Documents/../Pictures'));
console.log('/.../a/../b/c/../d/./ => ', simplifyPath('/.../a/../b/c/../d/./'));
