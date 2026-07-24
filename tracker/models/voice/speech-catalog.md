# Синтез речи

Модели для озвучивания текста и голосовых сценариев через Трекер.

## Как отправить запрос

- URL-адрес: `https://api.pxsto.re/main/puzzlebot-tracker`
- Метод: `POST`
- Вид запроса в PuzzleBot: `Сформированный`

```jsonc
{
  "bot": "{{BOT_USERNAME_TEXT}}", // обязательно: username бота.
  "token": "[Ваш API-токен]", // обязательно: API-токен бота.
  "user": "{{USER_ID_TEXT}}", // обязательно: ID пользователя или сессии.
  "model": "google_gemini_3_1_flash_tts_preview", // обязательно: ключ модели.
  "prompt": "Озвучь этот текст спокойным голосом.", // обязательно: текст для озвучивания.
  "send_answer": true // необязательно: отправить результат в чат.
}
```

## Параметры

| Ключ | Значение | Описание |
| --- | --- | --- |
| `bot` | `{{BOT_USERNAME_TEXT}}` | Username бота. |
| `token` | API-токен | Токен для доступа к Трекеру. |
| `user` | `{{USER_ID_TEXT}}` | ID пользователя или сессии. |
| `model` | ключ из таблицы | Выбранная модель. |
| `prompt` | текст | Текст для озвучивания. |
| `params.voice` | текст | Необязательный голос. |
| `params.format` | текст | Необязательный формат результата. |
| `send_answer` | `true` / `false` | Отправить ответ в чат или сохранить в `{{tracker_answer}}`. |

## Модели

`💠—` означает, что точная стоимость показывается в интерфейсе перед запуском.

| Ключ | Модель | Стоимость |
| --- | --- | ---: |
| `canopylabs_orpheus_3b_0_1_ft` | Orpheus 3B | 💠15 |
| `deepgram_aura_2` | Aura-2 | 💠— |
| `google_gemini_3_1_flash_tts_preview` | Gemini 3.1 Flash TTS Preview | 💠35 |
| `hexgrad_kokoro_82m` | Kokoro 82M | 💠5 |
| `microsoft_mai_voice_2` | MAI-Voice-2 | 💠35 |
| `microsoft_mai_voice_2_flash` | MAI-Voice-2 Flash | 💠— |
| `minimax_speech_2_8_hd` | Speech 2.8 HD | 💠— |
| `minimax_speech_2_8_turbo` | Speech 2.8 Turbo | 💠— |
| `mistralai_voxtral_mini_tts_2603` | Voxtral Mini TTS | 💠30 |
| `qwen_qwen_audio_3_0_tts_flash` | Qwen Audio 3.0 TTS Flash | 💠— |
| `qwen_qwen_audio_3_0_tts_plus` | Qwen Audio 3.0 TTS Plus | 💠— |
| `sesame_csm_1b` | CSM 1B | 💠15 |
| `x_ai_grok_voice_tts_1_0` | Grok Voice TTS 1.0 | 💠30 |
| `zyphra_zonos_v0_1_hybrid` | Zonos v0.1 Hybrid | 💠15 |
| `zyphra_zonos_v0_1_transformer` | Zonos v0.1 Transformer | 💠15 |

## Ответ

При `send_answer=true` ссылка на аудио отправляется пользователю. При `send_answer=false` она сохраняется в `{{tracker_answer}}`.
