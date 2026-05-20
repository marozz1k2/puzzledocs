# Видео-модели

Видео-модели для генерации роликов по тексту и референсам.

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
  "prompt": "{{prompt}}", // обязательно: описание видео, сцены и движения.
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

- [veo](veo.md)
- [veo_fast](veo-fast.md)
- [sora](sora.md)
- [sora_pro](sora-pro.md)
- [grok_video](grok-video.md)
- [higgsfield_video](higgsfield-video.md)
- [hollywood_video](hollywood-video.md)
- [midjourney_video](midjourney-video.md)
- [minimax_hailuo](minimax-hailuo.md)
- [kling](kling.md)
- [kling_pro](kling-pro.md)
- [kling_2_5](kling-2-5.md)
- [kling_2_5_pro](kling-2-5-pro.md)
- [kling_2_6](kling-2-6.md)
- [kling_2_6_pro](kling-2-6-pro.md)
- [kling_2_6_motion_control](kling-2-6-motion-control.md)
- [kling_3_motion_control](kling-3-motion-control.md)
- [kling_3_motion_control_pro](kling-3-motion-control-pro.md)
- [kling_3_omni](kling-3-omni.md)
- [kling_3_omni_pro](kling-3-omni-pro.md)
- [kling_3_omni_edit](kling-3-omni-edit.md)
- [kling_3_omni_edit_pro](kling-3-omni-edit-pro.md)
- [kling_omni](kling-omni.md)
- [kling_omni_pro](kling-omni-pro.md)
