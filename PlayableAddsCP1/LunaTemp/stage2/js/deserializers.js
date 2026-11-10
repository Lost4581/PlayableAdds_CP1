var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1296 = root || request.c( 'UnityEngine.JointSpring' )
  var i1297 = data
  i1296.spring = i1297[0]
  i1296.damper = i1297[1]
  i1296.targetPosition = i1297[2]
  return i1296
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1298 = root || request.c( 'UnityEngine.JointMotor' )
  var i1299 = data
  i1298.m_TargetVelocity = i1299[0]
  i1298.m_Force = i1299[1]
  i1298.m_FreeSpin = i1299[2]
  return i1298
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1300 = root || request.c( 'UnityEngine.JointLimits' )
  var i1301 = data
  i1300.m_Min = i1301[0]
  i1300.m_Max = i1301[1]
  i1300.m_Bounciness = i1301[2]
  i1300.m_BounceMinVelocity = i1301[3]
  i1300.m_ContactDistance = i1301[4]
  i1300.minBounce = i1301[5]
  i1300.maxBounce = i1301[6]
  return i1300
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1302 = root || request.c( 'UnityEngine.JointDrive' )
  var i1303 = data
  i1302.m_PositionSpring = i1303[0]
  i1302.m_PositionDamper = i1303[1]
  i1302.m_MaximumForce = i1303[2]
  i1302.m_UseAcceleration = i1303[3]
  return i1302
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1304 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1305 = data
  i1304.m_Spring = i1305[0]
  i1304.m_Damper = i1305[1]
  return i1304
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1306 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1307 = data
  i1306.m_Limit = i1307[0]
  i1306.m_Bounciness = i1307[1]
  i1306.m_ContactDistance = i1307[2]
  return i1306
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1308 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1309 = data
  i1308.m_ExtremumSlip = i1309[0]
  i1308.m_ExtremumValue = i1309[1]
  i1308.m_AsymptoteSlip = i1309[2]
  i1308.m_AsymptoteValue = i1309[3]
  i1308.m_Stiffness = i1309[4]
  return i1308
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1310 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1311 = data
  i1310.m_LowerAngle = i1311[0]
  i1310.m_UpperAngle = i1311[1]
  return i1310
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1312 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1313 = data
  i1312.m_MotorSpeed = i1313[0]
  i1312.m_MaximumMotorTorque = i1313[1]
  return i1312
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1314 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1315 = data
  i1314.m_DampingRatio = i1315[0]
  i1314.m_Frequency = i1315[1]
  i1314.m_Angle = i1315[2]
  return i1314
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1316 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1317 = data
  i1316.m_LowerTranslation = i1317[0]
  i1316.m_UpperTranslation = i1317[1]
  return i1316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1318 = root || new pc.UnityMaterial()
  var i1319 = data
  i1318.name = i1319[0]
  request.r(i1319[1], i1319[2], 0, i1318, 'shader')
  i1318.renderQueue = i1319[3]
  i1318.enableInstancing = !!i1319[4]
  var i1321 = i1319[5]
  var i1320 = []
  for(var i = 0; i < i1321.length; i += 1) {
    i1320.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1321[i + 0]) );
  }
  i1318.floatParameters = i1320
  var i1323 = i1319[6]
  var i1322 = []
  for(var i = 0; i < i1323.length; i += 1) {
    i1322.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1323[i + 0]) );
  }
  i1318.colorParameters = i1322
  var i1325 = i1319[7]
  var i1324 = []
  for(var i = 0; i < i1325.length; i += 1) {
    i1324.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1325[i + 0]) );
  }
  i1318.vectorParameters = i1324
  var i1327 = i1319[8]
  var i1326 = []
  for(var i = 0; i < i1327.length; i += 1) {
    i1326.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1327[i + 0]) );
  }
  i1318.textureParameters = i1326
  var i1329 = i1319[9]
  var i1328 = []
  for(var i = 0; i < i1329.length; i += 1) {
    i1328.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1329[i + 0]) );
  }
  i1318.materialFlags = i1328
  return i1318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1333 = data
  i1332.name = i1333[0]
  i1332.value = i1333[1]
  return i1332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1337 = data
  i1336.name = i1337[0]
  i1336.value = new pc.Color(i1337[1], i1337[2], i1337[3], i1337[4])
  return i1336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1341 = data
  i1340.name = i1341[0]
  i1340.value = new pc.Vec4( i1341[1], i1341[2], i1341[3], i1341[4] )
  return i1340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1345 = data
  i1344.name = i1345[0]
  request.r(i1345[1], i1345[2], 0, i1344, 'value')
  return i1344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1349 = data
  i1348.name = i1349[0]
  i1348.enabled = !!i1349[1]
  return i1348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1351 = data
  i1350.name = i1351[0]
  i1350.width = i1351[1]
  i1350.height = i1351[2]
  i1350.mipmapCount = i1351[3]
  i1350.anisoLevel = i1351[4]
  i1350.filterMode = i1351[5]
  i1350.hdr = !!i1351[6]
  i1350.format = i1351[7]
  i1350.wrapMode = i1351[8]
  i1350.alphaIsTransparency = !!i1351[9]
  i1350.alphaSource = i1351[10]
  i1350.graphicsFormat = i1351[11]
  i1350.sRGBTexture = !!i1351[12]
  i1350.desiredColorSpace = i1351[13]
  i1350.wrapU = i1351[14]
  i1350.wrapV = i1351[15]
  return i1350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1353 = data
  i1352.name = i1353[0]
  i1352.index = i1353[1]
  i1352.startup = !!i1353[2]
  return i1352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1355 = data
  i1354.aspect = i1355[0]
  i1354.orthographic = !!i1355[1]
  i1354.orthographicSize = i1355[2]
  i1354.backgroundColor = new pc.Color(i1355[3], i1355[4], i1355[5], i1355[6])
  i1354.nearClipPlane = i1355[7]
  i1354.farClipPlane = i1355[8]
  i1354.fieldOfView = i1355[9]
  i1354.depth = i1355[10]
  i1354.clearFlags = i1355[11]
  i1354.cullingMask = i1355[12]
  i1354.rect = i1355[13]
  request.r(i1355[14], i1355[15], 0, i1354, 'targetTexture')
  i1354.usePhysicalProperties = !!i1355[16]
  i1354.focalLength = i1355[17]
  i1354.sensorSize = new pc.Vec2( i1355[18], i1355[19] )
  i1354.lensShift = new pc.Vec2( i1355[20], i1355[21] )
  i1354.gateFit = i1355[22]
  i1354.commandBufferCount = i1355[23]
  i1354.cameraType = i1355[24]
  i1354.enabled = !!i1355[25]
  return i1354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1357 = data
  i1356.name = i1357[0]
  i1356.tagId = i1357[1]
  i1356.enabled = !!i1357[2]
  i1356.isStatic = !!i1357[3]
  i1356.layer = i1357[4]
  return i1356
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1358 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1359 = data
  request.r(i1359[0], i1359[1], 0, i1358, 'm_FirstSelected')
  i1358.m_sendNavigationEvents = !!i1359[2]
  i1358.m_DragThreshold = i1359[3]
  return i1358
}

Deserializers["UnityEngine.InputSystem.UI.InputSystemUIInputModule"] = function (request, data, root) {
  var i1360 = root || request.c( 'UnityEngine.InputSystem.UI.InputSystemUIInputModule' )
  var i1361 = data
  i1360.m_MoveRepeatDelay = i1361[0]
  i1360.m_MoveRepeatRate = i1361[1]
  request.r(i1361[2], i1361[3], 0, i1360, 'm_XRTrackingOrigin')
  request.r(i1361[4], i1361[5], 0, i1360, 'm_ActionsAsset')
  request.r(i1361[6], i1361[7], 0, i1360, 'm_PointAction')
  request.r(i1361[8], i1361[9], 0, i1360, 'm_MoveAction')
  request.r(i1361[10], i1361[11], 0, i1360, 'm_SubmitAction')
  request.r(i1361[12], i1361[13], 0, i1360, 'm_CancelAction')
  request.r(i1361[14], i1361[15], 0, i1360, 'm_LeftClickAction')
  request.r(i1361[16], i1361[17], 0, i1360, 'm_MiddleClickAction')
  request.r(i1361[18], i1361[19], 0, i1360, 'm_RightClickAction')
  request.r(i1361[20], i1361[21], 0, i1360, 'm_ScrollWheelAction')
  request.r(i1361[22], i1361[23], 0, i1360, 'm_TrackedDevicePositionAction')
  request.r(i1361[24], i1361[25], 0, i1360, 'm_TrackedDeviceOrientationAction')
  i1360.m_DeselectOnBackgroundClick = !!i1361[26]
  i1360.m_PointerBehavior = i1361[27]
  i1360.m_CursorLockBehavior = i1361[28]
  i1360.m_ScrollDeltaPerTick = i1361[29]
  i1360.m_SendPointerHoverToParent = !!i1361[30]
  return i1360
}

