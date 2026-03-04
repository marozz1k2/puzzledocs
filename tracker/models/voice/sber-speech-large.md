# sber_speech_large

Подробный и чистый синтез речи для длинных фрагментов.

## Спецификация

- Endpoint: `https://api.pxsto.re/main/puzzlebot-tracker`
- Метод: `POST`
- Формат: `application/json`

### Пример запроса (no-code)

```json
{
  "text": "Распознай аудио и верни текст",
  "bot": "sber_speech_large",
  "user": "user_123",
  "voice": "bys_24000",
  "emotion": "neutral",
  "speed": 1.0,
  "format": "mp3",
  "lang": "ru-RU",
  "pitch": 0,
  "sttModel": "general"
}
```

### Пример ответа

```json
{
  "ok": true,
  "result": "Готово"
}
```

## Параметры

- `prompt` / `text` (string, optional) — текст для озвучивания в TTS.
- `bot` (string, required) — идентификатор модели (`sber_speech_large`).
- `user` (string, required) — ID пользователя/сессии для трекинга.
- `voice` (string, optional) — голос.
- `emotion` (string, optional) — стиль/эмоция.
- `speed` (number, optional) — скорость речи.
- `format` (string, optional) — `mp3`, `ogg`, `wav`.
- `lang` (string, optional) — язык.
- `pitch` (number, optional) — фиксируется в `0`.
- `stt_model` / `sttModel` (string, optional) — модель распознавания, по умолчанию `general`.

## Полезная информация

- Начинайте с короткого `prompt` и добавляйте уточнения по шагам.
- Для стабильных результатов используйте одинаковый `user` в рамках одного сценария.
- Если ответ слишком общий, добавьте формат результата прямо в `prompt`.
