# Фото-модели

Фото-модели для генерации и обработки изображений.

## Спецификация

- Метод: `GET` — проверка доступности и статуса.
- Метод: `POST` — основной рабочий запрос.
- Базовые параметры: `prompt`, `bot`, `user`.

## Статьи

- [nano_banana](nano-banana.md)
- [midjourney](midjourney.md)
- [gpt_image](gpt-image.md)
- [flux_2_flex](flux-2-flex.md)
- [flux_2_max](flux-2-max.md)
- [flux_2_pro](flux-2-pro.md)
- [higgsfield_photo](higgsfield-photo.md)
- [image_upscale](image-upscale.md)
- [seedream](seedream.md)
- [kling_image](kling-image.md)

## Полезная информация

- Перед настройкой запроса проверьте общие и модельные tracker-поля в [единой документации](../../TRACKER_PAYLOAD.md).
- Если нужен результат быстрее — используйте короткий `prompt` и уточняйте цель одной фразой.
- Для повторяемого результата фиксируйте одинаковые значения `bot` и `user`.