Deserializers["GameManager"] = function (request, data, root) {
  var i1362 = root || request.c( 'GameManager' )
  var i1363 = data
  request.r(i1363[0], i1363[1], 0, i1362, 'IntroScreen')
  request.r(i1363[2], i1363[3], 0, i1362, 'WinScreen')
  request.r(i1363[4], i1363[5], 0, i1362, 'Target')
  i1362.clicksToWin = i1363[6]
  return i1362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1365 = data
  i1364.pivot = new pc.Vec2( i1365[0], i1365[1] )
  i1364.anchorMin = new pc.Vec2( i1365[2], i1365[3] )
  i1364.anchorMax = new pc.Vec2( i1365[4], i1365[5] )
  i1364.sizeDelta = new pc.Vec2( i1365[6], i1365[7] )
  i1364.anchoredPosition3D = new pc.Vec3( i1365[8], i1365[9], i1365[10] )
  i1364.rotation = new pc.Quat(i1365[11], i1365[12], i1365[13], i1365[14])
  i1364.scale = new pc.Vec3( i1365[15], i1365[16], i1365[17] )
  return i1364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1367 = data
  i1366.planeDistance = i1367[0]
  i1366.referencePixelsPerUnit = i1367[1]
  i1366.isFallbackOverlay = !!i1367[2]
  i1366.renderMode = i1367[3]
  i1366.renderOrder = i1367[4]
  i1366.sortingLayerName = i1367[5]
  i1366.sortingOrder = i1367[6]
  i1366.scaleFactor = i1367[7]
  request.r(i1367[8], i1367[9], 0, i1366, 'worldCamera')
  i1366.overrideSorting = !!i1367[10]
  i1366.pixelPerfect = !!i1367[11]
  i1366.targetDisplay = i1367[12]
  i1366.overridePixelPerfect = !!i1367[13]
  i1366.enabled = !!i1367[14]
  return i1366
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1368 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1369 = data
  i1368.m_UiScaleMode = i1369[0]
  i1368.m_ReferencePixelsPerUnit = i1369[1]
  i1368.m_ScaleFactor = i1369[2]
  i1368.m_ReferenceResolution = new pc.Vec2( i1369[3], i1369[4] )
  i1368.m_ScreenMatchMode = i1369[5]
  i1368.m_MatchWidthOrHeight = i1369[6]
  i1368.m_PhysicalUnit = i1369[7]
  i1368.m_FallbackScreenDPI = i1369[8]
  i1368.m_DefaultSpriteDPI = i1369[9]
  i1368.m_DynamicPixelsPerUnit = i1369[10]
  i1368.m_PresetInfoIsWorld = !!i1369[11]
  return i1368
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1370 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1371 = data
  i1370.m_IgnoreReversedGraphics = !!i1371[0]
  i1370.m_BlockingObjects = i1371[1]
  i1370.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1371[2] )
  return i1370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1373 = data
  i1372.cullTransparentMesh = !!i1373[0]
  return i1372
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1374 = root || request.c( 'UnityEngine.UI.Image' )
  var i1375 = data
  request.r(i1375[0], i1375[1], 0, i1374, 'm_Sprite')
  i1374.m_Type = i1375[2]
  i1374.m_PreserveAspect = !!i1375[3]
  i1374.m_FillCenter = !!i1375[4]
  i1374.m_FillMethod = i1375[5]
  i1374.m_FillAmount = i1375[6]
  i1374.m_FillClockwise = !!i1375[7]
  i1374.m_FillOrigin = i1375[8]
  i1374.m_UseSpriteMesh = !!i1375[9]
  i1374.m_PixelsPerUnitMultiplier = i1375[10]
  request.r(i1375[11], i1375[12], 0, i1374, 'm_Material')
  i1374.m_Maskable = !!i1375[13]
  i1374.m_Color = new pc.Color(i1375[14], i1375[15], i1375[16], i1375[17])
  i1374.m_RaycastTarget = !!i1375[18]
  i1374.m_RaycastPadding = new pc.Vec4( i1375[19], i1375[20], i1375[21], i1375[22] )
  return i1374
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1376 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1377 = data
  i1376.m_hasFontAssetChanged = !!i1377[0]
  request.r(i1377[1], i1377[2], 0, i1376, 'm_baseMaterial')
  i1376.m_maskOffset = new pc.Vec4( i1377[3], i1377[4], i1377[5], i1377[6] )
  i1376.m_text = i1377[7]
  i1376.m_isRightToLeft = !!i1377[8]
  request.r(i1377[9], i1377[10], 0, i1376, 'm_fontAsset')
  request.r(i1377[11], i1377[12], 0, i1376, 'm_sharedMaterial')
  var i1379 = i1377[13]
  var i1378 = []
  for(var i = 0; i < i1379.length; i += 2) {
  request.r(i1379[i + 0], i1379[i + 1], 2, i1378, '')
  }
  i1376.m_fontSharedMaterials = i1378
  request.r(i1377[14], i1377[15], 0, i1376, 'm_fontMaterial')
  var i1381 = i1377[16]
  var i1380 = []
  for(var i = 0; i < i1381.length; i += 2) {
  request.r(i1381[i + 0], i1381[i + 1], 2, i1380, '')
  }
  i1376.m_fontMaterials = i1380
  i1376.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1377[17], i1377[18], i1377[19], i1377[20])
  i1376.m_fontColor = new pc.Color(i1377[21], i1377[22], i1377[23], i1377[24])
  i1376.m_enableVertexGradient = !!i1377[25]
  i1376.m_colorMode = i1377[26]
  i1376.m_fontColorGradient = request.d('TMPro.VertexGradient', i1377[27], i1376.m_fontColorGradient)
  request.r(i1377[28], i1377[29], 0, i1376, 'm_fontColorGradientPreset')
  request.r(i1377[30], i1377[31], 0, i1376, 'm_spriteAsset')
  i1376.m_tintAllSprites = !!i1377[32]
  request.r(i1377[33], i1377[34], 0, i1376, 'm_StyleSheet')
  i1376.m_TextStyleHashCode = i1377[35]
  i1376.m_overrideHtmlColors = !!i1377[36]
  i1376.m_faceColor = UnityEngine.Color32.ConstructColor(i1377[37], i1377[38], i1377[39], i1377[40])
  i1376.m_fontSize = i1377[41]
  i1376.m_fontSizeBase = i1377[42]
  i1376.m_fontWeight = i1377[43]
  i1376.m_enableAutoSizing = !!i1377[44]
  i1376.m_fontSizeMin = i1377[45]
  i1376.m_fontSizeMax = i1377[46]
  i1376.m_fontStyle = i1377[47]
  i1376.m_HorizontalAlignment = i1377[48]
  i1376.m_VerticalAlignment = i1377[49]
  i1376.m_textAlignment = i1377[50]
  i1376.m_characterSpacing = i1377[51]
  i1376.m_characterHorizontalScale = i1377[52]
  i1376.m_wordSpacing = i1377[53]
  i1376.m_lineSpacing = i1377[54]
  i1376.m_lineSpacingMax = i1377[55]
  i1376.m_paragraphSpacing = i1377[56]
  i1376.m_charWidthMaxAdj = i1377[57]
  i1376.m_TextWrappingMode = i1377[58]
  i1376.m_wordWrappingRatios = i1377[59]
  i1376.m_overflowMode = i1377[60]
  request.r(i1377[61], i1377[62], 0, i1376, 'm_linkedTextComponent')
  request.r(i1377[63], i1377[64], 0, i1376, 'parentLinkedComponent')
  i1376.m_enableKerning = !!i1377[65]
  var i1383 = i1377[66]
  var i1382 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1383.length; i += 1) {
    i1382.add(i1383[i + 0]);
  }
  i1376.m_ActiveFontFeatures = i1382
  i1376.m_enableExtraPadding = !!i1377[67]
  i1376.checkPaddingRequired = !!i1377[68]
  i1376.m_isRichText = !!i1377[69]
  i1376.m_parseCtrlCharacters = !!i1377[70]
  i1376.m_isOrthographic = !!i1377[71]
  i1376.m_isCullingEnabled = !!i1377[72]
  i1376.m_horizontalMapping = i1377[73]
  i1376.m_verticalMapping = i1377[74]
  i1376.m_uvLineOffset = i1377[75]
  i1376.m_geometrySortingOrder = i1377[76]
  i1376.m_IsTextObjectScaleStatic = !!i1377[77]
  i1376.m_VertexBufferAutoSizeReduction = !!i1377[78]
  i1376.m_useMaxVisibleDescender = !!i1377[79]
  i1376.m_pageToDisplay = i1377[80]
  i1376.m_margin = new pc.Vec4( i1377[81], i1377[82], i1377[83], i1377[84] )
  i1376.m_isUsingLegacyAnimationComponent = !!i1377[85]
  i1376.m_isVolumetricText = !!i1377[86]
  request.r(i1377[87], i1377[88], 0, i1376, 'm_Material')
  i1376.m_EmojiFallbackSupport = !!i1377[89]
  i1376.m_Maskable = !!i1377[90]
  i1376.m_Color = new pc.Color(i1377[91], i1377[92], i1377[93], i1377[94])
  i1376.m_RaycastTarget = !!i1377[95]
  i1376.m_RaycastPadding = new pc.Vec4( i1377[96], i1377[97], i1377[98], i1377[99] )
  return i1376
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1386 = root || request.c( 'TMPro.VertexGradient' )
  var i1387 = data
  i1386.topLeft = new pc.Color(i1387[0], i1387[1], i1387[2], i1387[3])
  i1386.topRight = new pc.Color(i1387[4], i1387[5], i1387[6], i1387[7])
  i1386.bottomLeft = new pc.Color(i1387[8], i1387[9], i1387[10], i1387[11])
  i1386.bottomRight = new pc.Color(i1387[12], i1387[13], i1387[14], i1387[15])
  return i1386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1391 = data
  i1390.color = new pc.Color(i1391[0], i1391[1], i1391[2], i1391[3])
  request.r(i1391[4], i1391[5], 0, i1390, 'sprite')
  i1390.flipX = !!i1391[6]
  i1390.flipY = !!i1391[7]
  i1390.drawMode = i1391[8]
  i1390.size = new pc.Vec2( i1391[9], i1391[10] )
  i1390.tileMode = i1391[11]
  i1390.adaptiveModeThreshold = i1391[12]
  i1390.maskInteraction = i1391[13]
  i1390.spriteSortPoint = i1391[14]
  i1390.enabled = !!i1391[15]
  request.r(i1391[16], i1391[17], 0, i1390, 'sharedMaterial')
  var i1393 = i1391[18]
  var i1392 = []
  for(var i = 0; i < i1393.length; i += 2) {
  request.r(i1393[i + 0], i1393[i + 1], 2, i1392, '')
  }
  i1390.sharedMaterials = i1392
  i1390.receiveShadows = !!i1391[19]
  i1390.shadowCastingMode = i1391[20]
  i1390.sortingLayerID = i1391[21]
  i1390.sortingOrder = i1391[22]
  i1390.lightmapIndex = i1391[23]
  i1390.lightmapSceneIndex = i1391[24]
  i1390.lightmapScaleOffset = new pc.Vec4( i1391[25], i1391[26], i1391[27], i1391[28] )
  i1390.lightProbeUsage = i1391[29]
  i1390.reflectionProbeUsage = i1391[30]
  return i1390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i1394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i1395 = data
  i1394.radius = i1395[0]
  i1394.enabled = !!i1395[1]
  i1394.isTrigger = !!i1395[2]
  i1394.usedByEffector = !!i1395[3]
  i1394.density = i1395[4]
  i1394.offset = new pc.Vec2( i1395[5], i1395[6] )
  request.r(i1395[7], i1395[8], 0, i1394, 'material')
  return i1394
}

