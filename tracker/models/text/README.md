# Текстовые модели

Эти модели подходят для генерации и редактирования текста, анализа, программирования и задач с рассуждением. Для изображений используйте [Vision](vision.md), а для файлов — [Создание документов](document-creation.md).

## Как отправить запрос

- URL-адрес: `https://api.pxsto.re/main/puzzlebot-tracker`
- Метод: `POST`
- Вид запроса в PuzzleBot: `Сформированный`

Минимальный набор полей: `bot`, `token`, `user`, `model` и `prompt`.

```jsonc
{
  "bot": "{{BOT_USERNAME_TEXT}}", // обязательно: username бота.
  "token": "[Ваш API-токен]", // обязательно: API-токен бота.
  "user": "{{USER_ID_TEXT}}", // обязательно: ID пользователя или сессии.
  "model": "gpt_5", // обязательно: ключ модели из таблицы ниже.
  "prompt": "{{prompt}}", // обязательно: текст задачи.
  "role": "[текст роли]", // необязательно: стиль и дополнительные инструкции.
  "send_answer": true // необязательно: отправить ответ в чат.
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
| `role` | текст | Необязательная роль, стиль или ограничения. |
| `params.max_tokens` | число | Необязательное ограничение длины ответа. |
| `send_answer` | `true` / `false` | Отправить ответ в чат или сохранить в `{{tracker_answer}}`. |

## Основные модели

| Ключ | Модель | Стоимость |
| --- | --- | ---: |
| `gpt_free` | GPT-5 Nano | 💠10 |
| `gpt_5` | GPT-5 | 💠25 |
| `gpt_5_mini` | GPT-5 Mini | 💠10 |
| `gpt_4_1` | GPT-4.1 | 💠15 |
| `gemini_3_pro` | Gemini 3 Pro | 💠30 |
| `gemini_3_flash` | Gemini 3 Flash | 💠15 |
| `gemini_2_5_pro` | Gemini 2.5 Pro | 💠25 |
| `gemini_2_5_flash` | Gemini 2.5 Flash | 💠10 |
| `claude_4_5_haiku` | Claude 4.5 Haiku | 💠25 |
| `grok_4` | Grok 4 | 💠35 |
| `deepseek` | DeepSeek | 💠10 |
| `web_search` | Поиск в интернете | 💠30 |
| `gpt_luna` | Луна | 💠30 |
| `gpt_terra` | Земля | 💠60 |
| `gpt_sol` | Солнце | 💠120 |

`💠—` означает, что точная стоимость показывается в интерфейсе перед запуском.

## Все текстовые модели

В поле `model` передавайте точный ключ из первой колонки.

| Ключ | Модель | Стоимость |
| --- | --- | ---: |
| `gpt_audio` | Виспер | 💠2 |
| `grok_4` | Грок 4 | 💠35 |
| `gemini_2_5_pro` | Джеминай 2.5 про | 💠25 |
| `gemini_2_5_flash` | Джеминай 2.5 флэш | 💠10 |
| `gemini_3_pro` | Джеминай 3 про | 💠30 |
| `gemini_3_flash` | Джеминай 3 флэш | 💠15 |
| `gpt_4_1` | Джипити 4.1 | 💠15 |
| `gpt_5` | Джипити 5 | 💠25 |
| `gpt_5_mini` | Джипити 5 мини | 💠10 |
| `gpt_free` | Джипити 5 нано беспл. | 💠10 |
| `deepseek` | ДипСик | 💠10 |
| `gpt_terra` | Земля | 💠60 |
| `claude_4_5_haiku` | Клод 4.5 хайку | 💠25 |
| `gpt_luna` | Луна | 💠30 |
| `web_search` | Поиск в интернет | 💠30 |
| `gpt_sol` | Солнце | 💠120 |
| `aion_labs_aion_1_0` | Aion-1.0 | 💠27 |
| `aion_labs_aion_1_0_mini` | Aion-1.0-Mini | 💠20 |
| `aion_labs_aion_2_0` | Aion-2.0 | 💠25 |
| `aion_labs_aion_3_0` | Aion-3.0 | 💠— |
| `aion_labs_aion_3_0_mini` | Aion-3.0-Mini | 💠— |
| `aion_labs_aion_rp_llama_3_1_8b` | Aion-RP 1.0 (8B) | 💠25 |
| `anthropic_claude_3_haiku` | Claude 3 Haiku | 💠14 |
| `anthropic_claude_3_5_haiku` | Claude 3.5 Haiku | 💠27 |
| `anthropic_claude_fable_5` | Claude Fable 5 | 💠350 |
| `latest_anthropic_claude_fable_latest` | Claude Fable Latest | 💠350 |
| `anthropic_claude_haiku_4_5` | Claude Haiku 4.5 | 💠25 |
| `latest_anthropic_claude_haiku_latest` | Claude Haiku Latest | 💠25 |
| `anthropic_claude_opus_4` | Claude Opus 4 | 💠225 |
| `anthropic_claude_opus_4_1` | Claude Opus 4.1 | 💠225 |
| `anthropic_claude_opus_4_5` | Claude Opus 4.5 | 💠150 |
| `anthropic_claude_opus_4_6` | Claude Opus 4.6 | 💠165 |
| `anthropic_claude_opus_4_6_fast` | Claude Opus 4.6 (Fast) | 💠220 |
| `anthropic_claude_opus_4_7` | Claude Opus 4.7 | 💠180 |
| `anthropic_claude_opus_4_7_fast` | Claude Opus 4.7 (Fast) | 💠220 |
| `anthropic_claude_opus_4_8` | Claude Opus 4.8 | 💠220 |
| `anthropic_claude_opus_4_8_fast` | Claude Opus 4.8 (Fast) | 💠180 |
| `anthropic_claude_opus_5` | Claude Opus 5 | 💠— |
| `anthropic_claude_opus_5_fast` | Claude Opus 5 (Fast) | 💠— |
| `latest_anthropic_claude_opus_latest` | Claude Opus Latest | 💠220 |
| `anthropic_claude_sonnet_4` | Claude Sonnet 4 | 💠44 |
| `anthropic_claude_sonnet_4_5` | Claude Sonnet 4.5 | 💠44 |
| `anthropic_claude_sonnet_4_6` | Claude Sonnet 4.6 | 💠44 |
| `anthropic_claude_sonnet_5` | Claude Sonnet 5 | 💠— |
| `latest_anthropic_claude_sonnet_latest` | Claude Sonnet Latest | 💠44 |
| `arcee_ai_coder_large` | Coder Large | 💠14 |
| `mistralai_codestral_2508` | Codestral 2508 | 💠13 |
| `deepcogito_cogito_v2_1_671b` | Cogito v2.1 671B | 💠26 |
| `cohere_command_a` | Command A | 💠28 |
| `cohere_command_r_08_2024` | Command R (08-2024) | 💠11 |
| `cohere_command_r_plus_08_2024` | Command R+ (08-2024) | 💠28 |
| `cohere_command_r7b_12_2024` | Command R7B (12-2024) | 💠2 |
| `thedrummer_cydonia_24b_v4_1` | Cydonia 24B V4.1 | 💠11 |
| `deepseek_deepseek_chat` | DeepSeek V3 | 💠12 |
| `deepseek_deepseek_chat_v3_0324` | DeepSeek V3 0324 | 💠12 |
| `deepseek_deepseek_chat_v3_1` | DeepSeek V3.1 | 💠12 |
| `deepseek_deepseek_v3_1_terminus` | DeepSeek V3.1 Terminus | 💠13 |
| `deepseek_deepseek_v3_2_exp` | DeepSeek V3.2 Exp | 💠11 |
| `deepseek_deepseek_v4_flash` | DeepSeek V4 Flash | 💠2 |
| `deepseek_deepseek_v4_pro` | DeepSeek V4 Pro | 💠14 |
| `mistralai_devstral_2512` | Devstral 2 2512 | 💠25 |
| `baidu_ernie_4_5_vl_424b_a47b` | ERNIE 4.5 VL 424B A47B | 💠15 |
| `sakana_fugu_ultra` | Fugu Ultra | 💠— |
| `google_gemini_2_5_flash` | Gemini 2.5 Flash | 💠30 |
| `google_gemini_2_5_flash_lite_preview_09_2025` | Gemini 2.5 Flash Lite Preview 09-2025 | 💠10 |
| `google_gemini_2_5_pro_preview_05_06` | Gemini 2.5 Pro Preview 05-06 | 💠25 |
| `google_gemini_2_5_pro_preview` | Gemini 2.5 Pro Preview 06-05 | 💠25 |
| `google_gemini_3_flash_preview` | Gemini 3 Flash Preview | 💠40 |
| `google_gemini_3_1_flash_lite` | Gemini 3.1 Flash Lite | 💠15 |
| `google_gemini_3_1_flash_lite_preview` | Gemini 3.1 Flash Lite Preview | 💠15 |
| `google_gemini_3_1_pro_preview_customtools` | Gemini 3.1 Pro Preview Custom Tools | 💠30 |
| `google_gemini_3_5_flash_lite` | Gemini 3.5 Flash Lite | 💠— |
| `google_gemini_3_6_flash` | Gemini 3.6 Flash | 💠— |
| `latest_google_gemini_flash_latest` | Gemini Flash Latest | 💠19 |
| `latest_google_gemini_pro_latest` | Gemini Pro Latest | 💠30 |
| `google_gemma_2_27b_it` | Gemma 2 27B | 💠14 |
| `google_gemma_3_4b_it` | Gemma 3 4B | 💠2 |
| `google_gemma_3_12b_it` | Gemma 3 12B | 💠2 |
| `google_gemma_3_27b_it` | Gemma 3 27B | 💠2 |
| `google_gemma_3n_e4b_it` | Gemma 3n 4B | 💠2 |
| `google_gemma_4_26b_a4b_it` | Gemma 4 26B A4B | 💠2 |
| `google_gemma_4_26b_a4b_it_free` | Gemma 4 26B A4B (free) | 💠1 |
| `google_gemma_4_31b_it` | Gemma 4 31B | 💠8 |
| `google_gemma_4_31b_it_free` | Gemma 4 31B (free) | 💠1 |
| `z_ai_glm_4_5` | GLM 4.5 | 💠31 |
| `z_ai_glm_4_5_air` | GLM 4.5 Air | 💠12 |
| `z_ai_glm_4_5v` | GLM 4.5V | 💠25 |
| `z_ai_glm_4_6` | GLM 4.6 | 💠21 |
| `z_ai_glm_4_6v` | GLM 4.6V | 💠13 |
| `z_ai_glm_4_7` | GLM 4.7 | 💠21 |
| `z_ai_glm_4_7_flash` | GLM 4.7 Flash | 💠7 |
| `z_ai_glm_5` | GLM 5 | 💠26 |
| `z_ai_glm_5_turbo` | GLM 5 Turbo | 💠26 |
| `z_ai_glm_5_1` | GLM 5.1 | 💠15 |
| `z_ai_glm_5_2` | GLM 5.2 | 💠— |
| `z_ai_glm_5v_turbo` | GLM 5V Turbo | 💠— |
| `openai_gpt_chat_latest` | GPT Chat Latest | 💠86 |
| `latest_openai_gpt_latest` | GPT Latest | 💠86 |
| `latest_openai_gpt_mini_latest` | GPT Mini Latest | 💠25 |
| `openai_gpt_3_5_turbo` | GPT-3.5 Turbo | 💠19 |
| `openai_gpt_3_5_turbo_0613` | GPT-3.5 Turbo (older v0613) | 💠33 |
| `openai_gpt_3_5_turbo_16k` | GPT-3.5 Turbo 16k | 💠12 |
| `openai_gpt_3_5_turbo_instruct` | GPT-3.5 Turbo Instruct | 💠40 |
| `openai_gpt_4` | GPT-4 | 💠221 |
| `openai_gpt_4_turbo` | GPT-4 Turbo | 💠98 |
| `openai_gpt_4_turbo_preview` | GPT-4 Turbo Preview | 💠98 |
| `openai_gpt_4_1_mini` | GPT-4.1 Mini | 💠19 |
| `openai_gpt_4_1_nano` | GPT-4.1 Nano | 💠10 |
| `openai_gpt_4o` | GPT-4o | 💠28 |
| `openai_gpt_4o_2024_05_13` | GPT-4o (2024-05-13) | 💠49 |
| `openai_gpt_4o_2024_08_06` | GPT-4o (2024-08-06) | 💠28 |
| `openai_gpt_4o_2024_11_20` | GPT-4o (2024-11-20) | 💠28 |
| `openai_gpt_4o_search_preview` | GPT-4o Search Preview | 💠28 |
| `openai_gpt_4o_mini` | GPT-4o-mini | 💠11 |
| `openai_gpt_4o_mini_2024_07_18` | GPT-4o-mini (2024-07-18) | 💠11 |
| `openai_gpt_4o_mini_search_preview` | GPT-4o-mini Search Preview | 💠11 |
| `openai_gpt_5` | GPT-5 | 💠25 |
| `openai_gpt_5_chat` | GPT-5 Chat | 💠25 |
| `openai_gpt_5_codex` | GPT-5 Codex | 💠25 |
| `openai_gpt_5_mini` | GPT-5 Mini | 💠23 |
| `openai_gpt_5_nano` | GPT-5 Nano | 💠6 |
| `openai_gpt_5_pro` | GPT-5 Pro | 💠330 |
| `openai_gpt_5_1` | GPT-5.1 | 💠25 |
| `openai_gpt_5_1_chat` | GPT-5.1 Chat | 💠25 |
| `openai_gpt_5_1_codex` | GPT-5.1-Codex | 💠25 |
| `openai_gpt_5_1_codex_max` | GPT-5.1-Codex-Max | 💠25 |
| `openai_gpt_5_1_codex_mini` | GPT-5.1-Codex-Mini | 💠23 |
| `openai_gpt_5_2` | GPT-5.2 | 💠39 |
| `openai_gpt_5_2_chat` | GPT-5.2 Chat | 💠39 |
| `openai_gpt_5_2_pro` | GPT-5.2 Pro | 💠463 |
| `openai_gpt_5_2_codex` | GPT-5.2-Codex | 💠39 |
| `openai_gpt_5_3_chat` | GPT-5.3 Chat | 💠39 |
| `openai_gpt_5_3_codex` | GPT-5.3-Codex | 💠39 |
| `openai_gpt_5_4_pro` | GPT-5.4 Pro | 💠500 |
| `openai_gpt_5_5` | GPT-5.5 | 💠86 |
| `openai_gpt_5_5_pro` | GPT-5.5 Pro | 💠500 |
| `openai_gpt_5_6_luna` | GPT-5.6 Luna | 💠— |
| `openai_gpt_5_6_sol` | GPT-5.6 Sol | 💠— |
| `openai_gpt_5_6_terra` | GPT-5.6 Terra | 💠— |
| `openai_gpt_oss_20b` | gpt-oss-20b | 💠2 |
| `openai_gpt_oss_20b_free` | gpt-oss-20b (free) | 💠1 |
| `openai_gpt_oss_120b` | gpt-oss-120b | 💠2 |
| `openai_gpt_oss_120b_free` | gpt-oss-120b (free) | 💠1 |
| `openai_gpt_oss_safeguard_20b` | gpt-oss-safeguard-20b | 💠2 |
| `ibm_granite_granite_4_0_h_micro` | Granite 4.0 Micro | 💠2 |
| `ibm_granite_granite_4_1_8b` | Granite 4.1 8B | 💠2 |
| `x_ai_grok_4_5` | Grok 4.5 | 💠— |
| `x_ai_grok_4_20` | Grok 4.20 | 💠35 |
| `x_ai_grok_4_20_multi_agent` | Grok 4.20 Multi-Agent | 💠13 |
| `x_ai_grok_build_0_1` | Grok Build 0.1 | 💠33 |
| `latest_x_ai_grok_latest` | Grok Latest | 💠— |
| `nousresearch_hermes_3_llama_3_1_70b` | Hermes 3 70B Instruct | 💠14 |
| `nousresearch_hermes_3_llama_3_1_405b` | Hermes 3 405B Instruct | 💠19 |
| `nousresearch_hermes_3_llama_3_1_405b_free` | Hermes 3 405B Instruct (free) | 💠1 |
| `nousresearch_hermes_4_70b` | Hermes 4 70B | 💠10 |
| `nousresearch_hermes_4_405b` | Hermes 4 405B | 💠14 |
| `tencent_hunyuan_a13b_instruct` | Hunyuan A13B Instruct | 💠11 |
| `tencent_hy3` | Hy3 | 💠— |
| `tencent_hy3_preview` | Hy3 preview | 💠2 |
| `inflection_inflection_3_pi` | Inflection 3 Pi | 💠28 |
| `inflection_inflection_3_productivity` | Inflection 3 Productivity | 💠28 |
| `thinkingmachines_inkling` | Inkling | 💠— |
| `prime_intellect_intellect_3` | INTELLECT-3 | 💠14 |
| `ai21_jamba_large_1_7` | Jamba Large 1.7 | 💠15 |
| `kwaipilot_kat_coder_air_v2_5` | KAT-Coder-Air V2.5 | 💠— |
| `kwaipilot_kat_coder_pro_v2` | KAT-Coder-Pro V2 | 💠14 |
| `kwaipilot_kat_coder_pro_v2_5` | KAT-Coder-Pro V2.5 | 💠— |
| `moonshotai_kimi_k2` | Kimi K2 0711 | 💠31 |
| `moonshotai_kimi_k2_0905` | Kimi K2 0905 | 💠35 |
| `moonshotai_kimi_k2_thinking` | Kimi K2 Thinking | 💠35 |
| `moonshotai_kimi_k2_5` | Kimi K2.5 | 💠22 |
| `moonshotai_kimi_k2_6` | Kimi K2.6 | 💠15 |
| `moonshotai_kimi_k2_7_code` | Kimi K2.7 Code | 💠— |
| `moonshotai_kimi_k3` | Kimi K3 | 💠— |
| `poolside_laguna_m_1` | Laguna M.1 | 💠— |
| `poolside_laguna_m_1_free` | Laguna M.1 (free) | 💠1 |
| `poolside_laguna_s_2_1` | Laguna S 2.1 | 💠— |
| `poolside_laguna_s_2_1_free` | Laguna S 2.1 (free) | 💠— |
| `poolside_laguna_xs_2_1` | Laguna XS 2.1 | 💠— |
| `poolside_laguna_xs_2_1_free` | Laguna XS 2.1 (free) | 💠— |
| `poolside_laguna_xs_2_free` | Laguna XS.2 (free) | 💠1 |
| `liquid_lfm_2_24b_a2b` | LFM2-24B-A2B | 💠2 |
| `liquid_lfm_2_5_1_2b_instruct_free` | LFM2.5-1.2B-Instruct (free) | 💠1 |
| `liquid_lfm_2_5_1_2b_thinking_free` | LFM2.5-1.2B-Thinking (free) | 💠1 |
| `inclusionai_ling_2_6_1t` | Ling-2.6-1T | 💠11 |
| `inclusionai_ling_2_6_flash` | Ling-2.6-flash | 💠2 |
| `inclusionai_ling_3_0_flash_free` | Ling-3.0-flash (free) | 💠— |
| `meta_llama_llama_3_8b_instruct` | Llama 3 8B Instruct | 💠2 |
| `sao10k_l3_lunaris_8b` | Llama 3 8B Lunaris | 💠2 |
| `meta_llama_llama_3_70b_instruct` | Llama 3 70B Instruct | 💠13 |
| `meta_llama_llama_3_1_8b_instruct` | Llama 3.1 8B Instruct | 💠2 |
| `sao10k_l3_1_70b_hanami_x1` | Llama 3.1 70B Hanami x1 | 💠11 |
| `meta_llama_llama_3_1_70b_instruct` | Llama 3.1 70B Instruct | 💠11 |
| `sao10k_l3_1_euryale_70b` | Llama 3.1 Euryale 70B v2.2 | 💠15 |
| `meta_llama_llama_3_2_1b_instruct` | Llama 3.2 1B Instruct | 💠2 |
| `meta_llama_llama_3_2_3b_instruct` | Llama 3.2 3B Instruct | 💠2 |
| `meta_llama_llama_3_2_3b_instruct_free` | Llama 3.2 3B Instruct (free) | 💠1 |
| `meta_llama_llama_3_2_11b_vision_instruct` | Llama 3.2 11B Vision Instruct | 💠11 |
| `meta_llama_llama_3_3_70b_instruct` | Llama 3.3 70B Instruct | 💠4 |
| `meta_llama_llama_3_3_70b_instruct_free` | Llama 3.3 70B Instruct (free) | 💠1 |
| `sao10k_l3_3_euryale_70b` | Llama 3.3 Euryale 70B | 💠14 |
| `nvidia_llama_3_3_nemotron_super_49b_v1_5` | Llama 3.3 Nemotron Super 49B V1.5 | 💠11 |
| `meta_llama_llama_4_maverick` | Llama 4 Maverick | 💠11 |
| `meta_llama_llama_4_scout` | Llama 4 Scout | 💠2 |
| `meta_llama_llama_guard_3_8b` | Llama Guard 3 8B | 💠10 |
| `meta_llama_llama_guard_4_12b` | Llama Guard 4 12B | 💠2 |
| `meituan_longcat_2_0` | LongCat 2.0 | 💠— |
| `anthracite_org_magnum_v4_72b` | Magnum v4 72B | 💠13 |
| `inception_mercury_2` | Mercury 2 | 💠12 |
| `xiaomi_mimo_v2_flash` | MiMo-V2-Flash | 💠2 |
| `xiaomi_mimo_v2_5` | MiMo-V2.5 | 💠4 |
| `xiaomi_mimo_v2_5_pro` | MiMo-V2.5-Pro | 💠14 |
| `minimax_minimax_m1` | MiniMax M1 | 💠28 |
| `minimax_minimax_m2` | MiniMax M2 | 💠13 |
| `minimax_minimax_m2_her` | MiniMax M2-her | 💠14 |
| `minimax_minimax_m2_1` | MiniMax M2.1 | 💠13 |
| `minimax_minimax_m2_5` | MiniMax M2.5 | 💠13 |
| `minimax_minimax_m2_7` | MiniMax M2.7 | 💠13 |
| `minimax_minimax_m3` | MiniMax M3 | 💠14 |
| `minimax_minimax_01` | MiniMax-01 | 💠14 |
| `mistralai_ministral_3b_2512` | Ministral 3 3B 2512 | 💠2 |
| `mistralai_ministral_8b_2512` | Ministral 3 8B 2512 | 💠2 |
| `mistralai_ministral_14b_2512` | Ministral 3 14B 2512 | 💠2 |
| `mistralai_mistral_large` | Mistral Large | 💠13 |
| `mistralai_mistral_large_2512` | Mistral Large 3 2512 | 💠19 |
| `mistralai_mistral_large_2407` | Mistral Large 2407 | 💠13 |
| `mistralai_mistral_medium_3` | Mistral Medium 3 | 💠25 |
| `mistralai_mistral_medium_3_1` | Mistral Medium 3.1 | 💠25 |
| `mistralai_mistral_medium_3_5` | Mistral Medium 3.5 | 💠14 |
| `mistralai_mistral_nemo` | Mistral Nemo | 💠2 |
| `mistralai_mistral_small_24b_instruct_2501` | Mistral Small 3 | 💠2 |
| `mistralai_mistral_small_3_1_24b_instruct` | Mistral Small 3.1 24B | 💠12 |
| `mistralai_mistral_small_3_2_24b_instruct` | Mistral Small 3.2 24B | 💠2 |
| `mistralai_mistral_small_2603` | Mistral Small 4 | 💠11 |
| `mistralai_mixtral_8x22b_instruct` | Mixtral 8x22B Instruct | 💠13 |
| `latest_moonshotai_kimi_latest` | MoonshotAI Kimi Latest | 💠15 |
| `morph_morph_v3_fast` | Morph V3 Fast | 💠19 |
| `morph_morph_v3_large` | Morph V3 Large | 💠30 |
| `meta_muse_spark_1_1` | Muse Spark 1.1 | 💠— |
| `gryphe_mythomax_l2_13b` | MythoMax 13B | 💠2 |
| `nvidia_nemotron_3_nano_30b_a3b` | Nemotron 3 Nano 30B A3B | 💠2 |
| `nvidia_nemotron_3_nano_30b_a3b_free` | Nemotron 3 Nano 30B A3B (free) | 💠1 |
| `nvidia_nemotron_3_nano_omni_30b_a3b_reasoning_free` | Nemotron 3 Nano Omni (free) | 💠1 |
| `nvidia_nemotron_3_super_120b_a12b` | Nemotron 3 Super | 💠10 |
| `nvidia_nemotron_3_super_120b_a12b_free` | Nemotron 3 Super (free) | 💠1 |
| `nvidia_nemotron_3_ultra_550b_a55b` | Nemotron 3 Ultra | 💠33 |
| `nvidia_nemotron_3_ultra_550b_a55b_free` | Nemotron 3 Ultra (free) | 💠1 |
| `nvidia_nemotron_3_5_content_safety_free` | Nemotron 3.5 Content Safety (free) | 💠1 |
| `nvidia_nemotron_nano_9b_v2_free` | Nemotron Nano 9B V2 (free) | 💠1 |
| `nvidia_nemotron_nano_12b_v2_vl_free` | Nemotron Nano 12B 2 VL (free) | 💠1 |
| `nex_agi_nex_n2_mini` | Nex-N2-Mini | 💠— |
| `nex_agi_nex_n2_pro` | Nex-N2-Pro | 💠— |
| `nex_agi_nex_n2_pro_free` | Nex-N2-Pro (free) | 💠1 |
| `cohere_north_mini_code_free` | North Mini Code (free) | 💠— |
| `amazon_nova_2_lite_v1` | Nova 2 Lite | 💠30 |
| `amazon_nova_lite_v1` | Nova Lite 1.0 | 💠2 |
| `amazon_nova_micro_v1` | Nova Micro 1.0 | 💠2 |
| `amazon_nova_premier_v1` | Nova Premier 1.0 | 💠37 |
| `amazon_nova_pro_v1` | Nova Pro 1.0 | 💠14 |
| `openai_o1` | o1 | 💠184 |
| `openai_o1_pro` | o1-pro | 💠500 |
| `openai_o3` | o3 | 💠15 |
| `openai_o3_deep_research` | o3 Deep Research | 💠123 |
| `openai_o3_mini` | o3 Mini | 💠11 |
| `openai_o3_mini_high` | o3 Mini High | 💠11 |
| `openai_o3_pro` | o3 Pro | 💠245 |
| `openai_o4_mini` | o4 Mini | 💠11 |
| `openai_o4_mini_deep_research` | o4 Mini Deep Research | 💠15 |
| `openai_o4_mini_high` | o4 Mini High | 💠11 |
| `allenai_olmo_3_32b_think` | Olmo 3 32B Think | 💠11 |
| `writer_palmyra_x5` | Palmyra X5 | 💠12 |
| `perceptron_perceptron_mk1` | Perceptron Mk1 | 💠15 |
| `microsoft_phi_4` | Phi 4 | 💠2 |
| `microsoft_phi_4_mini_instruct` | Phi 4 Mini Instruct | 💠5 |
| `qwen_qwen_plus_2025_07_28` | Qwen Plus 0728 | 💠12 |
| `qwen_qwen_plus_2025_07_28_thinking` | Qwen Plus 0728 (thinking) | 💠12 |
| `qwen_qwen_plus` | Qwen-Plus | 💠12 |
| `qwen_qwen_2_5_7b_instruct` | Qwen2.5 7B Instruct | 💠2 |
| `qwen_qwen_2_5_72b_instruct` | Qwen2.5 72B Instruct | 💠11 |
| `qwen_qwen_2_5_coder_32b_instruct` | Qwen2.5 Coder 32B Instruct | 💠15 |
| `qwen_qwen2_5_vl_72b_instruct` | Qwen2.5 VL 72B Instruct | 💠16 |
| `qwen_qwen3_8b` | Qwen3 8B | 💠6 |
| `qwen_qwen3_14b` | Qwen3 14B | 💠2 |
| `qwen_qwen3_30b_a3b` | Qwen3 30B A3B | 💠11 |
| `qwen_qwen3_30b_a3b_instruct_2507` | Qwen3 30B A3B Instruct 2507 | 💠2 |
| `qwen_qwen3_30b_a3b_thinking_2507` | Qwen3 30B A3B Thinking 2507 | 💠9 |
| `qwen_qwen3_32b` | Qwen3 32B | 💠2 |
| `qwen_qwen3_235b_a22b` | Qwen3 235B A22B | 💠23 |
| `qwen_qwen3_235b_a22b_2507` | Qwen3 235B A22B Instruct 2507 | 💠2 |
| `qwen_qwen3_235b_a22b_thinking_2507` | Qwen3 235B A22B Thinking 2507 | 💠2 |
| `qwen_qwen3_coder_30b_a3b_instruct` | Qwen3 Coder 30B A3B Instruct | 💠2 |
| `qwen_qwen3_coder` | Qwen3 Coder 480B A35B | 💠19 |
| `qwen_qwen3_coder_free` | Qwen3 Coder 480B A35B (free) | 💠1 |
| `qwen_qwen3_coder_flash` | Qwen3 Coder Flash | 💠13 |
| `qwen_qwen3_coder_next` | Qwen3 Coder Next | 💠12 |
| `qwen_qwen3_coder_plus` | Qwen3 Coder Plus | 💠13 |
| `qwen_qwen3_max` | Qwen3 Max | 💠25 |
| `qwen_qwen3_max_thinking` | Qwen3 Max Thinking | 💠25 |
| `qwen_qwen3_next_80b_a3b_instruct` | Qwen3 Next 80B A3B Instruct | 💠13 |
| `qwen_qwen3_next_80b_a3b_instruct_free` | Qwen3 Next 80B A3B Instruct (free) | 💠1 |
| `qwen_qwen3_next_80b_a3b_thinking` | Qwen3 Next 80B A3B Thinking | 💠12 |
| `qwen_qwen3_vl_8b_instruct` | Qwen3 VL 8B Instruct | 💠11 |
| `qwen_qwen3_vl_8b_thinking` | Qwen3 VL 8B Thinking | 💠14 |
| `qwen_qwen3_vl_30b_a3b_instruct` | Qwen3 VL 30B A3B Instruct | 💠11 |
| `qwen_qwen3_vl_30b_a3b_thinking` | Qwen3 VL 30B A3B Thinking | 💠15 |
| `qwen_qwen3_vl_32b_instruct` | Qwen3 VL 32B Instruct | 💠10 |
| `qwen_qwen3_vl_235b_a22b_instruct` | Qwen3 VL 235B A22B Instruct | 💠13 |
| `qwen_qwen3_vl_235b_a22b_thinking` | Qwen3 VL 235B A22B Thinking | 💠31 |
| `qwen_qwen3_5_397b_a17b` | Qwen3.5 397B A17B | 💠29 |
| `qwen_qwen3_5_plus_02_15` | Qwen3.5 Plus 2026-02-15 | 💠16 |
| `qwen_qwen3_5_plus_20260420` | Qwen3.5 Plus 2026-04-20 | 💠20 |
| `qwen_qwen3_5_9b` | Qwen3.5-9B | 💠2 |
| `qwen_qwen3_5_27b` | Qwen3.5-27B | 💠16 |
| `qwen_qwen3_5_35b_a3b` | Qwen3.5-35B-A3B | 💠13 |
| `qwen_qwen3_5_122b_a10b` | Qwen3.5-122B-A10B | 💠24 |
| `qwen_qwen3_5_flash_02_23` | Qwen3.5-Flash | 💠2 |
| `qwen_qwen3_6_27b` | Qwen3.6 27B | 💠29 |
| `qwen_qwen3_6_35b_a3b` | Qwen3.6 35B A3B | 💠13 |
| `qwen_qwen3_6_flash` | Qwen3.6 Flash | 💠14 |
| `qwen_qwen3_6_max_preview` | Qwen3.6 Max Preview | 💠13 |
| `qwen_qwen3_6_plus` | Qwen3.6 Plus | 💠23 |
| `qwen_qwen3_7_plus` | Qwen3.7 Plus | 💠15 |
| `deepseek_deepseek_r1` | R1 | 💠36 |
| `deepseek_deepseek_r1_0528` | R1 0528 | 💠28 |
| `deepseek_deepseek_r1_distill_llama_70b` | R1 Distill Llama 70B | 💠15 |
| `deepseek_deepseek_r1_distill_qwen_32b` | R1 Distill Qwen 32B | 💠11 |
| `rekaai_reka_edge` | Reka Edge | 💠2 |
| `rekaai_reka_flash_3` | Reka Flash 3 | 💠2 |
| `relace_relace_apply_3` | Relace Apply 3 | 💠20 |
| `relace_relace_search` | Relace Search | 💠14 |
| `undi95_remm_slerp_l2_13b` | ReMM SLERP 13B | 💠13 |
| `inclusionai_ring_2_6_1t` | Ring-2.6-1T | 💠11 |
| `essentialai_rnj_1_instruct` | Rnj 1 Instruct | 💠2 |
| `thedrummer_rocinante_12b` | Rocinante 12B | 💠11 |
| `mistralai_mistral_saba` | Saba | 💠11 |
| `bytedance_seed_seed_1_6` | Seed 1.6 | 💠23 |
| `bytedance_seed_seed_1_6_flash` | Seed 1.6 Flash | 💠2 |
| `bytedance_seed_seed_2_0_lite` | Seed-2.0-Lite | 💠23 |
| `bytedance_seed_seed_2_0_mini` | Seed-2.0-Mini | 💠10 |
| `thedrummer_skyfall_36b_v2` | Skyfall 36B V2 | 💠14 |
| `upstage_solar_pro_3` | Solar Pro 3 | 💠11 |
| `perplexity_sonar` | Sonar | 💠19 |
| `perplexity_sonar_deep_research` | Sonar Deep Research | 💠15 |
| `perplexity_sonar_pro` | Sonar Pro | 💠44 |
| `perplexity_sonar_pro_search` | Sonar Pro Search | 💠44 |
| `perplexity_sonar_reasoning_pro` | Sonar Reasoning Pro | 💠15 |
| `stepfun_step_3_5_flash` | Step 3.5 Flash | 💠2 |
| `stepfun_step_3_7_flash` | Step 3.7 Flash | 💠14 |
| `switchpoint_router` | Switchpoint Router | 💠18 |
| `arcee_ai_trinity_large_thinking` | Trinity Large Thinking | 💠13 |
| `arcee_ai_trinity_mini` | Trinity Mini | 💠2 |
| `bytedance_ui_tars_1_5_7b` | UI-TARS 7B | 💠2 |
| `cognitivecomputations_dolphin_mistral_24b_venice_edition` | Uncensored | 💠— |
| `cognitivecomputations_dolphin_mistral_24b_venice_db66220940` | Uncensored (free) | 💠1 |
| `thedrummer_unslopnemo_12b` | UnslopNemo 12B | 💠11 |
| `arcee_ai_virtuoso_large` | Virtuoso Large | 💠18 |
| `mancer_weaver` | Weaver (alpha) | 💠15 |
| `microsoft_wizardlm_2_8x22b` | WizardLM-2 8x22B | 💠13 |

## Ответ

При `send_answer=true` результат отправляется пользователю. При `send_answer=false` он сохраняется в `{{tracker_answer}}`.
