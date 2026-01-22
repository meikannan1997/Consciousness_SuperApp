'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "e63de0cb4d0beaec96c9fa8632a9ddb7",
"version.json": "0500e1ca28a210632d8bf3a862fcee0a",
"index.html": "d64138d273f79f49d9ab26cfe30c7ac7",
"/": "d64138d273f79f49d9ab26cfe30c7ac7",
"main.dart.js": "bd4e4a79e106c2c760070c23bf9eae77",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "e9b42a2d30bf63033b145a33aa1a114b",
"icons/Icon-192.png": "715b43ffc892449c1bae4eaf6253c85b",
"icons/Icon-maskable-192.png": "715b43ffc892449c1bae4eaf6253c85b",
"icons/Icon-maskable-512.png": "1701a83a88b6c70ade1e9ffff3888ef5",
"icons/Icon-512.png": "1701a83a88b6c70ade1e9ffff3888ef5",
"manifest.json": "93e0374559a7f0d69ebe2d8e9c8f9098",
"assets/NOTICES": "25ac2ca3e1c51f8f77764d1d5b01b092",
"assets/FontManifest.json": "c5fedbeffc8fe4b444bfa9cc82518d25",
"assets/AssetManifest.bin.json": "fe2646efbc2be6b2ea3d54260502ee08",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "32fd8f3bb6d5e0d87a73981dd7617403",
"assets/fonts/MaterialIcons-Regular.otf": "cee1be5444e768ffa52b7982dcbc8e56",
"assets/assets/img/market_place/details_security_checkout.svg": "4667fb6d99ab0d5a0d66dd37a6183108",
"assets/assets/img/market_place/library_art_icon.svg": "0473e747aff0ffaad99b2305dcbb529b",
"assets/assets/img/market_place/product_image-3.png": "a10135b2b4fee3d4787723960a09da9b",
"assets/assets/img/market_place/product_image-2.png": "5b15dd64cc255a47f7d8b437acb01205",
"assets/assets/img/market_place/music.svg": "4f12f6a581032a39d8cae2159ec56784",
"assets/assets/img/market_place/product_image-5.png": "5b72cdbee8657222244f1a39bdc17d02",
"assets/assets/img/market_place/product_image-4.png": "24fc24270e26c688293bdd6b26eb93e0",
"assets/assets/img/market_place/marketplace_details_play_icon.svg": "1d6edbd35a3f6e75f00dae2390fef3fe",
"assets/assets/img/market_place/profile-fill.svg": "74d4466862e4f3e886937daaafb52504",
"assets/assets/img/market_place/marketplace_profile_pic.png": "ce128acb7650a70ff1928c8613c8936c",
"assets/assets/img/market_place/marketplace_greatefull_icon.svg": "84a09804eddd508065eabc0322d1d38e",
"assets/assets/img/market_place/book.svg": "e22712bbd44824f2bd9633dd3818af55",
"assets/assets/img/market_place/category_icon.svg": "66d2110790c62f99e60f6c39003291a6",
"assets/assets/img/market_place/marketplace_happyIcon.svg": "3e9aff348bded57d36169a26d1ed9bd5",
"assets/assets/img/market_place/cart_icon.svg": "46c733127ad564bba5c4cef4f47ebf55",
"assets/assets/img/market_place/library_course_icon.svg": "c7405608201654cc8decbc38487f7817",
"assets/assets/img/market_place/library_video_icon.svg": "75e1881125d0331f57fddd7000b78626",
"assets/assets/img/market_place/library_music_icon.svg": "0b3a51262d5eee43b997d821b926f719",
"assets/assets/img/market_place/marketplace_calm_Icon.svg": "f8a2ac67790b07893dd4aa85ec762250",
"assets/assets/img/market_place/mingcute_love-fill.svg": "e0fc5c44a5f6a75c6159c97692040f71",
"assets/assets/img/market_place/become_seller_icon.svg": "0d18b067786be15dd534c15b0a788377",
"assets/assets/img/market_place/arts.svg": "ca08b9c04010cf15ed45672e6859bf78",
"assets/assets/img/market_place/library_podcast_icon.svg": "3eefc0b2063e9c54671ad69ec420c539",
"assets/assets/img/market_place/poduct_image-1.png": "d4052dc677028ba5e7ed722b927bf5ce",
"assets/assets/img/market_place/heart.svg": "5edd706a94d5299cfb5ff87c89410bbc",
"assets/assets/img/homepage/add_post_world.svg": "19782cda5343b30b0545e9e92f6a669b",
"assets/assets/img/homepage/profile_image.png": "03ff60c6a59057438b19ec4898bb3679",
"assets/assets/img/homepage/post_like_icon.svg": "0f7cc2cda84f934adbf8c12a8d36918a",
"assets/assets/img/homepage/front_cam_icon.svg": "bfe18a3622f22bda546db2465c0618cc",
"assets/assets/img/homepage/front_add_icon.svg": "4de3591cd55e1495cca062151f424915",
"assets/assets/img/homepage/front_videocam_icon.svg": "52c8e5c5bd430efcad0df216d6973833",
"assets/assets/img/homepage/calender_Icon.svg": "fa53a4cc2d6fe49a4d894ff84da86e86",
"assets/assets/img/homepage/white_back_ground.png": "35e8a46e8375c13242f40a33317f8a14",
"assets/assets/img/homepage/deleteIcon.png": "98b4852b0c2f905397fdb6ce2688f081",
"assets/assets/img/homepage/add_post_lock_icon.svg": "8a2dfa4fce07f8ea30a0498b84538c63",
"assets/assets/img/homepage/add_post_add_icon.svg": "10f7f06339f161634039dbf0171ebc05",
"assets/assets/img/homepage/topsearch_icon.svg": "8569539d23b955c20a8131666a9c9e85",
"assets/assets/img/homepage/world.svg": "144ea90f1cd98ede6ba8f2d7cbbe0459",
"assets/assets/img/homepage/topnotification_icon.svg": "33441fa6fcc6615c0ac76315912c59ad",
"assets/assets/img/homepage/add_post_location.svg": "ccf8ef601e06370d032d4aeaab4f37e4",
"assets/assets/img/homepage/post_header_more_iocn.svg": "5ac36a5955c05ca63e1a223cd5e0351b",
"assets/assets/img/homepage/post_comment.svg": "268883fa938146426fc19b6d9490a082",
"assets/assets/img/homepage/post_img2.png": "834e1863fbadfbf18d88f7acad467de8",
"assets/assets/img/homepage/search_all_icon.svg": "174a28fe77155a1a6ad59fb979a064ad",
"assets/assets/img/homepage/status_image_2.png": "6a78451a6ec5430dc40de23b19da47b3",
"assets/assets/img/homepage/status_image_3.png": "0de0c87f03d438ad366491d7b59901d5",
"assets/assets/img/homepage/post_img3.png": "d41ce5e5bdea140d5c78aab6c03b674c",
"assets/assets/img/homepage/nav_reels.svg": "ca027de38a62d3842b886441430c91dd",
"assets/assets/img/homepage/post_img1.png": "a2cf987c245c6102a700f0293848f653",
"assets/assets/img/homepage/post_profile.png": "ba80748f26199de7dbda2d7fce7808df",
"assets/assets/img/homepage/status_profile1.png": "8065937041a7f0507a80713faa00f25c",
"assets/assets/img/homepage/status_image_4.png": "3487aa2df63584a9c283409d2f6f8e4e",
"assets/assets/img/homepage/post_share.svg": "ba7061902c63c204e98adb8a8131030c",
"assets/assets/img/homepage/stastus_image_1.png": "d159011e6870d3b696354526cc67bbf8",
"assets/assets/img/homepage/search_peoples_icon.svg": "dcbe463f52baa940f3aa0792fcf1c221",
"assets/assets/img/homepage/add_post_feelings.svg": "d89f80c1bf87b5d64019270e330008f7",
"assets/assets/img/homepage/status_profile2.png": "65f5702ff4ce846de5c13a5e9b18f9da",
"assets/assets/img/homepage/topcomment_icon.svg": "e44290111c474e333d055173118fdb90",
"assets/assets/img/homepage/status_profile3.png": "d6c788901ddd90d6867c361263c98678",
"assets/assets/img/circles/create_add_icon.svg": "8204c5b97c3fe141e7de8f4bb7b0fd80",
"assets/assets/img/circles/suggestion_icon.svg": "5e0d02b7dfce15ca8f3264c555897dd1",
"assets/assets/img/circles/circle_group_dp.png": "764ba1b15bc6729d7f44989a78d778c8",
"assets/assets/img/circles/circle_close_icon.svg": "28c3fa911f2e312e9bc154ba22375d86",
"assets/assets/img/circles/circle_group_icon.svg": "c6a6c0892f2f078d50f76375e0da7c2a",
"assets/assets/img/circles/from_circles_icon.svg": "298ff296223abc165c74a3e51f28a594",
"assets/assets/img/auth/cness_icon_primary.png": "f054c47d2288c0aa7cabbebbdf1114d1",
"assets/assets/img/auth/trash_icon.svg": "cb4bfd2aca36251ccab43a3c88bedb74",
"assets/assets/img/auth/calender_icon.svg": "df8b60d3b3b75f308e884cf9b2e44557",
"assets/assets/img/auth/down_arrow.svg": "81195dbdaff800e0eba7703195afa99f",
"assets/assets/img/auth/face_book_iocn.svg": "611ae3c949af3c54b9df5ea9cee4c995",
"assets/assets/img/auth/google_iocn.svg": "de6df9c2e0918fc21f345d3e0318cf3d",
"assets/assets/img/auth/cness_icon.png": "be14e218dafca51a5a61ee110331f824",
"assets/assets/img/auth/splash_bg.png": "7b6bf0fcee52608d4b075e1cad4bb35c",
"assets/assets/img/auth/delete_img.png": "301169e4ec9d4fe3e291aa65d58d25b8",
"assets/assets/img/notification/person6.png": "2526b6e26f852d3d2060f0e66741e2c9",
"assets/assets/img/notification/person5.png": "14c9b0ed2cd5b736c6e9e3e1b9e08add",
"assets/assets/img/notification/person4.png": "c8ee5e9416ca498f1da960965129f2a1",
"assets/assets/img/notification/person1.png": "15b5bd94d62de2ef76ff6fd91e0d541d",
"assets/assets/img/notification/reaction.svg": "8ae58d0e8e8281de0e68a4fe4582d29d",
"assets/assets/img/notification/person3.png": "a762dbd1db53d5437fdfae3b99757c3a",
"assets/assets/img/notification/person2.png": "dc89f81d2967dd8a6e4805cca6abc3ae",
"assets/assets/img/notification/message.svg": "bd4ca193547950e57ba9593780747619",
"assets/assets/img/notification/friend_request.svg": "69400204ef38774e60d3958b6f8aaca1",
"assets/assets/img/notification/photo.svg": "32f03becd0649edf7fd3f621a2f3b877",
"assets/assets/img/best_practises/best_practice_agriculture.svg": "a4dd72634e3b6a9e962d254242368ac4",
"assets/assets/img/best_practises/best_practises_bg_img2.png": "d27fe1c8a74520ee6f98991d5672e681",
"assets/assets/img/best_practises/best_practises_bg_img1.png": "fe91ebb425bb3b2b6abb77bd20d5308d",
"assets/assets/img/best_practises/bestpractice_details_profile.png": "b3d0db38e2c134d2720c556da5b74f01",
"assets/assets/img/best_practises/best_pracstice_education.svg": "26fc8fcb462a9d6dcd44a68049f43a67",
"assets/assets/img/best_practises/best_practice_finance.svg": "c4aaa9739277fa5c3e3fdff3da4cda77",
"assets/assets/img/best_practises/best_practice_manufacturing.svg": "6c64fd926880398886d759899fdcd116",
"assets/assets/img/best_practises/best_practice_tourism.svg": "b473c09c34f68115ebe4611595e43497",
"assets/assets/img/best_practises/best_practice_infrastructure.svg": "cd596cf1d91653e30d441d81cab95ff6",
"assets/assets/img/best_practises/bestpractice_cover_img.png": "0988cf58680b1271701fe0529a6c50b8",
"assets/assets/img/best_practises/best_practice_health_care.svg": "d9eab91afa474649563000a797ef9532",
"assets/assets/img/directory/icon_logistics_services.svg": "720229d0bcd84d6bb0343f89daa1d178",
"assets/assets/img/directory/icon_wedding.svg": "6838d222c1df234a2f705d97d263fed1",
"assets/assets/img/directory/icon_food_bevrage.svg": "f6468fac99e3725ee5a360dfd9e43440",
"assets/assets/img/directory/icon_health.svg": "46d7b498937d6f8df6fc460670d71ba2",
"assets/assets/img/directory/saveiconhollow.svg": "08ab3808accd73da691c68895396e8b6",
"assets/assets/img/directory/directory_details_email.svg": "54fa64b51b3dd4acaaa3e1aa5d60902f",
"assets/assets/img/directory/directory_enquiry_sucess_icon.svg": "ca81126b11c9ec93aaf2c2d50a04ed9e",
"assets/assets/img/directory/directory_location_icon.svg": "8ab9ed579d3ca73b6ea1e0622dbaed61",
"assets/assets/img/directory/directory_details_map.svg": "59a8c3bc42a534e9620de9afb9a7378f",
"assets/assets/img/directory/directory_message_icon.svg": "9c9cf2659307057dc5f84cee9d8e65ae",
"assets/assets/img/directory/directory_details_like_Icon.svg": "6827199f4b9209cb1b96d3e30295e02a",
"assets/assets/img/directory/icon_traveling.svg": "b6a7fac26c148e3210ebdc5818d598ec",
"assets/assets/img/directory/icon_designing.svg": "451272528ac3240b57e7fd53ceb6446f",
"assets/assets/img/directory/directory_details_bg.png": "b6a57ff9b2588947d5e031a0c62591ba",
"assets/assets/img/directory/directory_details_phone.svg": "9c7a69a65cdb2efc57bd5fd41e324a7d",
"assets/assets/img/directory/save_icon.svg": "4ee9eb9ca8a2d78192803a9ef3e8dad6",
"assets/assets/img/directory/icon_beauty_wellness.svg": "e0448ea4ac5331c7d24d48a6ab3f4002",
"assets/assets/img/directory/feture_bussiness_img2.png": "050700764a73e3af14e125c91e933c35",
"assets/assets/img/directory/Icon_Education.svg": "acefab7dbb159e5e18033dc61d7e9faf",
"assets/assets/img/directory/directory_details_website.svg": "3979c9441b7665f011ee110633e642f0",
"assets/assets/img/directory/newly_listed_img2.png": "882f011640f9e45e156db934874b8e1f",
"assets/assets/img/directory/feature_bunessiness_img1.png": "208345a818d0bbf9e43dd65730119fb3",
"assets/assets/img/directory/newly_listed_img1.png": "4d2488f5369ae67a65a15e44f9c3220e",
"assets/assets/img/reels/back_arrow.svg": "0dd6575d0de6002d13bd93b414695ad0",
"assets/assets/img/reels/redundant/smilely_icon.svg": "abd54f610ea0ddffbfb29599a19b6d79",
"assets/assets/img/reels/redundant/Reels.png": "1409153820a41fc49ee5107ff0c2c96b",
"assets/assets/img/reels/redundant/reelssenderprofile.png": "7f08df4874d66c0390e2d7c6ff86304d",
"assets/assets/img/reels/redundant/profile.png": "09e304ae04de515ee91cb5a11c979cb9",
"assets/assets/img/reels/redundant/reels_audio.png": "789470011907b830025144d11609aab7",
"assets/assets/img/common/book_icon.svg": "3de18eef19c1de4d00a88a23d033a1a3",
"assets/assets/img/common/full_screen_icon.svg": "1e77a9856a043193e64649854080af2e",
"assets/assets/img/common/1xIcon.svg": "6dbc3a2d6fa59699aab8054c46709f4a",
"assets/assets/img/common/mingcute_heart-fill.svg": "7e6d35297d6e1c3a4a0960c7e41d4faa",
"assets/assets/img/common/applogo.png": "16c1fc8ff81f221567fc1d281836c55d",
"assets/assets/img/common/fordward_button.svg": "0687d8e5cea4c95394b2006c2d1de21c",
"assets/assets/img/common/checkout_icon.svg": "3a0df1ec5d7c0d168d7903f5b8b0645e",
"assets/assets/img/common/pause_button_without_border.svg": "2e76ae0614af9cd05a92849a94192d48",
"assets/assets/img/common/cart_iocn.svg": "dc5dadb3494c0479a6bd7ac0a1808285",
"assets/assets/img/common/audio_Icon.svg": "2374b175a8ee81d27925fdc6153ba94c",
"assets/assets/img/common/nav_home_icon.svg": "6235c6165790a07a87be964ac05060db",
"assets/assets/img/common/setting.svg": "0c5733b0803f536400a48541fe64ceb8",
"assets/assets/img/common/repeat_icon.svg": "e4ca08e2cf73376c7532eb3664581156",
"assets/assets/img/common/pause_button.svg": "9e7176d8a35f230b3c550f81254ab8e1",
"assets/assets/img/common/appicon.png": "bab48c792cb80a8cdcbd08e11439e67f",
"assets/assets/img/common/like_gold_star.svg": "72e72683c1950b2a667daca62ac57203",
"assets/assets/img/common/nav_reels_icon.svg": "ab6f3ddcba7cdec2a5c98ddf03e0c9ff",
"assets/assets/img/common/appbarsecondbg.svg": "d7cf77535918da61d3b0be35891ee8fa",
"assets/assets/img/common/nav_menu_icon.svg": "f8e15732f70b1fb599fa98fc036e92ad",
"assets/assets/img/common/backward_button.svg": "4e67379f55e9aeba64fa17d65484c2f9",
"assets/assets/img/common/nav_marketplace_icon.svg": "da82e37c9cfc3330ed1e867d1c74b4cd",
"assets/assets/img/common/ariven_ai_icon.svg": "5387f210562ab3bf3ac37e3221163695",
"assets/assets/img/menuprofile/shortcur_market_place.svg": "82d0992630c43bf01d82e6d582f1b2ed",
"assets/assets/img/menuprofile/profile_jobtitle.svg": "e3942cd0ce592f04e660bfa0d54f7028",
"assets/assets/img/menuprofile/shortcut_best_practice.svg": "5d4d8fcd66a124221ea9c452d06994de",
"assets/assets/img/menuprofile/profile_location.svg": "71f6b9410a827e6c5036a97dff3f28ad",
"assets/assets/img/menuprofile/menu_profile.png": "e3c1dcc262e2f44ed0439fa3c1d4db29",
"assets/assets/img/menuprofile/profile_profile_img.png": "37d540b2cb2627bb035d5e5cd920046a",
"assets/assets/img/menuprofile/shortcut_vedio_reel.svg": "e5e3e627d4562c027b706e32828b150b",
"assets/assets/img/menuprofile/shortcut_directory.svg": "2cee8a8f8eed0f95e41fca3f1ccd89d6",
"assets/assets/img/menuprofile/profie_background.png": "7b17991aa33a1031c9283f757adfbf3a",
"assets/assets/img/menuprofile/profile_photos.svg": "762f5e957169621807568482e6a9fcb0",
"assets/assets/img/menuprofile/shortcut_saved_post.svg": "8c0e07946002b974f1e6e2a0a1da227b",
"assets/assets/img/menuprofile/profile_post.svg": "20765eb2947d6d9a6b6a847a77fe38c8",
"assets/assets/img/menuprofile/profile_more_info.svg": "968578c8c0240ae7db3ef534df202d5b",
"assets/assets/img/menuprofile/profile_link.svg": "70768b2ca5b72eb54516a697179ff06b",
"assets/assets/img/menuprofile/profile_event.svg": "7ddc260f568ee9b5e513950d7f96967f",
"assets/assets/img/menuprofile/helpsuppourt/hs_help_center_icon.svg": "e72942aea4193367afa79fc98010daf3",
"assets/assets/img/menuprofile/helpsuppourt/hs_terms_policies.svg": "c6b86a154af765e83b1ed235156f99fe",
"assets/assets/img/menuprofile/helpsuppourt/hs_logout.svg": "6105a591d4601529291084c457a78bad",
"assets/assets/img/menuprofile/profile_reels.svg": "0e71ed4cebaa6f14b287733885b143d1",
"assets/assets/img/menuprofile/profile_meassageIcon.svg": "4a0df05c6fb6f87169610d9f80973f0f",
"assets/assets/img/menuprofile/shortcut_love_icon.svg": "fd3f3ae642787583eadfed03f7c9eed3",
"assets/assets/redundent_images/Product%2520image-3.png": "c86285e6a661b51cf440f4bd6fb2db42",
"assets/assets/redundent_images/Product%2520image-2.png": "47df5ff77b1fd2c2abdfabfc91c22faa",
"assets/assets/redundent_images/Product%2520image-6.png": "cc8ec7a4a922462579c3e7eec991e864",
"assets/assets/redundent_images/Product%2520image-7.png": "c26c5bf7c5b8a09f59486d3de0ac10e6",
"assets/assets/redundent_images/Product%2520image-5.png": "74471b87534af6e35c34a722037d587f",
"assets/assets/redundent_images/Product%2520image-4.png": "994b86c2dc0f2777b4d16eec0e0f2e39",
"assets/assets/redundent_images/library_course_cover_pic.png": "c88ad79a51ba8e24de03191dbd20dc2e",
"assets/assets/redundent_images/library_video_cover_pic.png": "d05a52198d41033375f2439bd03726b3",
"assets/assets/redundent_images/library_art_cover_pic.png": "2898c23f254425ce3d4c32bbc48de7d5",
"assets/assets/redundent_images/library_ebook_cover_pic.png": "269bd94e77668adca092dbcbb4eb4015",
"assets/assets/redundent_images/Product%2520image.png": "5494c0f32a59b8b1f30c383ffbb867ce",
"assets/assets/redundent_images/Product%2520image-9.png": "9adde1c6fc0cb7a175888a3507601238",
"assets/assets/redundent_images/Product%2520image-8.png": "e79e31a58d5fc4522894b7b83dc33454",
"assets/assets/redundent_images/library_music_bg_image.png": "848608f65d289ae5a610c7a5f7d3a34a",
"assets/assets/redundent_images/image1.png": "aad587d292d749ba818c4dab896382f6",
"assets/assets/redundent_images/library_podcast_cover_pic.png": "90dd17b4fa10ac42c226ded291a684e3",
"assets/assets/redundent_images/image2.png": "0e272553138fedcfd9a4efa64e6d6484",
"assets/assets/fonts/inter/Inter_28pt-Bold.ttf": "ac37d4dadca27dd30e188aa580757645",
"assets/assets/fonts/inter/Inter_24pt-ExtraBold.ttf": "995fb5ac38b90303c0cc1a0b21e2c9fe",
"assets/assets/fonts/inter/Inter_24pt-SemiBold.ttf": "c77560a8441d664af3e65dd57026dff9",
"assets/assets/fonts/inter/Inter_24pt-Regular.ttf": "e48c1217adab2a0e44f8df400d33c325",
"assets/assets/fonts/inter/Inter_28pt-Medium.ttf": "4bf75147230e93108702b004fdee55df",
"assets/assets/fonts/inter/Inter_24pt-Light.ttf": "65ec965bd90e1a297cdb3be407420abc",
"assets/assets/fonts/Roboto/Roboto-Medium.ttf": "7d752fb726f5ece291e2e522fcecf86d",
"assets/assets/fonts/Roboto/Roboto-Regular.ttf": "303c6d9e16168364d3bc5b7f766cfff4",
"assets/assets/fonts/Roboto/Roboto-ExtraBold.ttf": "27fd63e58793434ce14a41e30176a4de",
"assets/assets/fonts/Roboto/Roboto-SemiBold.ttf": "dae3c6eddbf79c41f922e4809ca9d09c",
"assets/assets/fonts/Roboto/Roboto-Bold.ttf": "dd5415b95e675853c6ccdceba7324ce7",
"assets/assets/fonts/Roboto/Roboto-Thin.ttf": "1e6f2d32ab9876b49936181f9c0b8725",
"assets/assets/fonts/plusjakartajans/PlusJakartaSans-Light.ttf": "96e9519e0b4b43793371e04336d658cb",
"assets/assets/fonts/plusjakartajans/PlusJakartaSans-Medium.ttf": "0a825b3e08f62af5a9bc9130843b12ff",
"assets/assets/fonts/plusjakartajans/PlusJakartaSans-SemiBold.ttf": "73de6fb49299ccb6478575127008c120",
"assets/assets/fonts/plusjakartajans/PlusJakartaSans-Regular.ttf": "dd3a1370a03dc0f2d7d093bd0ffe7c0b",
"assets/assets/fonts/plusjakartajans/PlusJakartaSans-Bold.ttf": "bac8ecad2d6da4aa6b4200699a80a9dd",
"assets/assets/fonts/plusjakartajans/PlusJakartaSans-ExtraBold.ttf": "f90855567d2c693a26e66f7184645099",
"assets/assets/fonts/poppins/Poppins-Light.ttf": "7e3a130b0433696f4d2f570122f5790d",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "06582556533e597755a368f022db5f5a",
"assets/assets/fonts/poppins/Poppins-ExtraBold.ttf": "d76ccb1aa5bf679b387f48101058933a",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "29cc97af5403e3251cbb586727938473",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "5db3d2b3980827dae28161da22b1753a",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "bafbc0b1fb65a719824724dc735ea88c",
"assets/assets/fonts/opensans/OpenSans-SemiBold.ttf": "ebebb4b54355687d59886f3e6f1694b3",
"assets/assets/fonts/opensans/OpenSans-Light.ttf": "6fdf8d974a815239350fa563bcfadb3c",
"assets/assets/fonts/opensans/OpenSans-ExtraBold.ttf": "73e878b76363e8a8041a0b9c215c6222",
"assets/assets/fonts/opensans/OpenSans-Bold.ttf": "6bbd5cf43b71e9b0189b2de47ac42950",
"assets/assets/fonts/opensans/OpenSans-Medium.ttf": "899f008e0670a768d2e42ad81c0380fe",
"assets/assets/fonts/opensans/OpenSans-Regular.ttf": "94d168f74b7dd50963fd44fe697d6f3e",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
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