Deserializers["ClickTarget"] = function (request, data, root) {
  var i1396 = root || request.c( 'ClickTarget' )
  var i1397 = data
  return i1396
}

Deserializers["PulseTarget"] = function (request, data, root) {
  var i1398 = root || request.c( 'PulseTarget' )
  var i1399 = data
  i1398.amount = i1399[0]
  i1398.speed = i1399[1]
  return i1398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1401 = data
  i1400.ambientIntensity = i1401[0]
  i1400.reflectionIntensity = i1401[1]
  i1400.ambientMode = i1401[2]
  i1400.ambientLight = new pc.Color(i1401[3], i1401[4], i1401[5], i1401[6])
  i1400.ambientSkyColor = new pc.Color(i1401[7], i1401[8], i1401[9], i1401[10])
  i1400.ambientGroundColor = new pc.Color(i1401[11], i1401[12], i1401[13], i1401[14])
  i1400.ambientEquatorColor = new pc.Color(i1401[15], i1401[16], i1401[17], i1401[18])
  i1400.fogColor = new pc.Color(i1401[19], i1401[20], i1401[21], i1401[22])
  i1400.fogEndDistance = i1401[23]
  i1400.fogStartDistance = i1401[24]
  i1400.fogDensity = i1401[25]
  i1400.fog = !!i1401[26]
  request.r(i1401[27], i1401[28], 0, i1400, 'skybox')
  i1400.fogMode = i1401[29]
  var i1403 = i1401[30]
  var i1402 = []
  for(var i = 0; i < i1403.length; i += 1) {
    i1402.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1403[i + 0]) );
  }
  i1400.lightmaps = i1402
  i1400.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1401[31], i1400.lightProbes)
  i1400.lightmapsMode = i1401[32]
  i1400.mixedBakeMode = i1401[33]
  i1400.environmentLightingMode = i1401[34]
  i1400.ambientProbe = new pc.SphericalHarmonicsL2(i1401[35])
  request.r(i1401[36], i1401[37], 0, i1400, 'customReflection')
  request.r(i1401[38], i1401[39], 0, i1400, 'defaultReflection')
  i1400.defaultReflectionMode = i1401[40]
  i1400.defaultReflectionResolution = i1401[41]
  i1400.sunLightObjectId = i1401[42]
  i1400.pixelLightCount = i1401[43]
  i1400.defaultReflectionHDR = !!i1401[44]
  i1400.hasLightDataAsset = !!i1401[45]
  i1400.hasManualGenerate = !!i1401[46]
  return i1400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1407 = data
  request.r(i1407[0], i1407[1], 0, i1406, 'lightmapColor')
  request.r(i1407[2], i1407[3], 0, i1406, 'lightmapDirection')
  request.r(i1407[4], i1407[5], 0, i1406, 'shadowMask')
  return i1406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1408 = root || new UnityEngine.LightProbes()
  var i1409 = data
  return i1408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1417 = data
  var i1419 = i1417[0]
  var i1418 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1419.length; i += 1) {
    i1418.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1419[i + 0]));
  }
  i1416.ShaderCompilationErrors = i1418
  i1416.name = i1417[1]
  i1416.guid = i1417[2]
  var i1421 = i1417[3]
  var i1420 = []
  for(var i = 0; i < i1421.length; i += 1) {
    i1420.push( i1421[i + 0] );
  }
  i1416.shaderDefinedKeywords = i1420
  var i1423 = i1417[4]
  var i1422 = []
  for(var i = 0; i < i1423.length; i += 1) {
    i1422.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1423[i + 0]) );
  }
  i1416.passes = i1422
  var i1425 = i1417[5]
  var i1424 = []
  for(var i = 0; i < i1425.length; i += 1) {
    i1424.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1425[i + 0]) );
  }
  i1416.usePasses = i1424
  var i1427 = i1417[6]
  var i1426 = []
  for(var i = 0; i < i1427.length; i += 1) {
    i1426.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1427[i + 0]) );
  }
  i1416.defaultParameterValues = i1426
  request.r(i1417[7], i1417[8], 0, i1416, 'unityFallbackShader')
  i1416.readDepth = !!i1417[9]
  i1416.hasDepthOnlyPass = !!i1417[10]
  i1416.isCreatedByShaderGraph = !!i1417[11]
  i1416.disableBatching = !!i1417[12]
  i1416.compiled = !!i1417[13]
  return i1416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1431 = data
  i1430.shaderName = i1431[0]
  i1430.errorMessage = i1431[1]
  return i1430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1436 = root || new pc.UnityShaderPass()
  var i1437 = data
  i1436.id = i1437[0]
  i1436.subShaderIndex = i1437[1]
  i1436.name = i1437[2]
  i1436.passType = i1437[3]
  i1436.grabPassTextureName = i1437[4]
  i1436.usePass = !!i1437[5]
  i1436.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1437[6], i1436.zTest)
  i1436.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1437[7], i1436.zWrite)
  i1436.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1437[8], i1436.culling)
  i1436.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1437[9], i1436.blending)
  i1436.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1437[10], i1436.alphaBlending)
  i1436.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1437[11], i1436.colorWriteMask)
  i1436.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1437[12], i1436.offsetUnits)
  i1436.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1437[13], i1436.offsetFactor)
  i1436.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1437[14], i1436.stencilRef)
  i1436.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1437[15], i1436.stencilReadMask)
  i1436.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1437[16], i1436.stencilWriteMask)
  i1436.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1437[17], i1436.stencilOp)
  i1436.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1437[18], i1436.stencilOpFront)
  i1436.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1437[19], i1436.stencilOpBack)
  var i1439 = i1437[20]
  var i1438 = []
  for(var i = 0; i < i1439.length; i += 1) {
    i1438.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1439[i + 0]) );
  }
  i1436.tags = i1438
  var i1441 = i1437[21]
  var i1440 = []
  for(var i = 0; i < i1441.length; i += 1) {
    i1440.push( i1441[i + 0] );
  }
  i1436.passDefinedKeywords = i1440
  var i1443 = i1437[22]
  var i1442 = []
  for(var i = 0; i < i1443.length; i += 1) {
    i1442.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1443[i + 0]) );
  }
  i1436.passDefinedKeywordGroups = i1442
  var i1445 = i1437[23]
  var i1444 = []
  for(var i = 0; i < i1445.length; i += 1) {
    i1444.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1445[i + 0]) );
  }
  i1436.variants = i1444
  var i1447 = i1437[24]
  var i1446 = []
  for(var i = 0; i < i1447.length; i += 1) {
    i1446.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1447[i + 0]) );
  }
  i1436.excludedVariants = i1446
  i1436.hasDepthReader = !!i1437[25]
  return i1436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1449 = data
  i1448.val = i1449[0]
  i1448.name = i1449[1]
  return i1448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1451 = data
  i1450.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1451[0], i1450.src)
  i1450.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1451[1], i1450.dst)
  i1450.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1451[2], i1450.op)
  return i1450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1453 = data
  i1452.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1453[0], i1452.pass)
  i1452.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1453[1], i1452.fail)
  i1452.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1453[2], i1452.zFail)
  i1452.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1453[3], i1452.comp)
  return i1452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1457 = data
  i1456.name = i1457[0]
  i1456.value = i1457[1]
  return i1456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1461 = data
  var i1463 = i1461[0]
  var i1462 = []
  for(var i = 0; i < i1463.length; i += 1) {
    i1462.push( i1463[i + 0] );
  }
  i1460.keywords = i1462
  i1460.hasDiscard = !!i1461[1]
  return i1460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1467 = data
  i1466.passId = i1467[0]
  i1466.subShaderIndex = i1467[1]
  var i1469 = i1467[2]
  var i1468 = []
  for(var i = 0; i < i1469.length; i += 1) {
    i1468.push( i1469[i + 0] );
  }
  i1466.keywords = i1468
  i1466.vertexProgram = i1467[3]
  i1466.fragmentProgram = i1467[4]
  i1466.exportedForWebGl2 = !!i1467[5]
  i1466.readDepth = !!i1467[6]
  return i1466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1473 = data
  request.r(i1473[0], i1473[1], 0, i1472, 'shader')
  i1472.pass = i1473[2]
  return i1472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1477 = data
  i1476.name = i1477[0]
  i1476.type = i1477[1]
  i1476.value = new pc.Vec4( i1477[2], i1477[3], i1477[4], i1477[5] )
  i1476.textureValue = i1477[6]
  i1476.shaderPropertyFlag = i1477[7]
  return i1476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1479 = data
  i1478.name = i1479[0]
  request.r(i1479[1], i1479[2], 0, i1478, 'texture')
  i1478.aabb = i1479[3]
  i1478.vertices = i1479[4]
  i1478.triangles = i1479[5]
  i1478.textureRect = UnityEngine.Rect.MinMaxRect(i1479[6], i1479[7], i1479[8], i1479[9])
  i1478.packedRect = UnityEngine.Rect.MinMaxRect(i1479[10], i1479[11], i1479[12], i1479[13])
  i1478.border = new pc.Vec4( i1479[14], i1479[15], i1479[16], i1479[17] )
  i1478.transparency = i1479[18]
  i1478.bounds = i1479[19]
  i1478.pixelsPerUnit = i1479[20]
  i1478.textureWidth = i1479[21]
  i1478.textureHeight = i1479[22]
  i1478.nativeSize = new pc.Vec2( i1479[23], i1479[24] )
  i1478.pivot = new pc.Vec2( i1479[25], i1479[26] )
  i1478.textureRectOffset = new pc.Vec2( i1479[27], i1479[28] )
  return i1478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1481 = data
  i1480.name = i1481[0]
  i1480.ascent = i1481[1]
  i1480.originalLineHeight = i1481[2]
  i1480.fontSize = i1481[3]
  var i1483 = i1481[4]
  var i1482 = []
  for(var i = 0; i < i1483.length; i += 1) {
    i1482.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1483[i + 0]) );
  }
  i1480.characterInfo = i1482
  request.r(i1481[5], i1481[6], 0, i1480, 'texture')
  i1480.originalFontSize = i1481[7]
  return i1480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1487 = data
  i1486.index = i1487[0]
  i1486.advance = i1487[1]
  i1486.bearing = i1487[2]
  i1486.glyphWidth = i1487[3]
  i1486.glyphHeight = i1487[4]
  i1486.minX = i1487[5]
  i1486.maxX = i1487[6]
  i1486.minY = i1487[7]
  i1486.maxY = i1487[8]
  i1486.uvBottomLeftX = i1487[9]
  i1486.uvBottomLeftY = i1487[10]
  i1486.uvBottomRightX = i1487[11]
  i1486.uvBottomRightY = i1487[12]
  i1486.uvTopLeftX = i1487[13]
  i1486.uvTopLeftY = i1487[14]
  i1486.uvTopRightX = i1487[15]
  i1486.uvTopRightY = i1487[16]
  return i1486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1489 = data
  i1488.name = i1489[0]
  i1488.bytes64 = i1489[1]
  i1488.data = i1489[2]
  return i1488
}

