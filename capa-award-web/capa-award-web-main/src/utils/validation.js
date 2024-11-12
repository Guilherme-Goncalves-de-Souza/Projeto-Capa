
export const isCpf = (c) => {
    if((c = c.replace(/[^\d]/g,"")).length != 11) return false;
    if (c == "00000000000") return false;
    let r;
    let s = 0;   
    for (let i=1; i<=9; i++) s = s + parseInt(c[i-1]) * (11 - i); 
    r = (s * 10) % 11;
    if ((r == 10) || (r == 11)) r = 0;
    if (r != parseInt(c[9])) return false;
    s = 0;
    for (let i = 1; i <= 10; i++) s = s + parseInt(c[i-1]) * (12 - i); 
    r = (s * 10) % 11;
    if ((r == 10) || (r == 11)) r = 0;
    if (r != parseInt(c[10])) return false;
    return true;
}

export const isEmail = (email) => {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

export const isFullName = name => {
    const snps = name?.split(' ')
    return snps?.length > 1 && snps[0].length > 2 && snps[1].length > 2
}
