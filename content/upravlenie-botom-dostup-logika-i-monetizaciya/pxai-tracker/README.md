# PxAI Tracker

PxAI Tracker позволяет вызывать AI-модели из команд PuzzleBot через действие «Отправить запрос». В запросе всегда передаётся база `bot`, `token`, `user`, `model`; остальные параметры зависят от выбранной модели.

## Каталоги моделей

- [Текстовые модели](../../../tracker/models/text/README.md), включая [OpenRouter text](../../../tracker/models/text/openrouter-text.md).
- [Фото-модели](../../../tracker/models/photo/README.md).
- [Видео-модели](../../../tracker/models/video/README.md).
- [Голосовые модели](../../../tracker/models/voice/README.md), включая [OpenRouter speech](../../../tracker/models/voice/openrouter-speech.md) и [OpenRouter transcription](../../../tracker/models/voice/openrouter-transcription.md).
- [Музыкальные модели](../../../tracker/models/music/README.md).

## Основной URL-адрес

`https://api.pxsto.re/main/puzzlebot-tracker`

## Минимальный пример

```jsonc
{
  "bot": "{{BOT_USERNAME_TEXT}}", // обязательно: username бота.
  "token": "[Ваш API-токен]", // обязательно: API-токен бота.
  "user": "{{USER_ID_TEXT}}", // обязательно: ID пользователя.
  "model": "gpt_5", // обязательно: ключ модели.
  "prompt": "{{prompt}}", // обычно обязательно: текст задачи.
  "send_answer": true // необязательно: отправить результат пользователю.
}
```

