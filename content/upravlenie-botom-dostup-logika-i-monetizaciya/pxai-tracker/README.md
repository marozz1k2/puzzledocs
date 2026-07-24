# PxAI Tracker

PxAI Tracker позволяет вызывать модели из команд PuzzleBot через действие «Отправить запрос». В запросе всегда передаётся база `bot`, `token`, `user`, `model`; остальные параметры зависят от выбранной модели.

В каталоге PuzzleAI доступны модели для текста, изображений, видео, голоса и музыки. Стоимость обозначается как `💠25` и показывается рядом с моделью или операцией.

## Каталоги моделей

- [Текстовые модели](../../../tracker/models/text/README.md).
- [Фото-модели](../../../tracker/models/photo/README.md).
- [Видео-модели](../../../tracker/models/video/README.md).
- [Голосовые модели](../../../tracker/models/voice/README.md), включая [синтез речи](../../../tracker/models/voice/speech-catalog.md) и [распознавание речи](../../../tracker/models/voice/transcription-catalog.md).
- [Музыкальные модели](../../../tracker/models/music/README.md): Suno, Producer, QW Music и FlowMusic.

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

