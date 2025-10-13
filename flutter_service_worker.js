'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"apple-touch-icon.png": "475027bde1038f82f4b98dbafc510952",
"assets/AssetManifest.bin": "55483397bcf2a1512850ebbc715fae35",
"assets/AssetManifest.bin.json": "49a773a2676f74edcfc7fc4f1597bbaf",
"assets/assets/fonts/Roboto-Bold.ttf": "2e9b3d16308e1642bf8549d58c60f5c9",
"assets/assets/fonts/Roboto-Regular.ttf": "327362a7c8d487ad3f7970cc8e2aba8d",
"assets/assets/icons/accessibility_new.png": "065d8618a0223457a5886bf4fe6486b9",
"assets/assets/icons/access_time.png": "56719faeed9da251faa5ef696099b9db",
"assets/assets/icons/account_balance.png": "ef17f1b1325604b8fbcb9a064f4c2064",
"assets/assets/icons/account_circle.png": "cbf9020ef06fdd52c7a663472f41936f",
"assets/assets/icons/add.png": "0f3833292e326d10765f9f1211aa1d4d",
"assets/assets/icons/add_a_photo.png": "7043c6d9ff3aab9eddf249cfd152a5ab",
"assets/assets/icons/add_circle.png": "be15d6ed0c0b00f8af10bf98869a9eff",
"assets/assets/icons/add_road.png": "8178cbf43fbd4f3422ac1434f7650ca2",
"assets/assets/icons/admin_panel_settings.png": "9bbcccb57d42ddf59f21c8ca9d1bb2da",
"assets/assets/icons/alarm.png": "443b432a9da66b42ed849dee743c392f",
"assets/assets/icons/analytics.png": "c4a0502b6f4e34ec7cd6822cc759114c",
"assets/assets/icons/approval.png": "3ec757610a8ba438312f0949fcebf19f",
"assets/assets/icons/app_registration.png": "2e6a7f445e85376a06c84d1a413406ee",
"assets/assets/icons/architecture.png": "5f47b7a4cbc63b318b66ef140fe1fb6c",
"assets/assets/icons/arrow_back.png": "c8ab462cba0cd5f6a7d910be84fbb757",
"assets/assets/icons/arrow_back_ios.png": "874f848a46a1bd1d766b3f6e76ae056a",
"assets/assets/icons/arrow_drop_down.png": "a2d068763460a9373855557930ac803e",
"assets/assets/icons/arrow_forward.png": "d6a58b847ae445057288efbe10a616c0",
"assets/assets/icons/arrow_forward_ios.png": "d6a58b847ae445057288efbe10a616c0",
"assets/assets/icons/assessment.png": "bc1a09bc07402438ec6311cb01f6d2e7",
"assets/assets/icons/assignment.png": "7623cb45eb92acd9c492bc6ed4610985",
"assets/assets/icons/assignment_late.png": "47151b1cedcb0c218698b1f95b03992f",
"assets/assets/icons/assignment_turned_in.png": "1f4415d965770159f66e3ad5e90367d6",
"assets/assets/icons/attach_file.png": "9ac7ebc2528a0eee744ff4271b5d69a8",
"assets/assets/icons/attach_money.png": "86f4e672bc37b5b6f512b96ec7e7cc0c",
"assets/assets/icons/badge.png": "fe0ca241bf1f1c8a05e0606c8482b621",
"assets/assets/icons/barcode.png": "6f0684840a198ca5b29b47bba9e0def3",
"assets/assets/icons/bar_chart.png": "01de773e1fd542ed57411e7e56c2839f",
"assets/assets/icons/beach_access.png": "9a186dfd3c3cbfe7b8a3febb354e5f86",
"assets/assets/icons/bluetooth.png": "3559a784c03ceca67c81c5f9e1acf162",
"assets/assets/icons/brush.png": "ed2282d93820d9980af0728cf30e3911",
"assets/assets/icons/bug_report.png": "23a394eb2a047fa379a6a4ab9dd3191d",
"assets/assets/icons/build.png": "30b554b4ff421bb27ec8f121e91ab935",
"assets/assets/icons/business.png": "bab105bd41b3ee6f541f0b7bceb81d74",
"assets/assets/icons/calculate.png": "51ca6cfa2d6b313ce9bcdc5029cca6af",
"assets/assets/icons/calendar_month.png": "676ef336c0fa9973d317a0bfac2f84ce",
"assets/assets/icons/calendar_today.png": "5bd4ee8590945bf378a658ebdf756bf8",
"assets/assets/icons/calendar_view_day.png": "153845101a6f7b8d23e78fd6859e521d",
"assets/assets/icons/calendar_view_month.png": "3e40ae4aa583ab3d46023c6761d5974d",
"assets/assets/icons/calendar_view_week.png": "8d7533f804413210df68f45f99d8a4cf",
"assets/assets/icons/call_split.png": "3586e18014877e8be58e94094f0ab322",
"assets/assets/icons/camera_alt.png": "54cd65c9087e8fc7fcdbeda21794ff14",
"assets/assets/icons/cancel.png": "ac51ad890217ba4cd5a4f3923c8f332c",
"assets/assets/icons/card_giftcard.png": "e0b194d8f4303df2a970dc4f0cee20c3",
"assets/assets/icons/carpenter.png": "54b049e5e35fa0d04c74939dcaceaefd",
"assets/assets/icons/category.png": "6a3c054f56265ed3e1248feeb905ddca",
"assets/assets/icons/change_circle.png": "9f24095834eae0320422c9a521f15fd6",
"assets/assets/icons/chat_bubble.png": "babc4ba4f73d9dd48b97a5d41a7e897d",
"assets/assets/icons/check.png": "3d1fbbe5f69147fe0784992b83978005",
"assets/assets/icons/checklist.png": "465d67dfcdf7209a4089a0bb2620290e",
"assets/assets/icons/check_box.png": "a538fe3a57c076bd7cea4aa63ac365fa",
"assets/assets/icons/check_box_outline_blank.png": "0789db04c069e72846536fb5cfa3bff6",
"assets/assets/icons/check_circle.png": "e1ee7a931e5b4a759fe7ce39667170b1",
"assets/assets/icons/chevron_left.png": "33889437a20ba95d26378d5dd10bbf95",
"assets/assets/icons/chevron_right.png": "95eb0b3b00b7bfeecc3949f9ab9d84e3",
"assets/assets/icons/circle_outlined.png": "c9c0909e4b839b68468c5e1e6dbfada1",
"assets/assets/icons/cleaning_services.png": "11dc6d08f454ed22fb6ee75cd8694e17",
"assets/assets/icons/clear.png": "36aedfc0d91be64733b0d6ab36c2ad39",
"assets/assets/icons/clear_all.png": "94af5055592bf14f3267fce99f31a8dc",
"assets/assets/icons/close.png": "cb40c69c06f94490eaefaed09146740e",
"assets/assets/icons/cloud_upload.png": "d8421bed10423d3aa6abf89c88d4025c",
"assets/assets/icons/coffee.png": "75c102a602d8079b9140d1828ad9dec9",
"assets/assets/icons/color_lens.png": "ff37c347947664e84498da9eb3da0c77",
"assets/assets/icons/comment.png": "c2493596f0023ff549467b8b881c6232",
"assets/assets/icons/compare_arrows.png": "422835c4fcba57f90a2a7304eb5d4eba",
"assets/assets/icons/construction.png": "096c9c2215945f8fac19e0b213de62da",
"assets/assets/icons/contacts.png": "8e7ad9a31e4106687db5d026d07f8450",
"assets/assets/icons/contact_phone.png": "6bc33a900bde251d74a1fa1e37590223",
"assets/assets/icons/content_copy.png": "91eb2ab3acab1e1c1b1029cdd87be03c",
"assets/assets/icons/content_cut.png": "88e95602c20460df537c938a49deaf9b",
"assets/assets/icons/currency_exchange.png": "8128c1a242fa7226022ec9c6fb7edcad",
"assets/assets/icons/cut.png": "d5541cdd4e32421c4c9ca013f069cac0",
"assets/assets/icons/dashboard.png": "5863696d22829b4c42601f9866824d30",
"assets/assets/icons/date.png": "2af15f18a345c48713579921cdde4e2a",
"assets/assets/icons/date_range.png": "2af15f18a345c48713579921cdde4e2a",
"assets/assets/icons/delete.png": "f8714d0245c61aced7d5e5e45b53ff70",
"assets/assets/icons/delete_forever.png": "1b11d24006675fe862fc97c58080c46d",
"assets/assets/icons/delete_v2.png": "d0fc849532dbf8feeb676a2e791262ea",
"assets/assets/icons/description.png": "ecd3d0a06a8f9479dfa66d644d2afc10",
"assets/assets/icons/devices.png": "dc351459a052fc8340f9ba2a179b2d15",
"assets/assets/icons/discount.png": "5496b1ddf70101736eef9959bd3db8fa",
"assets/assets/icons/document_scanner.png": "ac6fc4e23d9b115346054c32ec48c62f",
"assets/assets/icons/domain.png": "b3a37afcea7dfdcdd2edb80ae829cceb",
"assets/assets/icons/done_all.png": "f4ca67418c92754caddc46251a1bad1d",
"assets/assets/icons/download.png": "c11ae7d331fc46bd74dc9c40c0b83ce0",
"assets/assets/icons/do_not_disturb.png": "c03085a5478adc2b50f67c70a6f9fec1",
"assets/assets/icons/drag_handle.png": "7e3f76f31e534b04b5fa585eaf9383c5",
"assets/assets/icons/drag_indicator.png": "be30b86a6e41488d5c8513853eb0ab29",
"assets/assets/icons/dry.png": "46be15d4be62912e448a583d94a1cb37",
"assets/assets/icons/dry2.png": "a23af3dea9b2f2c4834856b8bf95b631",
"assets/assets/icons/eco.png": "a8583a04175e91cb3593dab35f27cac9",
"assets/assets/icons/edit.png": "a92254ed9baf7e1b5d1d84a8fe853e4a",
"assets/assets/icons/edit_note.png": "42b35d142b643a0ef14b576fa76bd5bd",
"assets/assets/icons/email.png": "82a7743818615b00eb6b89bdb1c2da4c",
"assets/assets/icons/engineering.png": "2d8cc6077cc63e2e57e294ab56375540",
"assets/assets/icons/error.png": "2089163ee52fbf098e86a8c7aee85c4a",
"assets/assets/icons/euro.png": "76b7db3e39071d13e12481455c605a57",
"assets/assets/icons/event.png": "fd5dd5915879022c71111f19d7b4b266",
"assets/assets/icons/event_available.png": "3ef3f919518bfc8394d2975f7262529c",
"assets/assets/icons/event_busy.png": "c75d8dc4235dab6771707f4e2fea66ef",
"assets/assets/icons/event_note.png": "db2232804545fc5424b14026e5e9a271",
"assets/assets/icons/exit_to_app.png": "64b4ccc09b3b00ed7c3e9a983f636bf8",
"assets/assets/icons/expand_less.png": "412735fd497e144fd61801e2e75af01c",
"assets/assets/icons/expand_more.png": "0ea212f8caf76429c712e980f2de32a9",
"assets/assets/icons/fact_check.png": "bb2dabae788b2e9229bbaae4974cfbb7",
"assets/assets/icons/file_download.png": "e281c5192721ad4b1e3d154cbe98e0ca",
"assets/assets/icons/file_upload.png": "670566647440f7d530cc1f0108bbe916",
"assets/assets/icons/filter_alt.png": "6659695f1bd49f3acbe4322858825813",
"assets/assets/icons/filter_list.png": "b0e91365e11c5b50f006cde5773f5dae",
"assets/assets/icons/fire_truck.png": "24404269f57ea65366c0d5fd928a8dda",
"assets/assets/icons/fit_screen.png": "61bab2e3a64d2dcf341ca1ed2e8546b1",
"assets/assets/icons/flag.png": "6847f70dc45026f529aad5c5b65ebf6c",
"assets/assets/icons/folder.png": "5810e33f9e15afb248ba992d381aa0f1",
"assets/assets/icons/folder_open.png": "70cabf1a25a62a13b8fdfe869d03bc69",
"assets/assets/icons/folder_shared.png": "6d084e803faa41eb67a03ce71db1262b",
"assets/assets/icons/forest.png": "c76651d2509b936ed64ca2babdc52687",
"assets/assets/icons/format_list_bulleted.png": "6ff24f1e666dd5e9aece24c90772323d",
"assets/assets/icons/format_list_numbered.png": "122226a2599b0435aa4af2be21a31c7f",
"assets/assets/icons/format_paint.png": "cc0d672542ef3d70d74343b6fbe3344d",
"assets/assets/icons/grain.png": "93c590ee93ed97411a71db302eb8629d",
"assets/assets/icons/grid_4x4.png": "d21acd541f00c0bc3f4f91f208b9e5fc",
"assets/assets/icons/grid_view.png": "2fff24aa2b00b88925a04946e7a1ddb5",
"assets/assets/icons/group.png": "d50b14f6b6f972a261514d0853a230c5",
"assets/assets/icons/handyman.png": "c75d67f6af3e948c8c18a4e0db66eff0",
"assets/assets/icons/height.png": "4b97650f37f603dd8ec43a5704ef3a9b",
"assets/assets/icons/help.png": "3843241eca3871a8d3aef07a6a811a48",
"assets/assets/icons/history.png": "7fd2832712fa1e40d52a805586f3e3bf",
"assets/assets/icons/home.png": "50eff091e14354f523ffb2764c9aae7c",
"assets/assets/icons/horizontal.png": "ea198023815e1b8fb80e02ba6f62df43",
"assets/assets/icons/hourglass_bottom.png": "db07fc10ebca0dc2b86ba066cfc676c7",
"assets/assets/icons/hourglass_empty.png": "621d2525b46a407a73096535187ec84a",
"assets/assets/icons/house.png": "7a01012a63fc3ad9dc57ccdcc19eac29",
"assets/assets/icons/inbox.png": "6ceb38ad43fb7f376ee55b096b390136",
"assets/assets/icons/inbox_outlined.png": "feebf0364ea3f800fa226dfa04f5b45d",
"assets/assets/icons/info.png": "0efd66b3b63ca10174823c790e87608b",
"assets/assets/icons/info_outlined.png": "ce51ca1603a9f336ead8bc14db0c6fdb",
"assets/assets/icons/inventory.png": "f4b9c60546fe91eeff4e7cbdb2988bd0",
"assets/assets/icons/inventory_2.png": "1ace4252db7d621da09947b6b8644cd2",
"assets/assets/icons/keyboard.png": "cb57ea3d4cf51bad974a1e77538c8196",
"assets/assets/icons/keyboard_arrow_down.png": "0ea212f8caf76429c712e980f2de32a9",
"assets/assets/icons/label.png": "4add7492dee73738d0483702ff75ba70",
"assets/assets/icons/language.png": "aa29b9648cda28d97fb3f6bbc0a8ee78",
"assets/assets/icons/layers.png": "84229c1ace81bf51924d8055bfb7082a",
"assets/assets/icons/link.png": "401ad1d1be8cfc24c78faf05a1056fcf",
"assets/assets/icons/list.png": "4cf2d7a044a1609b7e8d46671ff3c8ee",
"assets/assets/icons/list_alt.png": "8f34230d7321704275e34ff039999a0d",
"assets/assets/icons/local_fire_department.png": "a006a028798632e5e65db03141447f69",
"assets/assets/icons/local_shipping.png": "67ec539284a98de4330caaf6158a7981",
"assets/assets/icons/location.png": "8e6ceb5fa139f6cee8779a9efcbf8361",
"assets/assets/icons/location_on.png": "8e6ceb5fa139f6cee8779a9efcbf8361",
"assets/assets/icons/lock.png": "59d8490c0bfcf8edcbb266876ebe76c8",
"assets/assets/icons/lock_clock.png": "6f3fc6c5a4ab26cb2cef0fc805a77c89",
"assets/assets/icons/lock_reset.png": "cc434aae4abdc1c22fcf3e2e5944b223",
"assets/assets/icons/login.png": "4902ca24572f2960cbda8ee47be86041",
"assets/assets/icons/logout.png": "0bb2ceb5b3805afda452833029e6e6b6",
"assets/assets/icons/lunch_dining.png": "8ca281bfbcd79f258f5c33efb7d45efb",
"assets/assets/icons/mail.png": "ed9ce04bfb80571bfa643dfeec704693",
"assets/assets/icons/mark_email_unread.png": "99cc6b4e868d1cba3b7900807e6bb28c",
"assets/assets/icons/merge_type.png": "9602ed5d04bfe280600b98dad311b70d",
"assets/assets/icons/mic.png": "2e3a570cb879317ee814f5de59c334c0",
"assets/assets/icons/money_off.png": "a78a1f9ffbd28231530e98406ce068c7",
"assets/assets/icons/monitoring.png": "7e60a92f19c6629d133ea7ae16f64fa8",
"assets/assets/icons/more_horiz.png": "0d599f9b5c430ab26f585bc001136c8a",
"assets/assets/icons/more_time.png": "e6f1078f6d0f89aceceef11f26e72b0c",
"assets/assets/icons/more_vert.png": "5d5dbe10ee3afbf7003914446d81723c",
"assets/assets/icons/music_note.png": "857f7f00581f06af796846d964f2c0a2",
"assets/assets/icons/my_location.png": "57b79922e94e079e2eb6619964b4b224",
"assets/assets/icons/nature.png": "9a3dd6fff7cb29694df5575705f05b03",
"assets/assets/icons/newspaper.png": "0890554eab9bd4a0a5189981506e65dc",
"assets/assets/icons/nfc.png": "47ac65a52d024f4926073196f8cad03e",
"assets/assets/icons/nightlight.png": "131074f9537d802fe1458832d5bc2478",
"assets/assets/icons/note.png": "9a4b100b1b0387b70e900098721f8d11",
"assets/assets/icons/notes.png": "b96acfcd01c494cbb0b06f4403129fbc",
"assets/assets/icons/note_add.png": "f765e48bbd1c5683dcfa50d249d9cfb4",
"assets/assets/icons/numbers.png": "8570791d7a4291b9e966bb7500fe6732",
"assets/assets/icons/opacity.png": "e2559609a3f6e60231a44aef5f456db5",
"assets/assets/icons/palette.png": "ff37c347947664e84498da9eb3da0c77",
"assets/assets/icons/park.png": "f945a3eec49d0f9c52505ceaba3cb939",
"assets/assets/icons/password.png": "febc63ce04755b6a70ae6d9eff03be0c",
"assets/assets/icons/pause.png": "2742c7068aa71432a45d9499e67e573e",
"assets/assets/icons/payment.png": "1dabba798f3890fbada5e5c681767df2",
"assets/assets/icons/payments.png": "6e2985232e9528566cc7e96de22b3a3c",
"assets/assets/icons/peding_actions.png": "f41004437511b00817ee896438ef4363",
"assets/assets/icons/pending.png": "64f36f7b615fb9dbf9ab15eb81bbf15d",
"assets/assets/icons/pending_actions.png": "f41004437511b00817ee896438ef4363",
"assets/assets/icons/people.png": "7d391334f6a1f6946538dab427169a39",
"assets/assets/icons/percent.png": "baaa87cfeb1ac765eb509addde815da3",
"assets/assets/icons/person.png": "8dd1895110eb8bdbfff1235fc1439ac8",
"assets/assets/icons/person_add.png": "c5877eee74bfa156fc80113c85bfa721",
"assets/assets/icons/person_off.png": "188fa429a4e2707a8ab69b36e680d68b",
"assets/assets/icons/person_search.png": "1f9b83b012a97d8c525879dd6b60c6d2",
"assets/assets/icons/phone.png": "47845a3538eb61b53117b2d430804414",
"assets/assets/icons/photo.png": "e4d939ffc46fae6b077addca0c7b9b18",
"assets/assets/icons/photo_camera.png": "8daef36def654f396386a05eb254d1d8",
"assets/assets/icons/photo_library.png": "e707742999ccdda60809cf69f93e9fba",
"assets/assets/icons/picture_as_pdf.png": "5d0ec2ed70ff7d298677b71a9fad1d12",
"assets/assets/icons/pin.png": "36fd929ce904d2d067d08e0197509cef",
"assets/assets/icons/place.png": "5b4db9ef8ae304276c83be7e33468a53",
"assets/assets/icons/play_arrow.png": "e43907f44209b8926324d43bb6e4392a",
"assets/assets/icons/play_circle.png": "08dbeb67495bfd0ed3caf18e92873e4f",
"assets/assets/icons/point_of_sale.png": "de9533109ad128dac306859916bced5d",
"assets/assets/icons/precision_manufacturing.png": "49907297fadabfee24a035bf06232c19",
"assets/assets/icons/preview.png": "2be4dafb9025ac5d4291d881bab39c34",
"assets/assets/icons/price_check.png": "46d3e457a7f95bfcde91c8ac79e36aed",
"assets/assets/icons/print.png": "f5e3050c06ab98ef7daa30b9f8cbaca5",
"assets/assets/icons/print_disabled.png": "139fbe15964b1fd96287b1c1c428d133",
"assets/assets/icons/qr_code.png": "9a91dc9bfc4c96b5da22d5834eb683e4",
"assets/assets/icons/qr_code_scanner.png": "5a4ec34e1cfca4a5dbb863162937a8f3",
"assets/assets/icons/receipt.png": "3f1e3e77361e59b63309f1024b4f41d6",
"assets/assets/icons/receipt_long.png": "2b02f75dbb8beac3a262786e919612b8",
"assets/assets/icons/refresh.png": "e4971a58c9f0dea4b35330bef34fb5f9",
"assets/assets/icons/remove.png": "dac0ad996551726ff076a6942d40fb1c",
"assets/assets/icons/remove_circle.png": "c03085a5478adc2b50f67c70a6f9fec1",
"assets/assets/icons/request_quote.png": "45c9404bcc126c5442667b5cea770141",
"assets/assets/icons/restaurant.png": "b904c74cf9afbb9c1c40b38ca7099830",
"assets/assets/icons/save.png": "ad113c228b6cfbfb1b5eb126fef4e365",
"assets/assets/icons/savings.png": "70ad064369987645bda5242477f32f05",
"assets/assets/icons/scale.png": "7bfaa1985b3faceb8ac0a41b92618395",
"assets/assets/icons/schedule.png": "53bc4191cf01642efcbb37af5fdcc83d",
"assets/assets/icons/science.png": "0c7d8a9eb52c7bf21715515446ec38fd",
"assets/assets/icons/search.png": "171c167027fc9e6c6eff35b0704d1b08",
"assets/assets/icons/sell.png": "ac5b402819abd4d5eb684d1978ab419e",
"assets/assets/icons/settings.png": "87639436f9d1793204e55eeb2e933065",
"assets/assets/icons/settings_bluetooth.png": "eb53acff6e3f8bcf4e5b0610617efdf7",
"assets/assets/icons/share.png": "5555f35e6156f9087db385c1bbacfce2",
"assets/assets/icons/shopping_bag.png": "aedcb47a19e59a2a80eb0bb81fe68eb9",
"assets/assets/icons/shopping_cart.png": "07b357cc976b12b7a7759cdeac1f5272",
"assets/assets/icons/short_text.png": "62447a9985d1bf46871d0ebd69c4a2f2",
"assets/assets/icons/show_chart.png": "2aeda0bb29a9e921de7c65c2e63a4656",
"assets/assets/icons/sick.png": "ab598ab0062f9bdac42ca2cea01f646b",
"assets/assets/icons/sort.png": "5e587cbf4e1a896878899a62e3ade406",
"assets/assets/icons/speed.png": "991c204097d125227e9dbde7a526f5a1",
"assets/assets/icons/square_foot.png": "3d92a7db72d3520bde967eb0e80d6625",
"assets/assets/icons/star.png": "fa3d84a1f91e5bc45cc15df00cce3b68",
"assets/assets/icons/stars.png": "e955e72589b2fc1afe20e7520391a8ee",
"assets/assets/icons/star_border.png": "17d61532b381b7e51c549db378fce8a2",
"assets/assets/icons/star_fill.png": "1cb58f51b0b530bfbaed0fec32656d08",
"assets/assets/icons/sticky_note_2.png": "0d7c37bf30def611251e35c93a7512db",
"assets/assets/icons/stop_circle.png": "b92f8d01627b1b477214b69831897cd8",
"assets/assets/icons/storefront.png": "75c1260a5f0bf98a7e062762ea48e3bc",
"assets/assets/icons/straighten.png": "3e79e52663024a4ea7d37ac331044450",
"assets/assets/icons/summarize.png": "ceccee543e307792051337571393f46e",
"assets/assets/icons/swap_horiz.png": "ce327b47cbf23598e01e9967ff92139f",
"assets/assets/icons/sync.png": "de5f456e03df9a046e7040292ed210d3",
"assets/assets/icons/sync_alt.png": "c70496afa0ccb475d3c0f53fc6bb4248",
"assets/assets/icons/table_chart.png": "1404751ae6903ef2357563a6aa38e750",
"assets/assets/icons/tag.png": "05ee103fef769cf8d0a0eb920fb67a1a",
"assets/assets/icons/text_fields.png": "d7e4912d14a138114e5729fc7b38139f",
"assets/assets/icons/timeline.png": "12d63bb741db1dcdfc292d87a96f72c0",
"assets/assets/icons/timer.png": "bdaf658e7111c04896b4da02c76a8ea5",
"assets/assets/icons/timer_off.png": "e1205f0ef8bc8ba51b248fde3166eaf2",
"assets/assets/icons/today.png": "2a63c599411b236a4f703f0dcfbe2975",
"assets/assets/icons/tooltip.png": "4d4e8ecc11f1f5a664df837002f35184",
"assets/assets/icons/touch_app.png": "bebdebb8e0516175036a53465aa3688d",
"assets/assets/icons/track_changes.png": "3abf8c56264314ad5c6cb6493c3ca904",
"assets/assets/icons/translate.png": "e41992ceecb71c0038b94f8d07624383",
"assets/assets/icons/trending_up.png": "ce52192f09c204b827f062ce93ada98f",
"assets/assets/icons/tune.png": "b253639ff86f4b02e02561c0d09d8730",
"assets/assets/icons/update.png": "a1dfd5a749a86886946e757457c60f7c",
"assets/assets/icons/upload.png": "b54d6b0f69876c178c388ae59499513a",
"assets/assets/icons/upload_file.png": "c7f7caee06c1da751c0f0449d303836e",
"assets/assets/icons/vertical_distribute.png": "3e21112961afc17505f277ac67291a98",
"assets/assets/icons/video_library.png": "b75fb53578939cc594032b6b57aa5a47",
"assets/assets/icons/view.png": "a692be5fd3ca31d2c483cbfc42ef61bc",
"assets/assets/icons/view_in_ar.png": "a692be5fd3ca31d2c483cbfc42ef61bc",
"assets/assets/icons/view_list.png": "5b0daf75cd36236fb0a0e3fabb6b0f26",
"assets/assets/icons/visibility.png": "d45ee139ece20da52a0caa625b774738",
"assets/assets/icons/vpn_key.png": "0deaa58bd6757050e0ff47605c2ee479",
"assets/assets/icons/warehouse.png": "26edbb889eb37d1fdaed94251adf7ada",
"assets/assets/icons/warning.png": "31285948a9cc9008cc60ed3794661a77",
"assets/assets/icons/watch.png": "4c5d1331e05b93d5b25c35ca40a1eabc",
"assets/assets/icons/water_drop.png": "939f7e33e92de3898244436f270b10eb",
"assets/assets/icons/wb_sunny.png": "772049ab3bbfdf79dd7d84a96df98922",
"assets/assets/icons/whatshot.png": "d481b5e5559c750625594ee5115e3814",
"assets/assets/icons/width_normal.png": "588efc12abf7111f298d8f858b401d82",
"assets/assets/icons/wifi.png": "a9189b67f15b6601e7c429bc2dc64d6c",
"assets/assets/icons/work.png": "132577bd87d130ba44785cf44f8b3691",
"assets/assets/icons/work_off.png": "b21df2f969e54565c0a164a8edfe329b",
"assets/assets/icons/zoom_in.png": "777d7638e4488c0f911de5b876ebe858",
"assets/assets/icons/zoom_out.png": "95d39f42bd637ed54e04e3026e2addb8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "49d019d9b362aaa6972ffb08f5b59493",
"assets/images/background.jpg": "e0183cdd7a4a6043ea4914e3854a7126",
"assets/images/brother.png": "f513b7cbbf161c4dc719b7963dccd792",
"assets/images/k1.png": "a82ec3b624de940f94ba1c922f6f6138",
"assets/images/logo.jpg": "02c0f1fff490c811de6866ecaf233ec5",
"assets/images/logo.png": "4ae957e21f137374e7e9cc2040edb192",
"assets/images/logo2.png": "35efa445228a9862228bfe841f84fdb8",
"assets/images/logo_1024.png": "061d02510d44d1f9211e97bb30ac4f0c",
"assets/images/logo_high_2.png": "db493a756f9078dd710d15680e827e4d",
"assets/images/logo_lang.png": "51f69fa7a216db7ea11d18246fb88245",
"assets/images/logo_lang2.png": "81c6a06170f1f619f2f965d796d3f071",
"assets/images/logo_oak.png": "92eb9010486d855735cb54945bd7de1f",
"assets/images/logo_sw.jpg": "efeb66ef736f2151ba55a194b5921094",
"assets/images/logo_weiss.png": "8111c4d641cbf969a6e6a3b84f7657a4",
"assets/images/map.png": "4f5e30c0124767b1e956af461571c223",
"assets/images/map2.png": "af775792a6820bacda30da8f4f11f052",
"assets/images/WhatsApp%2520Bild%25202024-12-22%2520um%252015.29.27_44067bf7.jpg": "06fb4619bed33e0f8485b5c69751223c",
"assets/images/WhatsApp%2520Bild%25202024-12-22%2520um%252015.29.33_de15a7aa.jpg": "72a2466d54c545e9574634732b61b269",
"assets/images/zebra.png": "67bc38e10e0014ba1afad7725ff7b2de",
"assets/NOTICES": "98a3c2f840e4247207a6365a5751f5aa",
"assets/packages/another_brother/custom_paper/CustomRJ2050Paper/RJ2050-RD50mm.bin": "aafde73355953963f9b4feb7fd218308",
"assets/packages/another_brother/custom_paper/CustomRJ2050Paper/RJ2050-RD58mm.bin": "f1c1280ccee9da2deeae6d7802a0f848",
"assets/packages/another_brother/custom_paper/CustomRJ2150Paper/RJ2150-2x4inch.bin": "9efb2576005afd188bf87718d102739f",
"assets/packages/another_brother/custom_paper/CustomRJ2150Paper/RJ2150-RD1.9x3.3inch.bin": "289f7152e72d7d5920e17d5978e2bdef",
"assets/packages/another_brother/custom_paper/CustomRJ2150Paper/RJ2150-RD50mm.bin": "79ac837bf5d54f8e706fb19eb9aa4432",
"assets/packages/another_brother/custom_paper/CustomRJ2150Paper/RJ2150-RD50x85mm.bin": "289f7152e72d7d5920e17d5978e2bdef",
"assets/packages/another_brother/custom_paper/CustomRJ2150Paper/RJ2150-RD58mm.bin": "63a5b93aa743f1e8433606a7eae1cb55",
"assets/packages/another_brother/custom_paper/CustomRJ2150Paper/RJ2150_20ix10i.bin": "43a55d86ea6696c5f33bf9dfb40a56d1",
"assets/packages/another_brother/custom_paper/CustomRJ2150Paper/RJ2150_21ix15i.bin": "f32c69aac87ce5cc6b5b5a35fd6573bc",
"assets/packages/another_brother/custom_paper/CustomRJ3050AiPaper/RJ-3050Ai_RD2.2Continuous.bin": "f3ce937b4b5be118fa66b063dd626125",
"assets/packages/another_brother/custom_paper/CustomRJ3050AiPaper/RJ-3050Ai_RD50mmContinuous.bin": "0847e0f4b4eddc2cd6b6b2a7aa21707e",
"assets/packages/another_brother/custom_paper/CustomRJ3050AiPaper/RJ-3050Ai_RD58mmContinuous.bin": "f3ce937b4b5be118fa66b063dd626125",
"assets/packages/another_brother/custom_paper/CustomRJ3050AiPaper/RJ-3050Ai_RD80mmContinuous.bin": "a2f4097852edeb8bdd0014334bba7e9a",
"assets/packages/another_brother/custom_paper/CustomRJ3050AiPaper/RJ3050Ai-RD76mm.bin": "df1207154e48d3402e9ff458114a9597",
"assets/packages/another_brother/custom_paper/CustomRJ3050Paper/RJ3050-RD1.90inch.bin": "e562e73c3cbe181da5a1eff33f40c27b",
"assets/packages/another_brother/custom_paper/CustomRJ3050Paper/RJ3050-RD2.00inch.bin": "a9233e46978a5300f0b39a6343d4657a",
"assets/packages/another_brother/custom_paper/CustomRJ3050Paper/RJ3050-RD3.00inch.bin": "f435affc5d6914220d55652ab99e84af",
"assets/packages/another_brother/custom_paper/CustomRJ3050Paper/RJ3050-RD3.15inch.bin": "9197fc3ab339b87e7dca701ad35f9241",
"assets/packages/another_brother/custom_paper/CustomRJ3150AiPaper/RJ-3150Ai_RD2.2Continuous.bin": "092edaf9a81dfae2fd3efbfb2c0f0302",
"assets/packages/another_brother/custom_paper/CustomRJ3150AiPaper/RJ-3150Ai_RD50mmContinuous.bin": "b6b7b1e622f639c3326defd29d8d76be",
"assets/packages/another_brother/custom_paper/CustomRJ3150AiPaper/RJ-3150Ai_RD58mmContinuous.bin": "092edaf9a81dfae2fd3efbfb2c0f0302",
"assets/packages/another_brother/custom_paper/CustomRJ3150AiPaper/RJ-3150Ai_RD80mmContinuous.bin": "ba2661594c188cc94200e12d660d3a0e",
"assets/packages/another_brother/custom_paper/CustomRJ3150AiPaper/RJ3150Ai-RD76mm.bin": "ac041455cb1aa09c5d9cf62fce92ed31",
"assets/packages/another_brother/custom_paper/CustomRJ3150AiPaper/RJ3150Ai-RD76mm44mm.bin": "e1e92db8412f5678f76a2fd6fd7e4950",
"assets/packages/another_brother/custom_paper/CustomRJ3150Paper/RJ3150-RD1.0x1.0%255B1%255D.bin": "66c1937f3e7d5e55b707c3e2e7318ab1",
"assets/packages/another_brother/custom_paper/CustomRJ3150Paper/RJ3150-RD1.9inch.bin": "f83eb1e80729dc3e25c2590894f46d90",
"assets/packages/another_brother/custom_paper/CustomRJ3150Paper/RJ3150-RD1.9x3.3.bin": "5840304e7d02c6dd899564b26f08b5cd",
"assets/packages/another_brother/custom_paper/CustomRJ3150Paper/RJ3150-RD2.0inch.bin": "c374bb9c78d67cf300a302e9819ff68d",
"assets/packages/another_brother/custom_paper/CustomRJ3150Paper/RJ3150-RD2.0x1.0%255B1%255D.bin": "5eb2643fe2381017a54ea8053a1458cd",
"assets/packages/another_brother/custom_paper/CustomRJ3150Paper/RJ3150-RD2.3x3.6.bin": "3a5b5b6532b8e91cc22315b11aed9078",
"assets/packages/another_brother/custom_paper/CustomRJ3150Paper/RJ3150-RD3.0inch.bin": "d2a83155a0928c3349c0c2199bb885ed",
"assets/packages/another_brother/custom_paper/CustomRJ3150Paper/RJ3150-RD3.0x1.0%255B1%255D.bin": "81926c0973f9987821d0036c5ba7e49f",
"assets/packages/another_brother/custom_paper/CustomRJ3150Paper/RJ3150-RD3.0x1.75.bin": "eead2fce759f7432ca3911557d954975",
"assets/packages/another_brother/custom_paper/CustomRJ3150Paper/RJ3150-RD3.15inch.bin": "8672efeaa03972dc5e05970870bc31de",
"assets/packages/another_brother/custom_paper/CustomRJ3150Paper/RJ3150-RD50_85mm.bin": "5840304e7d02c6dd899564b26f08b5cd",
"assets/packages/another_brother/custom_paper/CustomRJ3150Paper/RJ3150-RD60_92mm.bin": "7ce136d98c0335ab3a484032432516c4",
"assets/packages/another_brother/custom_paper/CustomRJ3150Paper/RJ3150-RD76_44mm.bin": "eead2fce759f7432ca3911557d954975",
"assets/packages/another_brother/custom_paper/CustomRJ3230BPaper/RJ-3230B-RD76mm.bin": "a48a8dd5da528a16b8bbaede220b3820",
"assets/packages/another_brother/custom_paper/CustomRJ3230BPaper/RJ-3230b-RD76_44mm.bin": "8e50950e5b0534157697446e1ab74b87",
"assets/packages/another_brother/custom_paper/CustomRJ3250WBPaper/RJ-3250WB-RD76mm.bin": "62ca33709f88c127a006e071a81062d5",
"assets/packages/another_brother/custom_paper/CustomRJ3250WBPaper/RJ3250WB-RD76_44mm.bin": "f797d53014c2b1eefd602010b63b914d",
"assets/packages/another_brother/custom_paper/CustomRJ4030AiPaper/RJ-4030Ai-RD2inch.bin": "0e59c36db8f7324ae927526b03adcee9",
"assets/packages/another_brother/custom_paper/CustomRJ4030AiPaper/RJ-4030Ai-RD3inch.bin": "a7e0eaa4f511a839d3af898bf4ae6c10",
"assets/packages/another_brother/custom_paper/CustomRJ4030AiPaper/RJ-4030Ai-RD4inch.bin": "37be38c17d4575b9621a06d4c270c9e2",
"assets/packages/another_brother/custom_paper/CustomRJ4030AiPaper/RJ-4030Ai-RD4x1.bin": "9ea07b4858b45a3ffcb152dfed0b630b",
"assets/packages/another_brother/custom_paper/CustomRJ4030AiPaper/RJ-4030Ai-RD4x2.bin": "d853c2f26a4c2a2cb53ec6cdb9deaa0d",
"assets/packages/another_brother/custom_paper/CustomRJ4030AiPaper/RJ-4030Ai-RD4x3.bin": "292cfa393c32d61b3ad8793bfb95db5e",
"assets/packages/another_brother/custom_paper/CustomRJ4030AiPaper/RJ-4030Ai-RD4x4.bin": "2e7b45428cd8523231f323d54583e675",
"assets/packages/another_brother/custom_paper/CustomRJ4030AiPaper/RJ-4030Ai-RD4x6.bin": "0016aa7930ebaefc3ee710ed868d12d4",
"assets/packages/another_brother/custom_paper/CustomRJ4030AiPaper/RJ4030Ai-RD80_115mm.bin": "bc39df95871339775b424a0358edb042",
"assets/packages/another_brother/custom_paper/CustomRJ4030Paper/RJ-4030-RD102mmX152mm.bin": "3eb406c1b91714c0d6ca3701123ae5bf",
"assets/packages/another_brother/custom_paper/CustomRJ4030Paper/RJ-4030-RD4inch.bin": "77530d765c8d179ff3d5e0a6b614610a",
"assets/packages/another_brother/custom_paper/CustomRJ4030Paper/RJ-4030-RD4x1.bin": "17d78556acb25f2fe38a1fd8490829f8",
"assets/packages/another_brother/custom_paper/CustomRJ4030Paper/RJ-4030-RD4x2.bin": "5b6455f6ea612dd98b50466efd0fd2a7",
"assets/packages/another_brother/custom_paper/CustomRJ4030Paper/RJ-4030-RD4x3.bin": "a5fb55baa546887c34363789fa330252",
"assets/packages/another_brother/custom_paper/CustomRJ4030Paper/RJ-4030-RD4x4.bin": "69de505c654561fe16b61c5f8e936f84",
"assets/packages/another_brother/custom_paper/CustomRJ4040Paper/RJ4040-RD115_80mm.bin": "4f096e568a09abe000da7e3b98ad7c17",
"assets/packages/another_brother/custom_paper/CustomRJ4040Paper/RJ4040-RD3inch.bin": "4cdb1024e0cc9fbe753a19e466bbc1e1",
"assets/packages/another_brother/custom_paper/CustomRJ4040Paper/RJ4040-RD4inch.bin": "fd1becf122ce6daa36d9b2d9b0d30beb",
"assets/packages/another_brother/custom_paper/CustomRJ4040Paper/RJ4040-RD4x1.bin": "153ed99457426656a4af1ffeeaa73d1a",
"assets/packages/another_brother/custom_paper/CustomRJ4040Paper/RJ4040-RD4x2.bin": "4b1a37e7ff8d2c2bae6287b794c8a7dc",
"assets/packages/another_brother/custom_paper/CustomRJ4040Paper/RJ4040-RD4x3.bin": "e4129fe95ef2a50db9ed2c679daf0295",
"assets/packages/another_brother/custom_paper/CustomRJ4040Paper/RJ4040-RD4x4.bin": "def3978fb0a1651e33faf4bad772bbe4",
"assets/packages/another_brother/custom_paper/CustomRJ4040Paper/RJ4040-RD4x6.bin": "0f8f0858a85b97113add5b554f4955ed",
"assets/packages/another_brother/custom_paper/CustomRJ4040Paper/RJ4040-RD50_85mm.bin": "eaea54136c0e4d29d7067bc17dc33066",
"assets/packages/another_brother/custom_paper/CustomRJ4040Paper/RJ4040-RD58mm.bin": "1acbaedabaeacc047d02886bcc3ae840",
"assets/packages/another_brother/custom_paper/CustomRJ4040Paper/RJ4040-RD60_92mm.bin": "f0e0fe46438c0ac94336ad19efe9d0f8",
"assets/packages/another_brother/custom_paper/CustomRJ4040Paper/RJ4040-RD80_115mm.bin": "dcedbc3110e3f31131a2351e03a1a3d3",
"assets/packages/another_brother/custom_paper/CustomRJ4230Paper/RJ4230B-RD1.9x3.3.bin": "977fe3da4079f645a7dd675fe58ef958",
"assets/packages/another_brother/custom_paper/CustomRJ4230Paper/RJ4230B-RD2.2inch.bin": "1cd253fcc5bbb6578dc9828dbf079563",
"assets/packages/another_brother/custom_paper/CustomRJ4230Paper/RJ4230B-RD2.3x3.6.bin": "e767d95ce571d8f3fd99f5590c4ff6d9",
"assets/packages/another_brother/custom_paper/CustomRJ4230Paper/RJ4230B-RD3.1x4.5.bin": "6a4b9ec2f7e827ef4890184196a0403e",
"assets/packages/another_brother/custom_paper/CustomRJ4230Paper/RJ4230B-RD4inch.bin": "82da4aaebfe78d891ffc28139fc83f42",
"assets/packages/another_brother/custom_paper/CustomRJ4230Paper/RJ4230B-RD4x1.bin": "7e7be31bfaaa65f3e5f981985cdf204d",
"assets/packages/another_brother/custom_paper/CustomRJ4230Paper/RJ4230B-RD4x2.bin": "1d7ddbc96a2c10ca14d0ebfec0b59d58",
"assets/packages/another_brother/custom_paper/CustomRJ4230Paper/RJ4230B-RD4x3.bin": "1c796b6b96c8e008fbdd51f82f8551f9",
"assets/packages/another_brother/custom_paper/CustomRJ4230Paper/RJ4230B-RD4x4.bin": "9151e749d7a63ea7f83aab2ca5ef084f",
"assets/packages/another_brother/custom_paper/CustomRJ4230Paper/RJ4230B-RD4x6.bin": "c5b3da00af51f2c7cd01c4bcbd60883e",
"assets/packages/another_brother/custom_paper/CustomRJ4230Paper/RJ4230B-RD80mm.bin": "45ed9a987fc6d8e051199edfea55b941",
"assets/packages/another_brother/custom_paper/CustomRJ4250Paper/RJ4250WB-RD1.9x3.3.bin": "2c7f6769f73ed1b00c113b0bfebb4507",
"assets/packages/another_brother/custom_paper/CustomRJ4250Paper/RJ4250WB-RD2.2inch.bin": "a945e75023c038e766fb82df5ad6f8d9",
"assets/packages/another_brother/custom_paper/CustomRJ4250Paper/RJ4250WB-RD2.3x3.6.bin": "46411bf6011597436fee2ddd953aff26",
"assets/packages/another_brother/custom_paper/CustomRJ4250Paper/RJ4250WB-RD3.1x4.5.bin": "7a190ce756f36535ce5a3c56a5c9f326",
"assets/packages/another_brother/custom_paper/CustomRJ4250Paper/RJ4250WB-RD4inch.bin": "afe8eac4ac0bbbc35db3f01f14a52c53",
"assets/packages/another_brother/custom_paper/CustomRJ4250Paper/RJ4250WB-RD4x1.bin": "8b5869796aa1bf62d351784b8fe49c6a",
"assets/packages/another_brother/custom_paper/CustomRJ4250Paper/RJ4250WB-RD4x2.bin": "cc8287e3a2c443445da1e563f1cc4470",
"assets/packages/another_brother/custom_paper/CustomRJ4250Paper/RJ4250WB-RD4x3.bin": "644b4e72da1056bca02310f7bdfb3124",
"assets/packages/another_brother/custom_paper/CustomRJ4250Paper/RJ4250WB-RD4x4.bin": "3e6142f9d40dee375118e1f6cfd9a58b",
"assets/packages/another_brother/custom_paper/CustomRJ4250Paper/RJ4250WB-RD4x6.bin": "8f9b3a4615a7563fbb325d5cba45b7f0",
"assets/packages/another_brother/custom_paper/CustomRJ4250Paper/RJ4250WB-RD50_85mm.bin": "2c7f6769f73ed1b00c113b0bfebb4507",
"assets/packages/another_brother/custom_paper/CustomRJ4250Paper/RJ4250WB-RD60_92mm.bin": "46411bf6011597436fee2ddd953aff26",
"assets/packages/another_brother/custom_paper/CustomRJ4250Paper/RJ4250WB-RD80mm.bin": "9ecd82cb8f4bfab665eb009ae484e4e3",
"assets/packages/another_brother/custom_paper/CustomRJ4250Paper/RJ4250WB-RD80_115mm.bin": "7a190ce756f36535ce5a3c56a5c9f326",
"assets/packages/another_brother/custom_paper/CustomTD2120NPaper/TD2120N-RD1.1x1.1.bin": "b20fe4435f8bbc6524cc9b4c16e5fa5d",
"assets/packages/another_brother/custom_paper/CustomTD2120NPaper/TD2120N-RD1.5x1.5.bin": "c80db4a418b6436715b61b6329af33d3",
"assets/packages/another_brother/custom_paper/CustomTD2120NPaper/TD2120N-RD1.5x1.9.bin": "dba2120e4769d42df3be10fb07cea1ca",
"assets/packages/another_brother/custom_paper/CustomTD2120NPaper/TD2120N-RD1.5x2.3.bin": "7cb95f0c771f24f111534fa58802991b",
"assets/packages/another_brother/custom_paper/CustomTD2120NPaper/TD2120N-RD1.9x1.1.bin": "d53794d5115750c58823736d6f13f2a8",
"assets/packages/another_brother/custom_paper/CustomTD2120NPaper/TD2120N-RD2.0x1.0.bin": "c17463ba6544165f868ac719c57644ae",
"assets/packages/another_brother/custom_paper/CustomTD2120NPaper/TD2120N-RD2.25inch.bin": "27dda0b2c46d0880f1d19a9f26157643",
"assets/packages/another_brother/custom_paper/CustomTD2120NPaper/TD2120N-RD2.28inch.bin": "f0971aafcfdcc04ac11557574fe86360",
"assets/packages/another_brother/custom_paper/CustomTD2120NPaper/TD2120N-RD2.3x2.3.bin": "36a0b07158599dc0f196541b7dd279ff",
"assets/packages/another_brother/custom_paper/CustomTD2120NPaper/TD2120N-RD40_50mm.bin": "f8ce5cff87efc48c0d55b99372e1f233",
"assets/packages/another_brother/custom_paper/CustomTD2120NPaper/TD2120N-RD40_60mm.bin": "5e7f43adf8d130628d2bec9d1d48b8e6",
"assets/packages/another_brother/custom_paper/CustomTD2120NPaper/TD2120N-RD50_30mm.bin": "3eced7b79a21f254e9381e60fa953e6f",
"assets/packages/another_brother/custom_paper/CustomTD2120NPaper/TD2120N-RD51_26mm.bin": "2e8f50a4bd7f4727c6abeb6e5db77e0b",
"assets/packages/another_brother/custom_paper/CustomTD2125NPaper/TD2125N-40mm40mm.bin": "5a1b80761f5a11bf01c44d024a0a3d54",
"assets/packages/another_brother/custom_paper/CustomTD2125NPaper/TD2125N-51x26mm.bin": "92dadebd3bf60cf94b67299de7f6a45a",
"assets/packages/another_brother/custom_paper/CustomTD2125NPaper/TD2125N-57mm.bin": "40290a828c7ae7c8bcf9c4f290291b2b",
"assets/packages/another_brother/custom_paper/CustomTD2125NPaper/TD2125NWB-51x26mm.bin": "97216cdc079011be108980b91fa7f94b",
"assets/packages/another_brother/custom_paper/CustomTD2125NWBPaper/TD2125NWB-40mm40mm.bin": "147337a523b27852755d96329c56ee42",
"assets/packages/another_brother/custom_paper/CustomTD2125NWBPaper/TD2125NWB-51x26mm.bin": "4a630dba0f137c6c6543bc188931fad1",
"assets/packages/another_brother/custom_paper/CustomTD2125NWBPaper/TD2125NWB-57mm.bin": "158bedb0bcbfc25a6293ad4d0e837e91",
"assets/packages/another_brother/custom_paper/CustomTD2125NWBPaper/TD2125NWB-57x32mm.bin": "3f3125f4a0fe375874ff3b9375dd47fd",
"assets/packages/another_brother/custom_paper/CustomTD2125NWBPaper/TD2125NWB-57x51mm.bin": "3536b622d564070d486f645b88e2fd54",
"assets/packages/another_brother/custom_paper/CustomTD2125NWBPaper/TD2125NWB-57x76mm.bin": "01958e02dcad6a18df1541edba8029d9",
"assets/packages/another_brother/custom_paper/CustomTD2130NPaper/TD2130N-RD1.1x1.1.bin": "427f39065cf1924973319ed9c57ceb48",
"assets/packages/another_brother/custom_paper/CustomTD2130NPaper/TD2130N-RD1.5x1.5.bin": "90dc9185eaa10357dfbe1b2990ab5bfb",
"assets/packages/another_brother/custom_paper/CustomTD2130NPaper/TD2130N-RD1.5x1.9.bin": "f314866a3587c7d9280356ec53d863a1",
"assets/packages/another_brother/custom_paper/CustomTD2130NPaper/TD2130N-RD1.5x2.3.bin": "fcc8d9fd2989e99fbcfd68c8f6a3e4bd",
"assets/packages/another_brother/custom_paper/CustomTD2130NPaper/TD2130N-RD1.9x1.1.bin": "99d2ec8ea8b25865abd3dc5ece58995c",
"assets/packages/another_brother/custom_paper/CustomTD2130NPaper/TD2130N-RD2.0x1.0.bin": "1eb59d2d7e1c24e3eadc85be2d28e9df",
"assets/packages/another_brother/custom_paper/CustomTD2130NPaper/TD2130N-RD2.25inch.bin": "7bcd9baa2ab6c9ec0bb9741912cee971",
"assets/packages/another_brother/custom_paper/CustomTD2130NPaper/TD2130N-RD2.28inch.bin": "6b0b7c2baef1ed15c7b966eb07850d60",
"assets/packages/another_brother/custom_paper/CustomTD2130NPaper/TD2130N-RD2.3x2.3.bin": "fbfab345bb40b9cb3c36ecf8b69e74a6",
"assets/packages/another_brother/custom_paper/CustomTD2130NPaper/TD2130N-RD40_50mm.bin": "f314866a3587c7d9280356ec53d863a1",
"assets/packages/another_brother/custom_paper/CustomTD2130NPaper/TD2130N-RD40_60mm.bin": "fcc8d9fd2989e99fbcfd68c8f6a3e4bd",
"assets/packages/another_brother/custom_paper/CustomTD2130NPaper/TD2130N-RD50_30mm.bin": "99d2ec8ea8b25865abd3dc5ece58995c",
"assets/packages/another_brother/custom_paper/CustomTD2130NPaper/TD2130N-RD51_26mm.bin": "1eb59d2d7e1c24e3eadc85be2d28e9df",
"assets/packages/another_brother/custom_paper/CustomTD2135NWBPaper/TD2135NWB-RD40x40mm.bin": "9c17df472d7d578c9b8494032da9cb09",
"assets/packages/another_brother/custom_paper/CustomTD2135NWBPaper/TD2135NWB-RD57mm.bin": "03d0f2f5c0252e21335f5aafd64c419d",
"assets/packages/another_brother/custom_paper/CustomTD4550Paper/TD4550DNWB-RD2.2inch.bin": "e556f0391cb6ea03cf7f50cf96300ed7",
"assets/packages/another_brother/custom_paper/CustomTD4550Paper/TD4550DNWB-RD2.9inch.bin": "c8fdf31bbeaa49cae458242d9ea982e7",
"assets/packages/another_brother/custom_paper/CustomTD4550Paper/TD4550DNWB-RD2x1.bin": "13fed79f8fbfdf23d326d4b9e7e58528",
"assets/packages/another_brother/custom_paper/CustomTD4550Paper/TD4550DNWB-RD3.5inch.bin": "5318fc578af9e3602bde98e0505e2335",
"assets/packages/another_brother/custom_paper/CustomTD4550Paper/TD4550DNWB-RD3x1.bin": "1682a1eb07f896c68f6e62f9c67beb3d",
"assets/packages/another_brother/custom_paper/CustomTD4550Paper/TD4550DNWB-RD4inch.bin": "d82496897948da68cf7aa05b95cecb7c",
"assets/packages/another_brother/custom_paper/CustomTD4550Paper/TD4550DNWB-RD4x1.bin": "77781ee9acfca93a842f6e33805f5e54",
"assets/packages/another_brother/custom_paper/CustomTD4550Paper/TD4550DNWB-RD4x2.bin": "62a4db09f8b46f8d381a9c929ed8aa44",
"assets/packages/another_brother/custom_paper/CustomTD4550Paper/TD4550DNWB-RD4x3.bin": "e98e306756cd25a16d2232c2cecbd5bb",
"assets/packages/another_brother/custom_paper/CustomTD4550Paper/TD4550DNWB-RD4x4.bin": "734df9c5593bacec46b24e56b70ee015",
"assets/packages/another_brother/custom_paper/CustomTD4550Paper/TD4550DNWB-RD4x6.bin": "039a22cc8848472d4776b6adb8b6864c",
"assets/packages/another_brother/custom_paper/CustomTD4550Paper/TD4550DNWB-RD51_26mm.bin": "13fed79f8fbfdf23d326d4b9e7e58528",
"assets/packages/another_brother/custom_paper/CustomTD4550Paper/TD4550DNWB-RD76mm.bin": "c8fdf31bbeaa49cae458242d9ea982e7",
"assets/packages/another_brother/custom_paper/CustomTD4550Paper/TD4550DNWB-RD76_26mm.bin": "1682a1eb07f896c68f6e62f9c67beb3d",
"assets/packages/another_brother/custom_paper/CustomTD4550Paper/TD4550DNWB-RD90mm.bin": "5318fc578af9e3602bde98e0505e2335",
"assets/packages/another_brother/custom_paper/test.bin": "d41d8cd98f00b204e9800998ecf8427e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "dddc5c70148f56609c3fb6b29929388e",
"assets/packages/record_web/assets/js/record.fixwebmduration.js": "1f0108ea80c8951ba702ced40cf8cdce",
"assets/packages/record_web/assets/js/record.worklet.js": "6d247986689d283b7e45ccdf7214c2ff",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "e7bdab2993e1dfb8299b368486fefede",
"canvaskit/canvaskit.wasm": "d8d7d4dd48a0508729be5f2e09da17c9",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "fd49f28f2bf9b8efabb6b429231732cb",
"canvaskit/chromium/canvaskit.wasm": "ec0f6ca33dffc426a38afc70ec73cb42",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "9bb7ab7bc3ae6a0dbd502ecfa670c50b",
"canvaskit/skwasm.wasm": "716df9ce9fbae17232d3bdd5820fe689",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "5b202265a20e326159a97e8ba1cd184e",
"canvaskit/skwasm_heavy.wasm": "6e70ff0d20781c7feea29975cc2cff94",
"CNAME": "308b750bdcc8f808e9b7ab1de5476f7f",
"config.js": "129ab4f503c48685ab2888c243480791",
"favicon.ico": "8eca2533d5fd564c5316b96de9ef24be",
"favicon.png": "6f16c7cc1f27ae30ae39f8819bd14ddc",
"firebase-messaging-sw.js": "55178ea1f47a7305f0d53656ef4214c5",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "fe83db26127f4cd045110a8603e20f28",
"icon-192-maskable.png": "d4aa3e0b607f589ed5b9958257e917dd",
"icon-192.png": "6eb09589caa218f1112d815742c2f028",
"icon-512-maskable.png": "b666e3b519908a2020fdebc036f976d5",
"icon-512.png": "163779c5c7c89d2b097684373823101b",
"icons/Icon-192.png": "d8174527dfd5fa82f152a5813e3e8a84",
"icons/Icon-512.png": "27dd35d6adb0ecc714ed5e17d6f00100",
"icons/Icon-maskable-192.png": "d8174527dfd5fa82f152a5813e3e8a84",
"icons/Icon-maskable-512.png": "27dd35d6adb0ecc714ed5e17d6f00100",
"index.html": "bdb615b878e747da9e1b278b7f0b2a0d",
"/": "bdb615b878e747da9e1b278b7f0b2a0d",
"main.dart.js": "85c6baf4a1adc39ce9bbe883c44048e2",
"manifest.json": "64304eff95316ff62a530e35dd44ba49",
"README.txt": "d3df3991a31f034bfa98afdfa3c622e1",
"version.json": "3a633531e693571ec633b7999d6e62ee"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
