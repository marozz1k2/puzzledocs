---
hidden: true
---

# Changelog

## Май 2026

<details>

<summary>Фиксы</summary>

* Добавлены страницы новых активных моделей трекера: `minimax_hailuo`, `hollywood_video`, `midjourney_video`, `flux_2_klein`.
* После сверки с живой таблицей `model_labels` добавлены активные модели `gpt_image_2`, `gpt_image_1_5`, `nano_banana_pro` и новые варианты Kling: `kling_2_5`, `kling_2_5_pro`, `kling_2_6`, `kling_2_6_pro`, `kling_2_6_motion_control`, `kling_3_motion_control`, `kling_3_motion_control_pro`, `kling_3_omni`, `kling_3_omni_pro`, `kling_3_omni_edit`, `kling_3_omni_edit_pro`, `kling_omni`, `kling_omni_pro`.
* Добавлены видео-модели `sora` и `sora_pro` с параметрами `images`, `params.aspect_ratio`, `params.size` и `params.seconds`.
* Уточнено, что ключ `gpt_5` в документации относится к поколению GPT-5.5.
* Уточнены параметры `gpt_image`: субмодели `gpt_image_2` / `gpt_image_1_5`, качество `medium` / `high`, форматы `1:1`, `2:3`, `3:2`.
* Уточнён параметр фона `params.background` для `gpt_image`, `gpt_image_2` и `gpt_image_1_5`.
* Уточнены параметры `flux_2_pro`: разрешения `1k`, `2k`, `4k` и поддерживаемые соотношения сторон.
* Обновлены команды `..._done`, категории сегментации и ограничивающие категории для активных голосовых, фото- и видео-моделей.
* Приведена документация PxAI Tracker к единому формату.
* Уточнена обязательная база запроса: `bot`, `token`, `user`, `model`.
* Добавлены комментированные `jsonc`-примеры с `//` для параметров каждой модели.
* Разделены обязательные, необязательные и условные параметры моделей.
* Добавлены отдельные статьи по методам Suno: простая генерация, кастомная генерация, кавер, продление и разделение трека.
* Добавлены submodels Suno и новая музыкальная модель `flow_music`.

</details>

## Февраль 2026

<details>

<summary>Новое</summary>

* Создан репозиторий документации PuzzleDocs.
* Добавлена базовая структура GitBook (`README.md`, `SUMMARY.md`, `.gitbook.yaml`).
* Добавлен раздел с правилами документирования в `SKILL.md`.
* Добавлена тестовая статья по модели `gpt_free`.

</details>

<details>

<summary>Фиксы</summary>

* Уточнено правило: изменения и PR допускаются только из ветки `main`.
* Добавлена стандартизированная секция changelog с форматом «Новое / Фиксы».

</details>