Deserializers["UnityEngine.InputSystem.InputActionAsset"] = function (request, data, root) {
  var i1490 = root || request.c( 'UnityEngine.InputSystem.InputActionAsset' )
  var i1491 = data
  var i1493 = i1491[0]
  var i1492 = []
  for(var i = 0; i < i1493.length; i += 1) {
    i1492.push( request.d('UnityEngine.InputSystem.InputActionMap', i1493[i + 0]) );
  }
  i1490.m_ActionMaps = i1492
  var i1495 = i1491[1]
  var i1494 = []
  for(var i = 0; i < i1495.length; i += 1) {
    i1494.push( request.d('UnityEngine.InputSystem.InputControlScheme', i1495[i + 0]) );
  }
  i1490.m_ControlSchemes = i1494
  i1490.m_IsProjectWide = !!i1491[2]
  return i1490
}

Deserializers["UnityEngine.InputSystem.InputActionMap"] = function (request, data, root) {
  var i1498 = root || request.c( 'UnityEngine.InputSystem.InputActionMap' )
  var i1499 = data
  i1498.m_Name = i1499[0]
  i1498.m_Id = i1499[1]
  request.r(i1499[2], i1499[3], 0, i1498, 'm_Asset')
  var i1501 = i1499[4]
  var i1500 = []
  for(var i = 0; i < i1501.length; i += 1) {
    i1500.push( request.d('UnityEngine.InputSystem.InputAction', i1501[i + 0]) );
  }
  i1498.m_Actions = i1500
  var i1503 = i1499[5]
  var i1502 = []
  for(var i = 0; i < i1503.length; i += 1) {
    i1502.push( request.d('UnityEngine.InputSystem.InputBinding', i1503[i + 0]) );
  }
  i1498.m_Bindings = i1502
  return i1498
}

