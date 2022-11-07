export function pubKeyShortAddress(pubkey, padCnt) {
    return pubkey.slice(0, padCnt + (pubkey.startsWith('0x') ? 2 : 0)) + '.'.repeat(3) + pubkey.slice(-padCnt);
}