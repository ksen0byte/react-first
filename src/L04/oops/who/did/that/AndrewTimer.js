import React, {Component, Fragment} from 'react';
import Random from "./Random";

class AndrewTimer extends Component {
    constructor(props) {
        super(props);
        AndrewTimer.startTimer();
    }

    static startTimer() {
        const oopsWhatsThat = ["SlF1ZXJ5", "SnNGaWRkbGU=", "Q29kZVNhbmRib3g=", "dXNpbmcgdGFibGVzIGZvciBmcm9udGVuZA==", "UEhQ", "SmFzbWluZQ==", "SFRNTDQ=", "Q1NTMg==", "U09BUA==", "QUpBWA==", "Q0RO", "Qm93ZXI=", "QW5ndWxhciAx", "Q2FsbGJhY2sgaGVsbA==", "WE1MSHR0cFJlcXVlc3Q=", "Qm9vdHN0cmFw", "V29yZFByZXNz", "QXRvbQ==", "Tm90ZXBhZCsr", "TWljcm9zb2Z0", "S2FjaGFub3Zza2l5"];
        const oohAnotherCoolArrayRight = ["SFRNTDU=", "Q1NTMw==", "VmFuaWxsYSBKUw==", "UmVhY3Q=", "R3JhcGhRTA==", "QmFiZWw=", "SlNY", "RVMyMDE2Kw==", "ZmV0Y2g=", "bnBt", "VnVl", "Z3VscA==", "V2VicGFjaw==", "VHlwZVNjcmlwdA==", "Rmxvdw==", "RGFuIEFicmFtb3Y=", "YXN5bmMvYXdhaXQ=", "cHJvbWlzZXM=", "YXhpb3M=", "cmVkdXg=", "bG9kYXNo", "V2ViQXNzZW1ibHk=", "UmVzcG9uc2l2ZSBXZWIgRGVzaWdu", "VmlzdWFsIFN0dWRpbyBDb2Rl", "U0FTUy9MRVNT", "bm9kZS5qcw==", "QWlyYm5i", "RmFjZWJvb2s=", "Q1NTIEdyaWQ=", "RmxleGJveA=="];

        let prevThing = null;
        setInterval(() => {
            const {phrase, thing} = Random.nextBoolean()
                ? AndrewTimer.constructPhrase(oopsWhatsThat, prevThing, atob("QW5kcmV3IGxvb29vdmVz"))
                : AndrewTimer.constructPhrase(oohAnotherCoolArrayRight, prevThing, atob("QW5kcmV3IGhhdGVz"));
            console.log(phrase);
            prevThing = thing;
        }, 1500);
    }


    static constructPhrase(stuff, prevThing, templateStart, templateEnd = atob(`LiBCZSBsaWtlIEFuZHJldy4=`)) {
        let thing = atob(stuff[Random.nextInt(stuff.length)]);
        while (prevThing === thing) thing = stuff[Random.nextInt(stuff.length)];
        return {phrase: `${templateStart} ${thing}${templateEnd}`, thing: thing};
    }

    render() {
        return (
            // nice component, huh ..?
            <Fragment/>
        );
    }
}

export default AndrewTimer;