Deserializers["UnityEngine.InputSystem.InputAction"] = function (request, data, root) {
  var i1506 = root || request.c( 'UnityEngine.InputSystem.InputAction' )
  var i1507 = data
  i1506.m_Name = i1507[0]
  i1506.m_Type = i1507[1]
  i1506.m_ExpectedControlType = i1507[2]
  i1506.m_Id = i1507[3]
  i1506.m_Processors = i1507[4]
  i1506.m_Interactions = i1507[5]
  var i1509 = i1507[6]
  var i1508 = []
  for(var i = 0; i < i1509.length; i += 1) {
    i1508.push( request.d('UnityEngine.InputSystem.InputBinding', i1509[i + 0]) );
  }
  i1506.m_SingletonActionBindings = i1508
  i1506.m_Flags = i1507[7]
  i1506.m_Priority = i1507[8]
  return i1506
}

Deserializers["UnityEngine.InputSystem.InputBinding"] = function (request, data, root) {
  var i1512 = root || request.c( 'UnityEngine.InputSystem.InputBinding' )
  var i1513 = data
  i1512.m_Name = i1513[0]
  i1512.m_Id = i1513[1]
  i1512.m_Path = i1513[2]
  i1512.m_Interactions = i1513[3]
  i1512.m_Processors = i1513[4]
  i1512.m_Groups = i1513[5]
  i1512.m_Action = i1513[6]
  i1512.m_Flags = i1513[7]
  return i1512
}

Deserializers["UnityEngine.InputSystem.InputControlScheme"] = function (request, data, root) {
  var i1516 = root || request.c( 'UnityEngine.InputSystem.InputControlScheme' )
  var i1517 = data
  i1516.m_Name = i1517[0]
  i1516.m_BindingGroup = i1517[1]
  var i1519 = i1517[2]
  var i1518 = []
  for(var i = 0; i < i1519.length; i += 1) {
    i1518.push( request.d('UnityEngine.InputSystem.InputControlScheme+DeviceRequirement', i1519[i + 0]) );
  }
  i1516.m_DeviceRequirements = i1518
  return i1516
}

Deserializers["UnityEngine.InputSystem.InputControlScheme+DeviceRequirement"] = function (request, data, root) {
  var i1522 = root || request.c( 'UnityEngine.InputSystem.InputControlScheme+DeviceRequirement' )
  var i1523 = data
  i1522.m_ControlPath = i1523[0]
  i1522.m_Flags = i1523[1]
  return i1522
}

