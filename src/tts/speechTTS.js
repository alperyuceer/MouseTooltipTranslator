import * as util from "/src/util";
import BaseTTS from "./baseTTS";

export default class SpeechTTS extends BaseTTS {
  static async playTTSEngine(text, voice, lang, rate, volume) {
    await this.createOffscreen();
    await util.sendMessage({
      type: "playSpeechTTS",
      speechTTSData: { text, voice, lang, rate, volume },
    });
  }
}