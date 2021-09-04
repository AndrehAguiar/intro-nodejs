const { clear } = require('console');
const OS = require('os');

setInterval(() => {
    const { arch, platform, totalmem, freemem } = OS;
    const tRAM = totalmem() / 1024 / 1024;
    const fRAM = freemem() / 1024 / 1024;
    const USAGE = fRAM / tRAM * 100;
    const stats = {
        OS: platform(),
        Arch: arch(),
        TotaRAM: `${parseInt(tRAM)} MB`,
        FreeRAM: `${parseInt(fRAM)} MB`,
        usage: `${USAGE.toFixed(2)} %`
    }
    console.clear();
    console.table(stats);
    exports.stats = stats;
}, 1000);