Deserializers["UnityEngine.InputSystem.InputActionReference"] = function (request, data, root) {
  var i1524 = root || request.c( 'UnityEngine.InputSystem.InputActionReference' )
  var i1525 = data
  request.r(i1525[0], i1525[1], 0, i1524, 'm_Asset')
  i1524.m_ActionId = i1525[2]
  return i1524
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1526 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1527 = data
  i1526.normalStyle = i1527[0]
  i1526.normalSpacingOffset = i1527[1]
  i1526.boldStyle = i1527[2]
  i1526.boldSpacing = i1527[3]
  i1526.italicStyle = i1527[4]
  i1526.tabSize = i1527[5]
  request.r(i1527[6], i1527[7], 0, i1526, 'atlas')
  i1526.m_SourceFontFileGUID = i1527[8]
  i1526.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1527[9], i1526.m_CreationSettings)
  request.r(i1527[10], i1527[11], 0, i1526, 'm_SourceFontFile')
  i1526.m_SourceFontFilePath = i1527[12]
  i1526.m_AtlasPopulationMode = i1527[13]
  i1526.InternalDynamicOS = !!i1527[14]
  var i1529 = i1527[15]
  var i1528 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1529.length; i += 1) {
    i1528.add(request.d('UnityEngine.TextCore.Glyph', i1529[i + 0]));
  }
  i1526.m_GlyphTable = i1528
  var i1531 = i1527[16]
  var i1530 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1531.length; i += 1) {
    i1530.add(request.d('TMPro.TMP_Character', i1531[i + 0]));
  }
  i1526.m_CharacterTable = i1530
  var i1533 = i1527[17]
  var i1532 = []
  for(var i = 0; i < i1533.length; i += 2) {
  request.r(i1533[i + 0], i1533[i + 1], 2, i1532, '')
  }
  i1526.m_AtlasTextures = i1532
  i1526.m_AtlasTextureIndex = i1527[18]
  i1526.m_IsMultiAtlasTexturesEnabled = !!i1527[19]
  i1526.m_GetFontFeatures = !!i1527[20]
  i1526.m_ClearDynamicDataOnBuild = !!i1527[21]
  i1526.m_AtlasWidth = i1527[22]
  i1526.m_AtlasHeight = i1527[23]
  i1526.m_AtlasPadding = i1527[24]
  i1526.m_AtlasRenderMode = i1527[25]
  var i1535 = i1527[26]
  var i1534 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1535.length; i += 1) {
    i1534.add(request.d('UnityEngine.TextCore.GlyphRect', i1535[i + 0]));
  }
  i1526.m_UsedGlyphRects = i1534
  var i1537 = i1527[27]
  var i1536 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1537.length; i += 1) {
    i1536.add(request.d('UnityEngine.TextCore.GlyphRect', i1537[i + 0]));
  }
  i1526.m_FreeGlyphRects = i1536
  i1526.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1527[28], i1526.m_FontFeatureTable)
  i1526.m_ShouldReimportFontFeatures = !!i1527[29]
  var i1539 = i1527[30]
  var i1538 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1539.length; i += 2) {
  request.r(i1539[i + 0], i1539[i + 1], 1, i1538, '')
  }
  i1526.m_FallbackFontAssetTable = i1538
  var i1541 = i1527[31]
  var i1540 = []
  for(var i = 0; i < i1541.length; i += 1) {
    i1540.push( request.d('TMPro.TMP_FontWeightPair', i1541[i + 0]) );
  }
  i1526.m_FontWeightTable = i1540
  var i1543 = i1527[32]
  var i1542 = []
  for(var i = 0; i < i1543.length; i += 1) {
    i1542.push( request.d('TMPro.TMP_FontWeightPair', i1543[i + 0]) );
  }
  i1526.fontWeights = i1542
  i1526.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1527[33], i1526.m_fontInfo)
  var i1545 = i1527[34]
  var i1544 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1545.length; i += 1) {
    i1544.add(request.d('TMPro.TMP_Glyph', i1545[i + 0]));
  }
  i1526.m_glyphInfoList = i1544
  i1526.m_KerningTable = request.d('TMPro.KerningTable', i1527[35], i1526.m_KerningTable)
  var i1547 = i1527[36]
  var i1546 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1547.length; i += 2) {
  request.r(i1547[i + 0], i1547[i + 1], 1, i1546, '')
  }
  i1526.fallbackFontAssets = i1546
  i1526.m_Version = i1527[37]
  i1526.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1527[38], i1526.m_FaceInfo)
  request.r(i1527[39], i1527[40], 0, i1526, 'm_Material')
  return i1526
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1548 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1549 = data
  i1548.sourceFontFileName = i1549[0]
  i1548.sourceFontFileGUID = i1549[1]
  i1548.faceIndex = i1549[2]
  i1548.pointSizeSamplingMode = i1549[3]
  i1548.pointSize = i1549[4]
  i1548.padding = i1549[5]
  i1548.paddingMode = i1549[6]
  i1548.packingMode = i1549[7]
  i1548.atlasWidth = i1549[8]
  i1548.atlasHeight = i1549[9]
  i1548.characterSetSelectionMode = i1549[10]
  i1548.characterSequence = i1549[11]
  i1548.referencedFontAssetGUID = i1549[12]
  i1548.referencedTextAssetGUID = i1549[13]
  i1548.fontStyle = i1549[14]
  i1548.fontStyleModifier = i1549[15]
  i1548.renderMode = i1549[16]
  i1548.includeFontFeatures = !!i1549[17]
  return i1548
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1552 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1553 = data
  i1552.m_Index = i1553[0]
  i1552.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1553[1], i1552.m_Metrics)
  i1552.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1553[2], i1552.m_GlyphRect)
  i1552.m_Scale = i1553[3]
  i1552.m_AtlasIndex = i1553[4]
  i1552.m_ClassDefinitionType = i1553[5]
  return i1552
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1554 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1555 = data
  i1554.m_Width = i1555[0]
  i1554.m_Height = i1555[1]
  i1554.m_HorizontalBearingX = i1555[2]
  i1554.m_HorizontalBearingY = i1555[3]
  i1554.m_HorizontalAdvance = i1555[4]
  return i1554
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1556 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1557 = data
  i1556.m_X = i1557[0]
  i1556.m_Y = i1557[1]
  i1556.m_Width = i1557[2]
  i1556.m_Height = i1557[3]
  return i1556
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1560 = root || request.c( 'TMPro.TMP_Character' )
  var i1561 = data
  i1560.m_ElementType = i1561[0]
  i1560.m_Unicode = i1561[1]
  i1560.m_GlyphIndex = i1561[2]
  i1560.m_Scale = i1561[3]
  return i1560
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1566 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1567 = data
  var i1569 = i1567[0]
  var i1568 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1569.length; i += 1) {
    i1568.add(request.d('TMPro.MultipleSubstitutionRecord', i1569[i + 0]));
  }
  i1566.m_MultipleSubstitutionRecords = i1568
  var i1571 = i1567[1]
  var i1570 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1571.length; i += 1) {
    i1570.add(request.d('TMPro.LigatureSubstitutionRecord', i1571[i + 0]));
  }
  i1566.m_LigatureSubstitutionRecords = i1570
  var i1573 = i1567[2]
  var i1572 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1573.length; i += 1) {
    i1572.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1573[i + 0]));
  }
  i1566.m_GlyphPairAdjustmentRecords = i1572
  var i1575 = i1567[3]
  var i1574 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1575.length; i += 1) {
    i1574.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1575[i + 0]));
  }
  i1566.m_MarkToBaseAdjustmentRecords = i1574
  var i1577 = i1567[4]
  var i1576 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1577.length; i += 1) {
    i1576.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1577[i + 0]));
  }
  i1566.m_MarkToMarkAdjustmentRecords = i1576
  return i1566
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1580 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1581 = data
  i1580.m_TargetGlyphID = i1581[0]
  i1580.m_SubstituteGlyphIDs = i1581[1]
  return i1580
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1584 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1585 = data
  i1584.m_ComponentGlyphIDs = i1585[0]
  i1584.m_LigatureGlyphID = i1585[1]
  return i1584
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1588 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1589 = data
  i1588.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1589[0], i1588.m_FirstAdjustmentRecord)
  i1588.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1589[1], i1588.m_SecondAdjustmentRecord)
  i1588.m_FeatureLookupFlags = i1589[2]
  return i1588
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1590 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1591 = data
  i1590.m_GlyphIndex = i1591[0]
  i1590.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1591[1], i1590.m_GlyphValueRecord)
  return i1590
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1592 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1593 = data
  i1592.m_XPlacement = i1593[0]
  i1592.m_YPlacement = i1593[1]
  i1592.m_XAdvance = i1593[2]
  i1592.m_YAdvance = i1593[3]
  return i1592
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1596 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1597 = data
  i1596.m_BaseGlyphID = i1597[0]
  i1596.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1597[1], i1596.m_BaseGlyphAnchorPoint)
  i1596.m_MarkGlyphID = i1597[2]
  i1596.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1597[3], i1596.m_MarkPositionAdjustment)
  return i1596
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1600 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1601 = data
  i1600.m_BaseMarkGlyphID = i1601[0]
  i1600.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1601[1], i1600.m_BaseMarkGlyphAnchorPoint)
  i1600.m_CombiningMarkGlyphID = i1601[2]
  i1600.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1601[3], i1600.m_CombiningMarkPositionAdjustment)
  return i1600
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1606 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1607 = data
  request.r(i1607[0], i1607[1], 0, i1606, 'regularTypeface')
  request.r(i1607[2], i1607[3], 0, i1606, 'italicTypeface')
  return i1606
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1608 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1609 = data
  i1608.Name = i1609[0]
  i1608.PointSize = i1609[1]
  i1608.Scale = i1609[2]
  i1608.CharacterCount = i1609[3]
  i1608.LineHeight = i1609[4]
  i1608.Baseline = i1609[5]
  i1608.Ascender = i1609[6]
  i1608.CapHeight = i1609[7]
  i1608.Descender = i1609[8]
  i1608.CenterLine = i1609[9]
  i1608.SuperscriptOffset = i1609[10]
  i1608.SubscriptOffset = i1609[11]
  i1608.SubSize = i1609[12]
  i1608.Underline = i1609[13]
  i1608.UnderlineThickness = i1609[14]
  i1608.strikethrough = i1609[15]
  i1608.strikethroughThickness = i1609[16]
  i1608.TabWidth = i1609[17]
  i1608.Padding = i1609[18]
  i1608.AtlasWidth = i1609[19]
  i1608.AtlasHeight = i1609[20]
  return i1608
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1612 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1613 = data
  i1612.id = i1613[0]
  i1612.x = i1613[1]
  i1612.y = i1613[2]
  i1612.width = i1613[3]
  i1612.height = i1613[4]
  i1612.xOffset = i1613[5]
  i1612.yOffset = i1613[6]
  i1612.xAdvance = i1613[7]
  i1612.scale = i1613[8]
  return i1612
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1614 = root || request.c( 'TMPro.KerningTable' )
  var i1615 = data
  var i1617 = i1615[0]
  var i1616 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1617.length; i += 1) {
    i1616.add(request.d('TMPro.KerningPair', i1617[i + 0]));
  }
  i1614.kerningPairs = i1616
  return i1614
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1620 = root || request.c( 'TMPro.KerningPair' )
  var i1621 = data
  i1620.xOffset = i1621[0]
  i1620.m_FirstGlyph = i1621[1]
  i1620.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1621[2], i1620.m_FirstGlyphAdjustments)
  i1620.m_SecondGlyph = i1621[3]
  i1620.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1621[4], i1620.m_SecondGlyphAdjustments)
  i1620.m_IgnoreSpacingAdjustments = !!i1621[5]
  return i1620
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1622 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1623 = data
  i1622.m_FaceIndex = i1623[0]
  i1622.m_FamilyName = i1623[1]
  i1622.m_StyleName = i1623[2]
  i1622.m_PointSize = i1623[3]
  i1622.m_Scale = i1623[4]
  i1622.m_UnitsPerEM = i1623[5]
  i1622.m_LineHeight = i1623[6]
  i1622.m_AscentLine = i1623[7]
  i1622.m_CapLine = i1623[8]
  i1622.m_MeanLine = i1623[9]
  i1622.m_Baseline = i1623[10]
  i1622.m_DescentLine = i1623[11]
  i1622.m_SuperscriptOffset = i1623[12]
  i1622.m_SuperscriptSize = i1623[13]
  i1622.m_SubscriptOffset = i1623[14]
  i1622.m_SubscriptSize = i1623[15]
  i1622.m_UnderlineOffset = i1623[16]
  i1622.m_UnderlineThickness = i1623[17]
  i1622.m_StrikethroughOffset = i1623[18]
  i1622.m_StrikethroughThickness = i1623[19]
  i1622.m_TabWidth = i1623[20]
  return i1622
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1624 = root || request.c( 'TMPro.TMP_Settings' )
  var i1625 = data
  i1624.assetVersion = i1625[0]
  i1624.m_TextWrappingMode = i1625[1]
  i1624.m_enableKerning = !!i1625[2]
  var i1627 = i1625[3]
  var i1626 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1627.length; i += 1) {
    i1626.add(i1627[i + 0]);
  }
  i1624.m_ActiveFontFeatures = i1626
  i1624.m_enableExtraPadding = !!i1625[4]
  i1624.m_enableTintAllSprites = !!i1625[5]
  i1624.m_enableParseEscapeCharacters = !!i1625[6]
  i1624.m_EnableRaycastTarget = !!i1625[7]
  i1624.m_GetFontFeaturesAtRuntime = !!i1625[8]
  i1624.m_missingGlyphCharacter = i1625[9]
  i1624.m_ClearDynamicDataOnBuild = !!i1625[10]
  i1624.m_warningsDisabled = !!i1625[11]
  request.r(i1625[12], i1625[13], 0, i1624, 'm_defaultFontAsset')
  i1624.m_defaultFontAssetPath = i1625[14]
  i1624.m_defaultFontSize = i1625[15]
  i1624.m_defaultAutoSizeMinRatio = i1625[16]
  i1624.m_defaultAutoSizeMaxRatio = i1625[17]
  i1624.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1625[18], i1625[19] )
  i1624.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1625[20], i1625[21] )
  i1624.m_autoSizeTextContainer = !!i1625[22]
  i1624.m_IsTextObjectScaleStatic = !!i1625[23]
  var i1629 = i1625[24]
  var i1628 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1629.length; i += 2) {
  request.r(i1629[i + 0], i1629[i + 1], 1, i1628, '')
  }
  i1624.m_fallbackFontAssets = i1628
  i1624.m_matchMaterialPreset = !!i1625[25]
  i1624.m_HideSubTextObjects = !!i1625[26]
  request.r(i1625[27], i1625[28], 0, i1624, 'm_defaultSpriteAsset')
  i1624.m_defaultSpriteAssetPath = i1625[29]
  i1624.m_enableEmojiSupport = !!i1625[30]
  i1624.m_MissingCharacterSpriteUnicode = i1625[31]
  var i1631 = i1625[32]
  var i1630 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1631.length; i += 2) {
  request.r(i1631[i + 0], i1631[i + 1], 1, i1630, '')
  }
  i1624.m_EmojiFallbackTextAssets = i1630
  i1624.m_defaultColorGradientPresetsPath = i1625[33]
  request.r(i1625[34], i1625[35], 0, i1624, 'm_defaultStyleSheet')
  i1624.m_StyleSheetsResourcePath = i1625[36]
  request.r(i1625[37], i1625[38], 0, i1624, 'm_leadingCharacters')
  request.r(i1625[39], i1625[40], 0, i1624, 'm_followingCharacters')
  i1624.m_UseModernHangulLineBreakingRules = !!i1625[41]
  return i1624
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1634 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1635 = data
  request.r(i1635[0], i1635[1], 0, i1634, 'spriteSheet')
  var i1637 = i1635[2]
  var i1636 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1637.length; i += 1) {
    i1636.add(request.d('TMPro.TMP_Sprite', i1637[i + 0]));
  }
  i1634.spriteInfoList = i1636
  var i1639 = i1635[3]
  var i1638 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1639.length; i += 2) {
  request.r(i1639[i + 0], i1639[i + 1], 1, i1638, '')
  }
  i1634.fallbackSpriteAssets = i1638
  var i1641 = i1635[4]
  var i1640 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1641.length; i += 1) {
    i1640.add(request.d('TMPro.TMP_SpriteCharacter', i1641[i + 0]));
  }
  i1634.m_SpriteCharacterTable = i1640
  var i1643 = i1635[5]
  var i1642 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1643.length; i += 1) {
    i1642.add(request.d('TMPro.TMP_SpriteGlyph', i1643[i + 0]));
  }
  i1634.m_GlyphTable = i1642
  i1634.m_Version = i1635[6]
  i1634.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1635[7], i1634.m_FaceInfo)
  request.r(i1635[8], i1635[9], 0, i1634, 'm_Material')
  return i1634
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1646 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1647 = data
  i1646.name = i1647[0]
  i1646.hashCode = i1647[1]
  i1646.unicode = i1647[2]
  i1646.pivot = new pc.Vec2( i1647[3], i1647[4] )
  request.r(i1647[5], i1647[6], 0, i1646, 'sprite')
  i1646.id = i1647[7]
  i1646.x = i1647[8]
  i1646.y = i1647[9]
  i1646.width = i1647[10]
  i1646.height = i1647[11]
  i1646.xOffset = i1647[12]
  i1646.yOffset = i1647[13]
  i1646.xAdvance = i1647[14]
  i1646.scale = i1647[15]
  return i1646
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1652 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1653 = data
  i1652.m_Name = i1653[0]
  i1652.m_ElementType = i1653[1]
  i1652.m_Unicode = i1653[2]
  i1652.m_GlyphIndex = i1653[3]
  i1652.m_Scale = i1653[4]
  return i1652
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1656 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1657 = data
  request.r(i1657[0], i1657[1], 0, i1656, 'sprite')
  i1656.m_Index = i1657[2]
  i1656.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1657[3], i1656.m_Metrics)
  i1656.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1657[4], i1656.m_GlyphRect)
  i1656.m_Scale = i1657[5]
  i1656.m_AtlasIndex = i1657[6]
  i1656.m_ClassDefinitionType = i1657[7]
  return i1656
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1658 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1659 = data
  var i1661 = i1659[0]
  var i1660 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1661.length; i += 1) {
    i1660.add(request.d('TMPro.TMP_Style', i1661[i + 0]));
  }
  i1658.m_StyleList = i1660
  return i1658
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1664 = root || request.c( 'TMPro.TMP_Style' )
  var i1665 = data
  i1664.m_Name = i1665[0]
  i1664.m_HashCode = i1665[1]
  i1664.m_OpeningDefinition = i1665[2]
  i1664.m_ClosingDefinition = i1665[3]
  i1664.m_OpeningTagArray = i1665[4]
  i1664.m_ClosingTagArray = i1665[5]
  return i1664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1667 = data
  var i1669 = i1667[0]
  var i1668 = []
  for(var i = 0; i < i1669.length; i += 1) {
    i1668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1669[i + 0]) );
  }
  i1666.files = i1668
  i1666.componentToPrefabIds = i1667[1]
  return i1666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1673 = data
  i1672.path = i1673[0]
  request.r(i1673[1], i1673[2], 0, i1672, 'unityObject')
  return i1672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1675 = data
  var i1677 = i1675[0]
  var i1676 = []
  for(var i = 0; i < i1677.length; i += 1) {
    i1676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1677[i + 0]) );
  }
  i1674.scriptsExecutionOrder = i1676
  var i1679 = i1675[1]
  var i1678 = []
  for(var i = 0; i < i1679.length; i += 1) {
    i1678.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1679[i + 0]) );
  }
  i1674.sortingLayers = i1678
  var i1681 = i1675[2]
  var i1680 = []
  for(var i = 0; i < i1681.length; i += 1) {
    i1680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1681[i + 0]) );
  }
  i1674.cullingLayers = i1680
  i1674.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1675[3], i1674.timeSettings)
  i1674.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1675[4], i1674.physicsSettings)
  i1674.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1675[5], i1674.physics2DSettings)
  i1674.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1675[6], i1674.qualitySettings)
  i1674.enableRealtimeShadows = !!i1675[7]
  i1674.enableAutoInstancing = !!i1675[8]
  i1674.enableStaticBatching = !!i1675[9]
  i1674.enableDynamicBatching = !!i1675[10]
  i1674.usePreservativeDynamicBatching = !!i1675[11]
  i1674.lightmapEncodingQuality = i1675[12]
  i1674.desiredColorSpace = i1675[13]
  var i1683 = i1675[14]
  var i1682 = []
  for(var i = 0; i < i1683.length; i += 1) {
    i1682.push( i1683[i + 0] );
  }
  i1674.allTags = i1682
  return i1674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1687 = data
  i1686.name = i1687[0]
  i1686.value = i1687[1]
  return i1686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1691 = data
  i1690.id = i1691[0]
  i1690.name = i1691[1]
  i1690.value = i1691[2]
  return i1690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1695 = data
  i1694.id = i1695[0]
  i1694.name = i1695[1]
  return i1694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1697 = data
  i1696.fixedDeltaTime = i1697[0]
  i1696.maximumDeltaTime = i1697[1]
  i1696.timeScale = i1697[2]
  i1696.maximumParticleTimestep = i1697[3]
  return i1696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1699 = data
  i1698.gravity = new pc.Vec3( i1699[0], i1699[1], i1699[2] )
  i1698.defaultSolverIterations = i1699[3]
  i1698.bounceThreshold = i1699[4]
  i1698.autoSyncTransforms = !!i1699[5]
  i1698.autoSimulation = !!i1699[6]
  var i1701 = i1699[7]
  var i1700 = []
  for(var i = 0; i < i1701.length; i += 1) {
    i1700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1701[i + 0]) );
  }
  i1698.collisionMatrix = i1700
  return i1698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1705 = data
  i1704.enabled = !!i1705[0]
  i1704.layerId = i1705[1]
  i1704.otherLayerId = i1705[2]
  return i1704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1707 = data
  request.r(i1707[0], i1707[1], 0, i1706, 'material')
  i1706.gravity = new pc.Vec2( i1707[2], i1707[3] )
  i1706.positionIterations = i1707[4]
  i1706.velocityIterations = i1707[5]
  i1706.velocityThreshold = i1707[6]
  i1706.maxLinearCorrection = i1707[7]
  i1706.maxAngularCorrection = i1707[8]
  i1706.maxTranslationSpeed = i1707[9]
  i1706.maxRotationSpeed = i1707[10]
  i1706.baumgarteScale = i1707[11]
  i1706.baumgarteTOIScale = i1707[12]
  i1706.timeToSleep = i1707[13]
  i1706.linearSleepTolerance = i1707[14]
  i1706.angularSleepTolerance = i1707[15]
  i1706.defaultContactOffset = i1707[16]
  i1706.autoSimulation = !!i1707[17]
  i1706.queriesHitTriggers = !!i1707[18]
  i1706.queriesStartInColliders = !!i1707[19]
  i1706.callbacksOnDisable = !!i1707[20]
  i1706.reuseCollisionCallbacks = !!i1707[21]
  i1706.autoSyncTransforms = !!i1707[22]
  var i1709 = i1707[23]
  var i1708 = []
  for(var i = 0; i < i1709.length; i += 1) {
    i1708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1709[i + 0]) );
  }
  i1706.collisionMatrix = i1708
  return i1706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1713 = data
  i1712.enabled = !!i1713[0]
  i1712.layerId = i1713[1]
  i1712.otherLayerId = i1713[2]
  return i1712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1715 = data
  var i1717 = i1715[0]
  var i1716 = []
  for(var i = 0; i < i1717.length; i += 1) {
    i1716.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1717[i + 0]) );
  }
  i1714.qualityLevels = i1716
  var i1719 = i1715[1]
  var i1718 = []
  for(var i = 0; i < i1719.length; i += 1) {
    i1718.push( i1719[i + 0] );
  }
  i1714.names = i1718
  i1714.shadows = i1715[2]
  i1714.anisotropicFiltering = i1715[3]
  i1714.antiAliasing = i1715[4]
  i1714.lodBias = i1715[5]
  i1714.shadowCascades = i1715[6]
  i1714.shadowDistance = i1715[7]
  i1714.shadowmaskMode = i1715[8]
  i1714.shadowProjection = i1715[9]
  i1714.shadowResolution = i1715[10]
  i1714.softParticles = !!i1715[11]
  i1714.softVegetation = !!i1715[12]
  i1714.activeColorSpace = i1715[13]
  i1714.desiredColorSpace = i1715[14]
  i1714.masterTextureLimit = i1715[15]
  i1714.maxQueuedFrames = i1715[16]
  i1714.particleRaycastBudget = i1715[17]
  i1714.pixelLightCount = i1715[18]
  i1714.realtimeReflectionProbes = !!i1715[19]
  i1714.shadowCascade2Split = i1715[20]
  i1714.shadowCascade4Split = new pc.Vec3( i1715[21], i1715[22], i1715[23] )
  i1714.streamingMipmapsActive = !!i1715[24]
  i1714.vSyncCount = i1715[25]
  i1714.asyncUploadBufferSize = i1715[26]
  i1714.asyncUploadTimeSlice = i1715[27]
  i1714.billboardsFaceCameraPosition = !!i1715[28]
  i1714.shadowNearPlaneOffset = i1715[29]
  i1714.streamingMipmapsMemoryBudget = i1715[30]
  i1714.maximumLODLevel = i1715[31]
  i1714.streamingMipmapsAddAllCameras = !!i1715[32]
  i1714.streamingMipmapsMaxLevelReduction = i1715[33]
  i1714.streamingMipmapsRenderersPerFrame = i1715[34]
  i1714.resolutionScalingFixedDPIFactor = i1715[35]
  i1714.streamingMipmapsMaxFileIORequests = i1715[36]
  i1714.currentQualityLevel = i1715[37]
  return i1714
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1722 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1723 = data
  i1722.m_XCoordinate = i1723[0]
  i1722.m_YCoordinate = i1723[1]
  return i1722
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1724 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1725 = data
  i1724.m_XPositionAdjustment = i1725[0]
  i1724.m_YPositionAdjustment = i1725[1]
  return i1724
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1726 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1727 = data
  i1726.xPlacement = i1727[0]
  i1726.yPlacement = i1727[1]
  i1726.xAdvance = i1727[2]
  i1726.yAdvance = i1727[3]
  return i1726
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"31":[32],"33":[32],"34":[32],"35":[32],"36":[32],"37":[32],"38":[39],"40":[2],"41":[42],"43":[42],"44":[42],"45":[42],"46":[42],"47":[42],"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[49],"56":[49],"57":[49],"58":[49],"59":[49],"60":[49],"61":[49],"62":[2],"63":[64],"65":[66],"67":[66],"13":[12],"68":[22],"69":[2],"70":[71],"6":[5],"72":[13],"73":[12],"74":[16,12],"75":[64],"76":[16,12],"77":[12],"78":[12],"79":[64,12],"19":[12,16],"80":[81],"82":[81],"83":[81],"84":[12],"85":[12],"15":[13],"17":[16,12],"86":[12],"14":[13],"87":[12],"88":[12],"89":[12],"90":[12],"91":[12],"92":[12],"93":[12],"94":[12],"95":[12],"96":[16,12],"97":[12],"98":[12],"99":[12],"100":[12],"101":[16,12],"102":[12],"103":[5],"104":[5],"105":[5],"106":[5],"107":[2],"108":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.InputActionAsset","UnityEngine.InputSystem.InputActionReference","UnityEngine.MonoBehaviour","GameManager","UnityEngine.GameObject","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.SpriteRenderer","UnityEngine.CircleCollider2D","ClickTarget","PulseTarget","UnityEngine.Font","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.85f2";

