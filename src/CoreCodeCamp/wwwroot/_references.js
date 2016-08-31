﻿/// <autosync enabled="true" />
/// <reference path="../gulpfile.js" />
/// <reference path="../webpack.config.dev.js" />
/// <reference path="../webpack.config.js" />
/// <reference path="../webpack.config.prod.js" />
/// <reference path="../webpack.config.vendor.js" />
/// <reference path="../webpack.config.js" />
/// <reference path="js/app/common/dataservice.js" />
/// <reference path="js/app/schedule/scheduleform.js" />
/// <reference path="js/app/speaker/speakerform.js" />
/// <reference path="js/site.js" />
/// <reference path="lib/angular2/common/esm/src/pipes/common_pipes.js" />
/// <reference path="lib/angular2/common/esm/src/pipes/date_pipe.js" />
/// <reference path="lib/angular2/common/esm/src/pipes/i18n_plural_pipe.js" />
/// <reference path="lib/angular2/common/esm/src/pipes/i18n_select_pipe.js" />
/// <reference path="lib/angular2/common/esm/src/pipes/invalid_pipe_argument_exception.js" />
/// <reference path="lib/angular2/common/esm/src/pipes/json_pipe.js" />
/// <reference path="lib/angular2/common/esm/src/pipes/lowercase_pipe.js" />
/// <reference path="lib/angular2/common/esm/src/pipes/number_pipe.js" />
/// <reference path="lib/angular2/common/esm/src/pipes/replace_pipe.js" />
/// <reference path="lib/angular2/common/esm/src/pipes/slice_pipe.js" />
/// <reference path="lib/angular2/common/esm/src/pipes/uppercase_pipe.js" />
/// <reference path="lib/angular2/core/esm/index.js" />
/// <reference path="lib/angular2/core/esm/private_export.js" />
/// <reference path="lib/angular2/core/esm/src/animation/active_animation_players_map.js" />
/// <reference path="lib/angular2/core/esm/src/animation/animation_constants.js" />
/// <reference path="lib/angular2/core/esm/src/animation/animation_driver.js" />
/// <reference path="lib/angular2/core/esm/src/animation/animation_group_player.js" />
/// <reference path="lib/angular2/core/esm/src/animation/animation_keyframe.js" />
/// <reference path="lib/angular2/core/esm/src/animation/animation_player.js" />
/// <reference path="lib/angular2/core/esm/src/animation/animation_sequence_player.js" />
/// <reference path="lib/angular2/core/esm/src/animation/animation_style_util.js" />
/// <reference path="lib/angular2/core/esm/src/animation/animation_styles.js" />
/// <reference path="lib/angular2/core/esm/src/animation/metadata.js" />
/// <reference path="lib/angular2/core/esm/src/change_detection/change_detection.js" />
/// <reference path="lib/angular2/core/esm/src/change_detection/change_detection_util.js" />
/// <reference path="lib/angular2/core/esm/src/change_detection/change_detector_ref.js" />
/// <reference path="lib/angular2/core/esm/src/change_detection/constants.js" />
/// <reference path="lib/angular2/core/esm/testing.js" />
/// <reference path="lib/angular2/platform-browser/esm/src/browser/browser_adapter.js" />
/// <reference path="lib/angular2/platform-browser/esm/src/browser/generic_browser_adapter.js" />
/// <reference path="lib/angular2/platform-browser/esm/src/browser/testability.js" />
/// <reference path="lib/angular2/platform-browser/esm/src/browser/title.js" />
/// <reference path="lib/angular2/platform-browser/esm/src/dom/dom_adapter.js" />
/// <reference path="lib/angular2/platform-browser/esm/src/dom/dom_animate_player.js" />
/// <reference path="lib/angular2/platform-browser/esm/src/dom/dom_renderer.js" />
/// <reference path="lib/angular2/platform-browser/esm/src/dom/dom_tokens.js" />
/// <reference path="lib/angular2/platform-browser/esm/src/dom/shared_styles_host.js" />
/// <reference path="lib/angular2/platform-browser/esm/src/dom/util.js" />
/// <reference path="lib/angular2/platform-browser/esm/src/dom/web_animations_driver.js" />
/// <reference path="lib/angular2/platform-browser/esm/src/dom/web_animations_player.js" />
/// <reference path="lib/angular2/platform-browser/esm/src/facade/async.js" />
/// <reference path="lib/angular2/platform-browser/esm/src/facade/base_wrapped_exception.js" />
/// <reference path="lib/angular2/platform-browser/esm/src/web_workers/shared/serialized_types.js" />
/// <reference path="lib/angular2/platform-browser/esm/src/web_workers/shared/serializer.js" />
/// <reference path="lib/angular2/platform-browser/esm/src/web_workers/shared/service_message_broker.js" />
/// <reference path="lib/angular2/platform-browser/esm/src/web_workers/worker/event_deserializer.js" />
/// <reference path="lib/angular2/platform-browser/esm/src/web_workers/worker/location_providers.js" />
/// <reference path="lib/angular2/platform-browser/esm/src/web_workers/worker/platform_location.js" />
/// <reference path="lib/angular2/platform-browser/esm/src/web_workers/worker/renderer.js" />
/// <reference path="lib/angular2/platform-browser/esm/src/web_workers/worker/worker_adapter.js" />
/// <reference path="lib/angular2/platform-browser/index.js" />
/// <reference path="lib/angular2/platform-browser/private_export.js" />
/// <reference path="lib/angular2/platform-browser/testing.js" />
/// <reference path="lib/angular2/platform-browser/testing_e2e.js" />
/// <reference path="lib/angular2/platform-browser-dynamic/core_private.js" />
/// <reference path="lib/angular2/platform-browser-dynamic/index.js" />
/// <reference path="lib/angular2/platform-browser-dynamic/platform_browser_private.js" />
/// <reference path="lib/angular2/platform-browser-dynamic/private_export_testing.js" />
/// <reference path="lib/angular2/platform-browser-dynamic/testing.js" />
/// <reference path="lib/angular2/router/index.js" />
/// <reference path="lib/angular2/router-deprecated/core_private.js" />
/// <reference path="lib/angular2/router-deprecated/esm/src/rules/route_handlers/async_route_handler.js" />
/// <reference path="lib/angular2/router-deprecated/esm/src/rules/route_handlers/route_handler.js" />
/// <reference path="lib/angular2/router-deprecated/esm/src/rules/route_handlers/sync_route_handler.js" />
/// <reference path="lib/angular2/router-deprecated/esm/src/rules/route_paths/param_route_path.js" />
/// <reference path="lib/angular2/router-deprecated/esm/src/rules/route_paths/regex_route_path.js" />
/// <reference path="lib/angular2/router-deprecated/esm/src/rules/route_paths/route_path.js" />
/// <reference path="lib/angular2/router-deprecated/index.js" />
/// <reference path="lib/angular2/router-deprecated/router.js" />
/// <reference path="lib/angular2/router-deprecated/testing.js" />
/// <reference path="lib/rxjs/Rx.DOM.js" />
/// <reference path="lib/rxjs/Rx.KitchenSink.js" />
/// <reference path="lib/rxjs/src/Rx.global.js" />
/// <reference path="lib/systemjs/system-csp-production.src.js" />
/// <reference path="lib/bootstrap/dist/js/bootstrap.js" />
/// <reference path="lib/jquery-backstretch/jquery.backstretch.js" />
/// <reference path="lib/jquery-ui/jquery-ui.js" />
/// <reference path="lib/jquery-validation/dist/jquery.validate.js" />
/// <reference path="lib/jquery-validation-unobtrusive/jquery.validate.unobtrusive.js" />
/// <reference path="lib/waypoints/waypoints.js" />
/// <reference path="lib/wow/dist/wow.js" />
/// <reference path="template/js/scripts.js" />
