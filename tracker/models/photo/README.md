# Фото-модели

Фото-модели для генерации, редактирования, стилизации и улучшения изображений.

## Как отправлять запросы

- Ссылка: `https://api.pxsto.re/main/puzzlebot-tracker`
- Метод: `POST`
- Вид запроса в PuzzleBot: `Сформированный`

Минимальная база всегда одна: `bot`, `token`, `user`, `model`. Остальные поля зависят от выбранной модели и описаны в её статье.

## Базовый пример

```jsonc
{
  "bot": "{{BOT_USERNAME_TEXT}}", // обязательно: username бота.
  "token": "[Ваш API-токен]", // обязательно: API-токен бота.
  "user": "{{USER_ID_TEXT}}", // обязательно: ID пользователя или сессии.
  "model": "model_key", // обязательно: ключ нужной модели из списка ниже.
  "prompt": "{{prompt}}", // обычно обязательно: описание изображения; для апскейла может быть необязательным.
  "send_answer": true // необязательно: отправить ответ пользователю; по умолчанию `true`.
}
```

## Базовые параметры

| Параметр | Тип | Обязательный | Описание |
| --- | --- | --- | --- |
| `bot` | string | Да | Username бота: `{{BOT_USERNAME_TEXT}}`. |
| `token` | string | Да | API-токен бота. |
| `user` | string | Да | ID пользователя или сессии: `{{USER_ID_TEXT}}`. |
| `model` | string | Да | Ключ модели из списка ниже. |
| `prompt` | string | Зависит от модели | Текст задачи. Для апскейла/анализа изображения дополнительно или вместо него может требоваться `images`. |
| `images` | string | Зависит от модели | Ссылки, file_id или переменные с изображениями через запятую, без массива `[]`. |
| `params` | object | Нет | Вложенные настройки конкретной модели. |
| `send_answer` | boolean | Нет | `true` отправляет результат в чат, `false` сохраняет его в `{{tracker_answer}}`. |

## Модели

- [nano_banana](nano-banana.md)
- [nano_banana_pro](nano-banana-pro.md)
- [midjourney](midjourney.md)
- [gpt_image](gpt-image.md)
- [gpt_image_2](gpt-image-2.md)
- [gpt_image_1_5](gpt-image-1-5.md)
- [flux_2_flex](flux-2-flex.md)
- [flux_2_max](flux-2-max.md)
- [flux_2_pro](flux-2-pro.md)
- [flux_2_klein](flux-2-klein.md)
- [higgsfield_photo](higgsfield-photo.md)
- [image_upscale](image-upscale.md)
- [seedream](seedream.md)
- [kling_image](kling-image.md)