Deserializers.productName = "PlayableAddsCP1";

Deserializers.lunaInitializationTime = "11/10/2026 21:07:45";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "0";

Deserializers.projectId = "d59363ae4aef7ba4097b44256f5c45af";

Deserializers.packagesInfo = "com.unity.inputsystem: 1.20.1\ncom.unity.timeline: 1.8.13\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2D-Project";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "142833a4-1785-4bf4-9a09-dbf839eb6c3a";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["Unity","Burst","BurstCompiler","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","VisualScripting","GraphReference","ResetStaticsOnLoad"],["UnityEngine","InputSystem","PlayerInput","InitializeGlobalPlayerState"],["UnityEngine","InputSystem","InputSystem","RuntimeInitialize"],["UnityEngine","InputSystem","InputActionState","InitializeGlobalActionState"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","VisualScripting","Dependencies","NCalc","Expression","ResetStaticsOnLoad"],["Unity","VisualScripting","Flow","ResetStaticsOnLoad"],["Unity","VisualScripting","ReferenceCollector","ResetStaticsOnLoad"],["Unity","VisualScripting","EventBus","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsMetaType","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsResult","ResetStaticsOnLoad"],["Unity","VisualScripting","ApplicationVariables","ResetStaticsOnLoad"],["Unity","VisualScripting","SavedVariables","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsSerializer","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsGlobalConfig","ResetStaticsOnLoad"],["Unity","VisualScripting","RuntimeCodebase","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","Internal","fsPortableReflection","ResetStaticsOnLoad"],["Unity","VisualScripting","EditorTimeBinding","ResetStaticsOnLoad"],["Unity","VisualScripting","UnityThread","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsAotCompilationManager","ResetStaticsOnLoad"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Unity","VisualScripting","GraphInstances","ResetStaticsOnLoad"],["Unity","VisualScripting","GlobalMessageListener","ResetSingletonOnLoad"],["Unity","VisualScripting","Ensure","ResetStaticsOnLoad"],["Unity","VisualScripting","Serialization","ResetStaticsOnLoad"],["Unity","VisualScripting","OptimizedReflection","ResetStaticsOnLoad"],["Unity","VisualScripting","Recursion","ResetStaticsOnLoad"],["Unity","VisualScripting","ProfilingUtility","ResetStaticsOnLoad"],["Unity","VisualScripting","MessageListener","ResetStaticsOnLoad"],["Unity","VisualScripting","CoroutineRunner","ResetSingletonOnLoad"],["Unity","VisualScripting","VariablesSaver","ResetSingletonOnLoad"],["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","EnhancedTouch","Touch","InitializeGlobalTouchState"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","Users","InputUser","InitializeGlobalUserState"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

