# Распознавание речи

Модели для расшифровки аудио и голосовых сообщений через Трекер.

## Как отправить запрос

- URL-адрес: `https://api.pxsto.re/main/puzzlebot-tracker`
- Метод: `POST`
- Вид запроса в PuzzleBot: `Сформированный`

```jsonc
{
  "bot": "{{BOT_USERNAME_TEXT}}", // обязательно: username бота.
  "token": "[Ваш API-токен]", // обязательно: API-токен бота.
  "user": "{{USER_ID_TEXT}}", // обязательно: ID пользователя или сессии.
  "model": "openai_whisper_large_v3", // обязательно: ключ модели.
  "prompt": "Расшифруй голосовое сообщение и верни текст.", // обязательно: задача.
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
| `prompt` | текст | Задача для модели. |
| `send_answer` | `true` / `false` | Отправить ответ в чат или сохранить в `{{tracker_answer}}`. |

## Модели

`💠—` означает, что точная стоимость показывается в интерфейсе перед запуском.

| Ключ | Модель | Стоимость |
| --- | --- | ---: |
| `deepgram_nova_3` | Nova-3 | 💠— |
| `google_chirp_3` | Chirp 3 | 💠10 |
| `microsoft_mai_transcribe_1_5` | MAI-Transcribe 1.5 | 💠150 |
| `mistralai_voxtral_mini_transcribe` | Voxtral Mini Transcribe | 💠2 |
| `nvidia_parakeet_tdt_0_6b_v3` | Parakeet TDT 0.6B v3 | 💠2 |
| `openai_gpt_4o_mini_transcribe` | GPT-4o Mini Transcribe | 💠10 |
| `openai_gpt_4o_transcribe` | GPT-4o Transcribe | 💠20 |
| `openai_whisper_1` | Whisper 1 | 💠5 |
| `openai_whisper_large_v3` | Whisper Large V3 | 💠2 |
| `openai_whisper_large_v3_turbo` | Whisper Large V3 Turbo | 💠25 |
| `qwen_qwen3_asr_flash_2026_02_10` | Qwen3 ASR Flash | 💠35 |
| `x_ai_grok_stt_1_0` | Grok STT 1.0 | 💠— |

## Ответ

При `send_answer=true` расшифровка отправляется пользователю. При `send_answer=false` она сохраняется в `{{tracker_answer}}`.
