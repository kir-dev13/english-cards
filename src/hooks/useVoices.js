import EasySpeech from "easy-speech";
import { useMemo } from "react";

//langsArr = array with language code, exmple 'ru', 'en', 'en-US', etc.

const useVoices = (langsArr) => {
    const voices = [];
    function setVoicesbyLang(voicesArr, langsArr) {
        voicesArr.forEach((item, index) => {
            langsArr.forEach((lang) => {
                if (item.lang.startsWith(lang)) {
                    voices.push({ lang: lang, voice: item });
                }
            });
        });
    }

    const init = useMemo(async () => {
        await EasySpeech.init({ maxTimeout: 5000, interval: 250 });
        try {
            console.debug("load complete");
            const availableVoices = await EasySpeech.voices();
            return availableVoices;
        } catch (e) {
            throw new Error("dsad", e);
        }
    }, [langsArr]);

    init.then((availableVoices) => setVoicesbyLang(availableVoices, langsArr));

    const speak = async (text, voice) => {
        await EasySpeech.speak({
            text: text,
            voice: voice,
            pitch: 1,
            rate: 1,
            volume: 1,
            // there are more events, see the API for supported events
            // boundary: (e) => console.debug("boundary reached", e),
        });
    };

    return [voices, speak];
};

export default useVoices;
