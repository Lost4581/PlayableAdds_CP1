var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i12374 = root || request.c( 'UnityEngine.JointSpring' )
  var i12375 = data
  i12374.spring = i12375[0]
  i12374.damper = i12375[1]
  i12374.targetPosition = i12375[2]
  return i12374
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i12376 = root || request.c( 'UnityEngine.JointMotor' )
  var i12377 = data
  i12376.m_TargetVelocity = i12377[0]
  i12376.m_Force = i12377[1]
  i12376.m_FreeSpin = i12377[2]
  return i12376
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i12378 = root || request.c( 'UnityEngine.JointLimits' )
  var i12379 = data
  i12378.m_Min = i12379[0]
  i12378.m_Max = i12379[1]
  i12378.m_Bounciness = i12379[2]
  i12378.m_BounceMinVelocity = i12379[3]
  i12378.m_ContactDistance = i12379[4]
  i12378.minBounce = i12379[5]
  i12378.maxBounce = i12379[6]
  return i12378
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i12380 = root || request.c( 'UnityEngine.JointDrive' )
  var i12381 = data
  i12380.m_PositionSpring = i12381[0]
  i12380.m_PositionDamper = i12381[1]
  i12380.m_MaximumForce = i12381[2]
  i12380.m_UseAcceleration = i12381[3]
  return i12380
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i12382 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i12383 = data
  i12382.m_Spring = i12383[0]
  i12382.m_Damper = i12383[1]
  return i12382
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i12384 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i12385 = data
  i12384.m_Limit = i12385[0]
  i12384.m_Bounciness = i12385[1]
  i12384.m_ContactDistance = i12385[2]
  return i12384
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i12386 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i12387 = data
  i12386.m_ExtremumSlip = i12387[0]
  i12386.m_ExtremumValue = i12387[1]
  i12386.m_AsymptoteSlip = i12387[2]
  i12386.m_AsymptoteValue = i12387[3]
  i12386.m_Stiffness = i12387[4]
  return i12386
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i12388 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i12389 = data
  i12388.m_LowerAngle = i12389[0]
  i12388.m_UpperAngle = i12389[1]
  return i12388
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i12390 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i12391 = data
  i12390.m_MotorSpeed = i12391[0]
  i12390.m_MaximumMotorTorque = i12391[1]
  return i12390
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i12392 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i12393 = data
  i12392.m_DampingRatio = i12393[0]
  i12392.m_Frequency = i12393[1]
  i12392.m_Angle = i12393[2]
  return i12392
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i12394 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i12395 = data
  i12394.m_LowerTranslation = i12395[0]
  i12394.m_UpperTranslation = i12395[1]
  return i12394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i12396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i12397 = data
  i12396.name = i12397[0]
  i12396.width = i12397[1]
  i12396.height = i12397[2]
  i12396.mipmapCount = i12397[3]
  i12396.anisoLevel = i12397[4]
  i12396.filterMode = i12397[5]
  i12396.hdr = !!i12397[6]
  i12396.format = i12397[7]
  i12396.wrapMode = i12397[8]
  i12396.alphaIsTransparency = !!i12397[9]
  i12396.alphaSource = i12397[10]
  i12396.graphicsFormat = i12397[11]
  i12396.sRGBTexture = !!i12397[12]
  i12396.desiredColorSpace = i12397[13]
  i12396.wrapU = i12397[14]
  i12396.wrapV = i12397[15]
  return i12396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i12398 = root || new pc.UnityMaterial()
  var i12399 = data
  i12398.name = i12399[0]
  request.r(i12399[1], i12399[2], 0, i12398, 'shader')
  i12398.renderQueue = i12399[3]
  i12398.enableInstancing = !!i12399[4]
  var i12401 = i12399[5]
  var i12400 = []
  for(var i = 0; i < i12401.length; i += 1) {
    i12400.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i12401[i + 0]) );
  }
  i12398.floatParameters = i12400
  var i12403 = i12399[6]
  var i12402 = []
  for(var i = 0; i < i12403.length; i += 1) {
    i12402.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i12403[i + 0]) );
  }
  i12398.colorParameters = i12402
  var i12405 = i12399[7]
  var i12404 = []
  for(var i = 0; i < i12405.length; i += 1) {
    i12404.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i12405[i + 0]) );
  }
  i12398.vectorParameters = i12404
  var i12407 = i12399[8]
  var i12406 = []
  for(var i = 0; i < i12407.length; i += 1) {
    i12406.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i12407[i + 0]) );
  }
  i12398.textureParameters = i12406
  var i12409 = i12399[9]
  var i12408 = []
  for(var i = 0; i < i12409.length; i += 1) {
    i12408.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i12409[i + 0]) );
  }
  i12398.materialFlags = i12408
  return i12398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i12412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i12413 = data
  i12412.name = i12413[0]
  i12412.value = i12413[1]
  return i12412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i12416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i12417 = data
  i12416.name = i12417[0]
  i12416.value = new pc.Color(i12417[1], i12417[2], i12417[3], i12417[4])
  return i12416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i12420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i12421 = data
  i12420.name = i12421[0]
  i12420.value = new pc.Vec4( i12421[1], i12421[2], i12421[3], i12421[4] )
  return i12420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i12424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i12425 = data
  i12424.name = i12425[0]
  request.r(i12425[1], i12425[2], 0, i12424, 'value')
  return i12424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i12428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i12429 = data
  i12428.name = i12429[0]
  i12428.enabled = !!i12429[1]
  return i12428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i12430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i12431 = data
  i12430.name = i12431[0]
  i12430.index = i12431[1]
  i12430.startup = !!i12431[2]
  return i12430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i12432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i12433 = data
  i12432.aspect = i12433[0]
  i12432.orthographic = !!i12433[1]
  i12432.orthographicSize = i12433[2]
  i12432.backgroundColor = new pc.Color(i12433[3], i12433[4], i12433[5], i12433[6])
  i12432.nearClipPlane = i12433[7]
  i12432.farClipPlane = i12433[8]
  i12432.fieldOfView = i12433[9]
  i12432.depth = i12433[10]
  i12432.clearFlags = i12433[11]
  i12432.cullingMask = i12433[12]
  i12432.rect = i12433[13]
  request.r(i12433[14], i12433[15], 0, i12432, 'targetTexture')
  i12432.usePhysicalProperties = !!i12433[16]
  i12432.focalLength = i12433[17]
  i12432.sensorSize = new pc.Vec2( i12433[18], i12433[19] )
  i12432.lensShift = new pc.Vec2( i12433[20], i12433[21] )
  i12432.gateFit = i12433[22]
  i12432.commandBufferCount = i12433[23]
  i12432.cameraType = i12433[24]
  i12432.enabled = !!i12433[25]
  return i12432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i12434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i12435 = data
  i12434.name = i12435[0]
  i12434.tagId = i12435[1]
  i12434.enabled = !!i12435[2]
  i12434.isStatic = !!i12435[3]
  i12434.layer = i12435[4]
  return i12434
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i12436 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i12437 = data
  request.r(i12437[0], i12437[1], 0, i12436, 'm_FirstSelected')
  i12436.m_sendNavigationEvents = !!i12437[2]
  i12436.m_DragThreshold = i12437[3]
  return i12436
}

Deserializers["UnityEngine.InputSystem.UI.InputSystemUIInputModule"] = function (request, data, root) {
  var i12438 = root || request.c( 'UnityEngine.InputSystem.UI.InputSystemUIInputModule' )
  var i12439 = data
  i12438.m_MoveRepeatDelay = i12439[0]
  i12438.m_MoveRepeatRate = i12439[1]
  request.r(i12439[2], i12439[3], 0, i12438, 'm_XRTrackingOrigin')
  request.r(i12439[4], i12439[5], 0, i12438, 'm_ActionsAsset')
  request.r(i12439[6], i12439[7], 0, i12438, 'm_PointAction')
  request.r(i12439[8], i12439[9], 0, i12438, 'm_MoveAction')
  request.r(i12439[10], i12439[11], 0, i12438, 'm_SubmitAction')
  request.r(i12439[12], i12439[13], 0, i12438, 'm_CancelAction')
  request.r(i12439[14], i12439[15], 0, i12438, 'm_LeftClickAction')
  request.r(i12439[16], i12439[17], 0, i12438, 'm_MiddleClickAction')
  request.r(i12439[18], i12439[19], 0, i12438, 'm_RightClickAction')
  request.r(i12439[20], i12439[21], 0, i12438, 'm_ScrollWheelAction')
  request.r(i12439[22], i12439[23], 0, i12438, 'm_TrackedDevicePositionAction')
  request.r(i12439[24], i12439[25], 0, i12438, 'm_TrackedDeviceOrientationAction')
  i12438.m_DeselectOnBackgroundClick = !!i12439[26]
  i12438.m_PointerBehavior = i12439[27]
  i12438.m_CursorLockBehavior = i12439[28]
  i12438.m_ScrollDeltaPerTick = i12439[29]
  i12438.m_SendPointerHoverToParent = !!i12439[30]
  return i12438
}

Deserializers["GameManager"] = function (request, data, root) {
  var i12440 = root || request.c( 'GameManager' )
  var i12441 = data
  request.r(i12441[0], i12441[1], 0, i12440, 'IntroScreen')
  request.r(i12441[2], i12441[3], 0, i12440, 'WinScreen')
  request.r(i12441[4], i12441[5], 0, i12440, 'Target')
  i12440.clicksToWin = i12441[6]
  return i12440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i12442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i12443 = data
  i12442.pivot = new pc.Vec2( i12443[0], i12443[1] )
  i12442.anchorMin = new pc.Vec2( i12443[2], i12443[3] )
  i12442.anchorMax = new pc.Vec2( i12443[4], i12443[5] )
  i12442.sizeDelta = new pc.Vec2( i12443[6], i12443[7] )
  i12442.anchoredPosition3D = new pc.Vec3( i12443[8], i12443[9], i12443[10] )
  i12442.rotation = new pc.Quat(i12443[11], i12443[12], i12443[13], i12443[14])
  i12442.scale = new pc.Vec3( i12443[15], i12443[16], i12443[17] )
  return i12442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i12444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i12445 = data
  i12444.planeDistance = i12445[0]
  i12444.referencePixelsPerUnit = i12445[1]
  i12444.isFallbackOverlay = !!i12445[2]
  i12444.renderMode = i12445[3]
  i12444.renderOrder = i12445[4]
  i12444.sortingLayerName = i12445[5]
  i12444.sortingOrder = i12445[6]
  i12444.scaleFactor = i12445[7]
  request.r(i12445[8], i12445[9], 0, i12444, 'worldCamera')
  i12444.overrideSorting = !!i12445[10]
  i12444.pixelPerfect = !!i12445[11]
  i12444.targetDisplay = i12445[12]
  i12444.overridePixelPerfect = !!i12445[13]
  i12444.enabled = !!i12445[14]
  return i12444
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i12446 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i12447 = data
  i12446.m_UiScaleMode = i12447[0]
  i12446.m_ReferencePixelsPerUnit = i12447[1]
  i12446.m_ScaleFactor = i12447[2]
  i12446.m_ReferenceResolution = new pc.Vec2( i12447[3], i12447[4] )
  i12446.m_ScreenMatchMode = i12447[5]
  i12446.m_MatchWidthOrHeight = i12447[6]
  i12446.m_PhysicalUnit = i12447[7]
  i12446.m_FallbackScreenDPI = i12447[8]
  i12446.m_DefaultSpriteDPI = i12447[9]
  i12446.m_DynamicPixelsPerUnit = i12447[10]
  i12446.m_PresetInfoIsWorld = !!i12447[11]
  return i12446
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i12448 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i12449 = data
  i12448.m_IgnoreReversedGraphics = !!i12449[0]
  i12448.m_BlockingObjects = i12449[1]
  i12448.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i12449[2] )
  return i12448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i12450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i12451 = data
  i12450.cullTransparentMesh = !!i12451[0]
  return i12450
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i12452 = root || request.c( 'UnityEngine.UI.Image' )
  var i12453 = data
  request.r(i12453[0], i12453[1], 0, i12452, 'm_Sprite')
  i12452.m_Type = i12453[2]
  i12452.m_PreserveAspect = !!i12453[3]
  i12452.m_FillCenter = !!i12453[4]
  i12452.m_FillMethod = i12453[5]
  i12452.m_FillAmount = i12453[6]
  i12452.m_FillClockwise = !!i12453[7]
  i12452.m_FillOrigin = i12453[8]
  i12452.m_UseSpriteMesh = !!i12453[9]
  i12452.m_PixelsPerUnitMultiplier = i12453[10]
  request.r(i12453[11], i12453[12], 0, i12452, 'm_Material')
  i12452.m_Maskable = !!i12453[13]
  i12452.m_Color = new pc.Color(i12453[14], i12453[15], i12453[16], i12453[17])
  i12452.m_RaycastTarget = !!i12453[18]
  i12452.m_RaycastPadding = new pc.Vec4( i12453[19], i12453[20], i12453[21], i12453[22] )
  return i12452
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i12454 = root || request.c( 'UnityEngine.UI.Text' )
  var i12455 = data
  i12454.m_FontData = request.d('UnityEngine.UI.FontData', i12455[0], i12454.m_FontData)
  i12454.m_Text = i12455[1]
  request.r(i12455[2], i12455[3], 0, i12454, 'm_Material')
  i12454.m_Maskable = !!i12455[4]
  i12454.m_Color = new pc.Color(i12455[5], i12455[6], i12455[7], i12455[8])
  i12454.m_RaycastTarget = !!i12455[9]
  i12454.m_RaycastPadding = new pc.Vec4( i12455[10], i12455[11], i12455[12], i12455[13] )
  return i12454
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i12456 = root || request.c( 'UnityEngine.UI.FontData' )
  var i12457 = data
  request.r(i12457[0], i12457[1], 0, i12456, 'm_Font')
  i12456.m_FontSize = i12457[2]
  i12456.m_FontStyle = i12457[3]
  i12456.m_BestFit = !!i12457[4]
  i12456.m_MinSize = i12457[5]
  i12456.m_MaxSize = i12457[6]
  i12456.m_Alignment = i12457[7]
  i12456.m_AlignByGeometry = !!i12457[8]
  i12456.m_RichText = !!i12457[9]
  i12456.m_HorizontalOverflow = i12457[10]
  i12456.m_VerticalOverflow = i12457[11]
  i12456.m_LineSpacing = i12457[12]
  return i12456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i12458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i12459 = data
  i12458.color = new pc.Color(i12459[0], i12459[1], i12459[2], i12459[3])
  request.r(i12459[4], i12459[5], 0, i12458, 'sprite')
  i12458.flipX = !!i12459[6]
  i12458.flipY = !!i12459[7]
  i12458.drawMode = i12459[8]
  i12458.size = new pc.Vec2( i12459[9], i12459[10] )
  i12458.tileMode = i12459[11]
  i12458.adaptiveModeThreshold = i12459[12]
  i12458.maskInteraction = i12459[13]
  i12458.spriteSortPoint = i12459[14]
  i12458.enabled = !!i12459[15]
  request.r(i12459[16], i12459[17], 0, i12458, 'sharedMaterial')
  var i12461 = i12459[18]
  var i12460 = []
  for(var i = 0; i < i12461.length; i += 2) {
  request.r(i12461[i + 0], i12461[i + 1], 2, i12460, '')
  }
  i12458.sharedMaterials = i12460
  i12458.receiveShadows = !!i12459[19]
  i12458.shadowCastingMode = i12459[20]
  i12458.sortingLayerID = i12459[21]
  i12458.sortingOrder = i12459[22]
  i12458.lightmapIndex = i12459[23]
  i12458.lightmapSceneIndex = i12459[24]
  i12458.lightmapScaleOffset = new pc.Vec4( i12459[25], i12459[26], i12459[27], i12459[28] )
  i12458.lightProbeUsage = i12459[29]
  i12458.reflectionProbeUsage = i12459[30]
  return i12458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i12464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i12465 = data
  i12464.radius = i12465[0]
  i12464.enabled = !!i12465[1]
  i12464.isTrigger = !!i12465[2]
  i12464.usedByEffector = !!i12465[3]
  i12464.density = i12465[4]
  i12464.offset = new pc.Vec2( i12465[5], i12465[6] )
  request.r(i12465[7], i12465[8], 0, i12464, 'material')
  return i12464
}

Deserializers["ClickTarget"] = function (request, data, root) {
  var i12466 = root || request.c( 'ClickTarget' )
  var i12467 = data
  return i12466
}

Deserializers["PulseTarget"] = function (request, data, root) {
  var i12468 = root || request.c( 'PulseTarget' )
  var i12469 = data
  i12468.amount = i12469[0]
  i12468.speed = i12469[1]
  return i12468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i12470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i12471 = data
  i12470.ambientIntensity = i12471[0]
  i12470.reflectionIntensity = i12471[1]
  i12470.ambientMode = i12471[2]
  i12470.ambientLight = new pc.Color(i12471[3], i12471[4], i12471[5], i12471[6])
  i12470.ambientSkyColor = new pc.Color(i12471[7], i12471[8], i12471[9], i12471[10])
  i12470.ambientGroundColor = new pc.Color(i12471[11], i12471[12], i12471[13], i12471[14])
  i12470.ambientEquatorColor = new pc.Color(i12471[15], i12471[16], i12471[17], i12471[18])
  i12470.fogColor = new pc.Color(i12471[19], i12471[20], i12471[21], i12471[22])
  i12470.fogEndDistance = i12471[23]
  i12470.fogStartDistance = i12471[24]
  i12470.fogDensity = i12471[25]
  i12470.fog = !!i12471[26]
  request.r(i12471[27], i12471[28], 0, i12470, 'skybox')
  i12470.fogMode = i12471[29]
  var i12473 = i12471[30]
  var i12472 = []
  for(var i = 0; i < i12473.length; i += 1) {
    i12472.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i12473[i + 0]) );
  }
  i12470.lightmaps = i12472
  i12470.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i12471[31], i12470.lightProbes)
  i12470.lightmapsMode = i12471[32]
  i12470.mixedBakeMode = i12471[33]
  i12470.environmentLightingMode = i12471[34]
  i12470.ambientProbe = new pc.SphericalHarmonicsL2(i12471[35])
  request.r(i12471[36], i12471[37], 0, i12470, 'customReflection')
  request.r(i12471[38], i12471[39], 0, i12470, 'defaultReflection')
  i12470.defaultReflectionMode = i12471[40]
  i12470.defaultReflectionResolution = i12471[41]
  i12470.sunLightObjectId = i12471[42]
  i12470.pixelLightCount = i12471[43]
  i12470.defaultReflectionHDR = !!i12471[44]
  i12470.hasLightDataAsset = !!i12471[45]
  i12470.hasManualGenerate = !!i12471[46]
  return i12470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i12476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i12477 = data
  request.r(i12477[0], i12477[1], 0, i12476, 'lightmapColor')
  request.r(i12477[2], i12477[3], 0, i12476, 'lightmapDirection')
  request.r(i12477[4], i12477[5], 0, i12476, 'shadowMask')
  return i12476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i12478 = root || new UnityEngine.LightProbes()
  var i12479 = data
  return i12478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i12486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i12487 = data
  var i12489 = i12487[0]
  var i12488 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i12489.length; i += 1) {
    i12488.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i12489[i + 0]));
  }
  i12486.ShaderCompilationErrors = i12488
  i12486.name = i12487[1]
  i12486.guid = i12487[2]
  var i12491 = i12487[3]
  var i12490 = []
  for(var i = 0; i < i12491.length; i += 1) {
    i12490.push( i12491[i + 0] );
  }
  i12486.shaderDefinedKeywords = i12490
  var i12493 = i12487[4]
  var i12492 = []
  for(var i = 0; i < i12493.length; i += 1) {
    i12492.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i12493[i + 0]) );
  }
  i12486.passes = i12492
  var i12495 = i12487[5]
  var i12494 = []
  for(var i = 0; i < i12495.length; i += 1) {
    i12494.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i12495[i + 0]) );
  }
  i12486.usePasses = i12494
  var i12497 = i12487[6]
  var i12496 = []
  for(var i = 0; i < i12497.length; i += 1) {
    i12496.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i12497[i + 0]) );
  }
  i12486.defaultParameterValues = i12496
  request.r(i12487[7], i12487[8], 0, i12486, 'unityFallbackShader')
  i12486.readDepth = !!i12487[9]
  i12486.hasDepthOnlyPass = !!i12487[10]
  i12486.isCreatedByShaderGraph = !!i12487[11]
  i12486.disableBatching = !!i12487[12]
  i12486.compiled = !!i12487[13]
  return i12486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i12500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i12501 = data
  i12500.shaderName = i12501[0]
  i12500.errorMessage = i12501[1]
  return i12500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i12506 = root || new pc.UnityShaderPass()
  var i12507 = data
  i12506.id = i12507[0]
  i12506.subShaderIndex = i12507[1]
  i12506.name = i12507[2]
  i12506.passType = i12507[3]
  i12506.grabPassTextureName = i12507[4]
  i12506.usePass = !!i12507[5]
  i12506.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i12507[6], i12506.zTest)
  i12506.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i12507[7], i12506.zWrite)
  i12506.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i12507[8], i12506.culling)
  i12506.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i12507[9], i12506.blending)
  i12506.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i12507[10], i12506.alphaBlending)
  i12506.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i12507[11], i12506.colorWriteMask)
  i12506.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i12507[12], i12506.offsetUnits)
  i12506.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i12507[13], i12506.offsetFactor)
  i12506.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i12507[14], i12506.stencilRef)
  i12506.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i12507[15], i12506.stencilReadMask)
  i12506.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i12507[16], i12506.stencilWriteMask)
  i12506.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i12507[17], i12506.stencilOp)
  i12506.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i12507[18], i12506.stencilOpFront)
  i12506.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i12507[19], i12506.stencilOpBack)
  var i12509 = i12507[20]
  var i12508 = []
  for(var i = 0; i < i12509.length; i += 1) {
    i12508.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i12509[i + 0]) );
  }
  i12506.tags = i12508
  var i12511 = i12507[21]
  var i12510 = []
  for(var i = 0; i < i12511.length; i += 1) {
    i12510.push( i12511[i + 0] );
  }
  i12506.passDefinedKeywords = i12510
  var i12513 = i12507[22]
  var i12512 = []
  for(var i = 0; i < i12513.length; i += 1) {
    i12512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i12513[i + 0]) );
  }
  i12506.passDefinedKeywordGroups = i12512
  var i12515 = i12507[23]
  var i12514 = []
  for(var i = 0; i < i12515.length; i += 1) {
    i12514.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i12515[i + 0]) );
  }
  i12506.variants = i12514
  var i12517 = i12507[24]
  var i12516 = []
  for(var i = 0; i < i12517.length; i += 1) {
    i12516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i12517[i + 0]) );
  }
  i12506.excludedVariants = i12516
  i12506.hasDepthReader = !!i12507[25]
  return i12506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i12518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i12519 = data
  i12518.val = i12519[0]
  i12518.name = i12519[1]
  return i12518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i12520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i12521 = data
  i12520.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i12521[0], i12520.src)
  i12520.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i12521[1], i12520.dst)
  i12520.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i12521[2], i12520.op)
  return i12520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i12522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i12523 = data
  i12522.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i12523[0], i12522.pass)
  i12522.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i12523[1], i12522.fail)
  i12522.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i12523[2], i12522.zFail)
  i12522.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i12523[3], i12522.comp)
  return i12522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i12526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i12527 = data
  i12526.name = i12527[0]
  i12526.value = i12527[1]
  return i12526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i12530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i12531 = data
  var i12533 = i12531[0]
  var i12532 = []
  for(var i = 0; i < i12533.length; i += 1) {
    i12532.push( i12533[i + 0] );
  }
  i12530.keywords = i12532
  i12530.hasDiscard = !!i12531[1]
  return i12530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i12536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i12537 = data
  i12536.passId = i12537[0]
  i12536.subShaderIndex = i12537[1]
  var i12539 = i12537[2]
  var i12538 = []
  for(var i = 0; i < i12539.length; i += 1) {
    i12538.push( i12539[i + 0] );
  }
  i12536.keywords = i12538
  i12536.vertexProgram = i12537[3]
  i12536.fragmentProgram = i12537[4]
  i12536.exportedForWebGl2 = !!i12537[5]
  i12536.readDepth = !!i12537[6]
  return i12536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i12542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i12543 = data
  request.r(i12543[0], i12543[1], 0, i12542, 'shader')
  i12542.pass = i12543[2]
  return i12542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i12546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i12547 = data
  i12546.name = i12547[0]
  i12546.type = i12547[1]
  i12546.value = new pc.Vec4( i12547[2], i12547[3], i12547[4], i12547[5] )
  i12546.textureValue = i12547[6]
  i12546.shaderPropertyFlag = i12547[7]
  return i12546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i12548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i12549 = data
  i12548.name = i12549[0]
  request.r(i12549[1], i12549[2], 0, i12548, 'texture')
  i12548.aabb = i12549[3]
  i12548.vertices = i12549[4]
  i12548.triangles = i12549[5]
  i12548.textureRect = UnityEngine.Rect.MinMaxRect(i12549[6], i12549[7], i12549[8], i12549[9])
  i12548.packedRect = UnityEngine.Rect.MinMaxRect(i12549[10], i12549[11], i12549[12], i12549[13])
  i12548.border = new pc.Vec4( i12549[14], i12549[15], i12549[16], i12549[17] )
  i12548.transparency = i12549[18]
  i12548.bounds = i12549[19]
  i12548.pixelsPerUnit = i12549[20]
  i12548.textureWidth = i12549[21]
  i12548.textureHeight = i12549[22]
  i12548.nativeSize = new pc.Vec2( i12549[23], i12549[24] )
  i12548.pivot = new pc.Vec2( i12549[25], i12549[26] )
  i12548.textureRectOffset = new pc.Vec2( i12549[27], i12549[28] )
  return i12548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i12550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i12551 = data
  i12550.name = i12551[0]
  i12550.ascent = i12551[1]
  i12550.originalLineHeight = i12551[2]
  i12550.fontSize = i12551[3]
  var i12553 = i12551[4]
  var i12552 = []
  for(var i = 0; i < i12553.length; i += 1) {
    i12552.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i12553[i + 0]) );
  }
  i12550.characterInfo = i12552
  request.r(i12551[5], i12551[6], 0, i12550, 'texture')
  i12550.originalFontSize = i12551[7]
  return i12550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i12556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i12557 = data
  i12556.index = i12557[0]
  i12556.advance = i12557[1]
  i12556.bearing = i12557[2]
  i12556.glyphWidth = i12557[3]
  i12556.glyphHeight = i12557[4]
  i12556.minX = i12557[5]
  i12556.maxX = i12557[6]
  i12556.minY = i12557[7]
  i12556.maxY = i12557[8]
  i12556.uvBottomLeftX = i12557[9]
  i12556.uvBottomLeftY = i12557[10]
  i12556.uvBottomRightX = i12557[11]
  i12556.uvBottomRightY = i12557[12]
  i12556.uvTopLeftX = i12557[13]
  i12556.uvTopLeftY = i12557[14]
  i12556.uvTopRightX = i12557[15]
  i12556.uvTopRightY = i12557[16]
  return i12556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i12558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i12559 = data
  i12558.name = i12559[0]
  i12558.bytes64 = i12559[1]
  i12558.data = i12559[2]
  return i12558
}

Deserializers["UnityEngine.InputSystem.InputActionAsset"] = function (request, data, root) {
  var i12560 = root || request.c( 'UnityEngine.InputSystem.InputActionAsset' )
  var i12561 = data
  var i12563 = i12561[0]
  var i12562 = []
  for(var i = 0; i < i12563.length; i += 1) {
    i12562.push( request.d('UnityEngine.InputSystem.InputActionMap', i12563[i + 0]) );
  }
  i12560.m_ActionMaps = i12562
  var i12565 = i12561[1]
  var i12564 = []
  for(var i = 0; i < i12565.length; i += 1) {
    i12564.push( request.d('UnityEngine.InputSystem.InputControlScheme', i12565[i + 0]) );
  }
  i12560.m_ControlSchemes = i12564
  i12560.m_IsProjectWide = !!i12561[2]
  return i12560
}

Deserializers["UnityEngine.InputSystem.InputActionMap"] = function (request, data, root) {
  var i12568 = root || request.c( 'UnityEngine.InputSystem.InputActionMap' )
  var i12569 = data
  i12568.m_Name = i12569[0]
  i12568.m_Id = i12569[1]
  request.r(i12569[2], i12569[3], 0, i12568, 'm_Asset')
  var i12571 = i12569[4]
  var i12570 = []
  for(var i = 0; i < i12571.length; i += 1) {
    i12570.push( request.d('UnityEngine.InputSystem.InputAction', i12571[i + 0]) );
  }
  i12568.m_Actions = i12570
  var i12573 = i12569[5]
  var i12572 = []
  for(var i = 0; i < i12573.length; i += 1) {
    i12572.push( request.d('UnityEngine.InputSystem.InputBinding', i12573[i + 0]) );
  }
  i12568.m_Bindings = i12572
  return i12568
}

Deserializers["UnityEngine.InputSystem.InputAction"] = function (request, data, root) {
  var i12576 = root || request.c( 'UnityEngine.InputSystem.InputAction' )
  var i12577 = data
  i12576.m_Name = i12577[0]
  i12576.m_Type = i12577[1]
  i12576.m_ExpectedControlType = i12577[2]
  i12576.m_Id = i12577[3]
  i12576.m_Processors = i12577[4]
  i12576.m_Interactions = i12577[5]
  var i12579 = i12577[6]
  var i12578 = []
  for(var i = 0; i < i12579.length; i += 1) {
    i12578.push( request.d('UnityEngine.InputSystem.InputBinding', i12579[i + 0]) );
  }
  i12576.m_SingletonActionBindings = i12578
  i12576.m_Flags = i12577[7]
  i12576.m_Priority = i12577[8]
  return i12576
}

Deserializers["UnityEngine.InputSystem.InputBinding"] = function (request, data, root) {
  var i12582 = root || request.c( 'UnityEngine.InputSystem.InputBinding' )
  var i12583 = data
  i12582.m_Name = i12583[0]
  i12582.m_Id = i12583[1]
  i12582.m_Path = i12583[2]
  i12582.m_Interactions = i12583[3]
  i12582.m_Processors = i12583[4]
  i12582.m_Groups = i12583[5]
  i12582.m_Action = i12583[6]
  i12582.m_Flags = i12583[7]
  return i12582
}

Deserializers["UnityEngine.InputSystem.InputControlScheme"] = function (request, data, root) {
  var i12586 = root || request.c( 'UnityEngine.InputSystem.InputControlScheme' )
  var i12587 = data
  i12586.m_Name = i12587[0]
  i12586.m_BindingGroup = i12587[1]
  var i12589 = i12587[2]
  var i12588 = []
  for(var i = 0; i < i12589.length; i += 1) {
    i12588.push( request.d('UnityEngine.InputSystem.InputControlScheme+DeviceRequirement', i12589[i + 0]) );
  }
  i12586.m_DeviceRequirements = i12588
  return i12586
}

Deserializers["UnityEngine.InputSystem.InputControlScheme+DeviceRequirement"] = function (request, data, root) {
  var i12592 = root || request.c( 'UnityEngine.InputSystem.InputControlScheme+DeviceRequirement' )
  var i12593 = data
  i12592.m_ControlPath = i12593[0]
  i12592.m_Flags = i12593[1]
  return i12592
}

Deserializers["UnityEngine.InputSystem.InputActionReference"] = function (request, data, root) {
  var i12594 = root || request.c( 'UnityEngine.InputSystem.InputActionReference' )
  var i12595 = data
  request.r(i12595[0], i12595[1], 0, i12594, 'm_Asset')
  i12594.m_ActionId = i12595[2]
  return i12594
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i12596 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i12597 = data
  i12596.normalStyle = i12597[0]
  i12596.normalSpacingOffset = i12597[1]
  i12596.boldStyle = i12597[2]
  i12596.boldSpacing = i12597[3]
  i12596.italicStyle = i12597[4]
  i12596.tabSize = i12597[5]
  request.r(i12597[6], i12597[7], 0, i12596, 'atlas')
  i12596.m_SourceFontFileGUID = i12597[8]
  i12596.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i12597[9], i12596.m_CreationSettings)
  request.r(i12597[10], i12597[11], 0, i12596, 'm_SourceFontFile')
  i12596.m_SourceFontFilePath = i12597[12]
  i12596.m_AtlasPopulationMode = i12597[13]
  i12596.InternalDynamicOS = !!i12597[14]
  var i12599 = i12597[15]
  var i12598 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i12599.length; i += 1) {
    i12598.add(request.d('UnityEngine.TextCore.Glyph', i12599[i + 0]));
  }
  i12596.m_GlyphTable = i12598
  var i12601 = i12597[16]
  var i12600 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i12601.length; i += 1) {
    i12600.add(request.d('TMPro.TMP_Character', i12601[i + 0]));
  }
  i12596.m_CharacterTable = i12600
  var i12603 = i12597[17]
  var i12602 = []
  for(var i = 0; i < i12603.length; i += 2) {
  request.r(i12603[i + 0], i12603[i + 1], 2, i12602, '')
  }
  i12596.m_AtlasTextures = i12602
  i12596.m_AtlasTextureIndex = i12597[18]
  i12596.m_IsMultiAtlasTexturesEnabled = !!i12597[19]
  i12596.m_GetFontFeatures = !!i12597[20]
  i12596.m_ClearDynamicDataOnBuild = !!i12597[21]
  i12596.m_AtlasWidth = i12597[22]
  i12596.m_AtlasHeight = i12597[23]
  i12596.m_AtlasPadding = i12597[24]
  i12596.m_AtlasRenderMode = i12597[25]
  var i12605 = i12597[26]
  var i12604 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i12605.length; i += 1) {
    i12604.add(request.d('UnityEngine.TextCore.GlyphRect', i12605[i + 0]));
  }
  i12596.m_UsedGlyphRects = i12604
  var i12607 = i12597[27]
  var i12606 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i12607.length; i += 1) {
    i12606.add(request.d('UnityEngine.TextCore.GlyphRect', i12607[i + 0]));
  }
  i12596.m_FreeGlyphRects = i12606
  i12596.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i12597[28], i12596.m_FontFeatureTable)
  i12596.m_ShouldReimportFontFeatures = !!i12597[29]
  var i12609 = i12597[30]
  var i12608 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i12609.length; i += 2) {
  request.r(i12609[i + 0], i12609[i + 1], 1, i12608, '')
  }
  i12596.m_FallbackFontAssetTable = i12608
  var i12611 = i12597[31]
  var i12610 = []
  for(var i = 0; i < i12611.length; i += 1) {
    i12610.push( request.d('TMPro.TMP_FontWeightPair', i12611[i + 0]) );
  }
  i12596.m_FontWeightTable = i12610
  var i12613 = i12597[32]
  var i12612 = []
  for(var i = 0; i < i12613.length; i += 1) {
    i12612.push( request.d('TMPro.TMP_FontWeightPair', i12613[i + 0]) );
  }
  i12596.fontWeights = i12612
  i12596.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i12597[33], i12596.m_fontInfo)
  var i12615 = i12597[34]
  var i12614 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i12615.length; i += 1) {
    i12614.add(request.d('TMPro.TMP_Glyph', i12615[i + 0]));
  }
  i12596.m_glyphInfoList = i12614
  i12596.m_KerningTable = request.d('TMPro.KerningTable', i12597[35], i12596.m_KerningTable)
  var i12617 = i12597[36]
  var i12616 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i12617.length; i += 2) {
  request.r(i12617[i + 0], i12617[i + 1], 1, i12616, '')
  }
  i12596.fallbackFontAssets = i12616
  i12596.m_Version = i12597[37]
  i12596.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i12597[38], i12596.m_FaceInfo)
  request.r(i12597[39], i12597[40], 0, i12596, 'm_Material')
  return i12596
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i12618 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i12619 = data
  i12618.sourceFontFileName = i12619[0]
  i12618.sourceFontFileGUID = i12619[1]
  i12618.faceIndex = i12619[2]
  i12618.pointSizeSamplingMode = i12619[3]
  i12618.pointSize = i12619[4]
  i12618.padding = i12619[5]
  i12618.paddingMode = i12619[6]
  i12618.packingMode = i12619[7]
  i12618.atlasWidth = i12619[8]
  i12618.atlasHeight = i12619[9]
  i12618.characterSetSelectionMode = i12619[10]
  i12618.characterSequence = i12619[11]
  i12618.referencedFontAssetGUID = i12619[12]
  i12618.referencedTextAssetGUID = i12619[13]
  i12618.fontStyle = i12619[14]
  i12618.fontStyleModifier = i12619[15]
  i12618.renderMode = i12619[16]
  i12618.includeFontFeatures = !!i12619[17]
  return i12618
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i12622 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i12623 = data
  i12622.m_Index = i12623[0]
  i12622.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i12623[1], i12622.m_Metrics)
  i12622.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i12623[2], i12622.m_GlyphRect)
  i12622.m_Scale = i12623[3]
  i12622.m_AtlasIndex = i12623[4]
  i12622.m_ClassDefinitionType = i12623[5]
  return i12622
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i12624 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i12625 = data
  i12624.m_Width = i12625[0]
  i12624.m_Height = i12625[1]
  i12624.m_HorizontalBearingX = i12625[2]
  i12624.m_HorizontalBearingY = i12625[3]
  i12624.m_HorizontalAdvance = i12625[4]
  return i12624
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i12626 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i12627 = data
  i12626.m_X = i12627[0]
  i12626.m_Y = i12627[1]
  i12626.m_Width = i12627[2]
  i12626.m_Height = i12627[3]
  return i12626
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i12630 = root || request.c( 'TMPro.TMP_Character' )
  var i12631 = data
  i12630.m_ElementType = i12631[0]
  i12630.m_Unicode = i12631[1]
  i12630.m_GlyphIndex = i12631[2]
  i12630.m_Scale = i12631[3]
  return i12630
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i12636 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i12637 = data
  var i12639 = i12637[0]
  var i12638 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i12639.length; i += 1) {
    i12638.add(request.d('TMPro.MultipleSubstitutionRecord', i12639[i + 0]));
  }
  i12636.m_MultipleSubstitutionRecords = i12638
  var i12641 = i12637[1]
  var i12640 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i12641.length; i += 1) {
    i12640.add(request.d('TMPro.LigatureSubstitutionRecord', i12641[i + 0]));
  }
  i12636.m_LigatureSubstitutionRecords = i12640
  var i12643 = i12637[2]
  var i12642 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i12643.length; i += 1) {
    i12642.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i12643[i + 0]));
  }
  i12636.m_GlyphPairAdjustmentRecords = i12642
  var i12645 = i12637[3]
  var i12644 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i12645.length; i += 1) {
    i12644.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i12645[i + 0]));
  }
  i12636.m_MarkToBaseAdjustmentRecords = i12644
  var i12647 = i12637[4]
  var i12646 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i12647.length; i += 1) {
    i12646.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i12647[i + 0]));
  }
  i12636.m_MarkToMarkAdjustmentRecords = i12646
  return i12636
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i12650 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i12651 = data
  i12650.m_TargetGlyphID = i12651[0]
  i12650.m_SubstituteGlyphIDs = i12651[1]
  return i12650
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i12654 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i12655 = data
  i12654.m_ComponentGlyphIDs = i12655[0]
  i12654.m_LigatureGlyphID = i12655[1]
  return i12654
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i12658 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i12659 = data
  i12658.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i12659[0], i12658.m_FirstAdjustmentRecord)
  i12658.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i12659[1], i12658.m_SecondAdjustmentRecord)
  i12658.m_FeatureLookupFlags = i12659[2]
  return i12658
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i12660 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i12661 = data
  i12660.m_GlyphIndex = i12661[0]
  i12660.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i12661[1], i12660.m_GlyphValueRecord)
  return i12660
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i12662 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i12663 = data
  i12662.m_XPlacement = i12663[0]
  i12662.m_YPlacement = i12663[1]
  i12662.m_XAdvance = i12663[2]
  i12662.m_YAdvance = i12663[3]
  return i12662
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i12666 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i12667 = data
  i12666.m_BaseGlyphID = i12667[0]
  i12666.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i12667[1], i12666.m_BaseGlyphAnchorPoint)
  i12666.m_MarkGlyphID = i12667[2]
  i12666.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i12667[3], i12666.m_MarkPositionAdjustment)
  return i12666
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i12670 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i12671 = data
  i12670.m_BaseMarkGlyphID = i12671[0]
  i12670.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i12671[1], i12670.m_BaseMarkGlyphAnchorPoint)
  i12670.m_CombiningMarkGlyphID = i12671[2]
  i12670.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i12671[3], i12670.m_CombiningMarkPositionAdjustment)
  return i12670
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i12676 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i12677 = data
  request.r(i12677[0], i12677[1], 0, i12676, 'regularTypeface')
  request.r(i12677[2], i12677[3], 0, i12676, 'italicTypeface')
  return i12676
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i12678 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i12679 = data
  i12678.Name = i12679[0]
  i12678.PointSize = i12679[1]
  i12678.Scale = i12679[2]
  i12678.CharacterCount = i12679[3]
  i12678.LineHeight = i12679[4]
  i12678.Baseline = i12679[5]
  i12678.Ascender = i12679[6]
  i12678.CapHeight = i12679[7]
  i12678.Descender = i12679[8]
  i12678.CenterLine = i12679[9]
  i12678.SuperscriptOffset = i12679[10]
  i12678.SubscriptOffset = i12679[11]
  i12678.SubSize = i12679[12]
  i12678.Underline = i12679[13]
  i12678.UnderlineThickness = i12679[14]
  i12678.strikethrough = i12679[15]
  i12678.strikethroughThickness = i12679[16]
  i12678.TabWidth = i12679[17]
  i12678.Padding = i12679[18]
  i12678.AtlasWidth = i12679[19]
  i12678.AtlasHeight = i12679[20]
  return i12678
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i12682 = root || request.c( 'TMPro.TMP_Glyph' )
  var i12683 = data
  i12682.id = i12683[0]
  i12682.x = i12683[1]
  i12682.y = i12683[2]
  i12682.width = i12683[3]
  i12682.height = i12683[4]
  i12682.xOffset = i12683[5]
  i12682.yOffset = i12683[6]
  i12682.xAdvance = i12683[7]
  i12682.scale = i12683[8]
  return i12682
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i12684 = root || request.c( 'TMPro.KerningTable' )
  var i12685 = data
  var i12687 = i12685[0]
  var i12686 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i12687.length; i += 1) {
    i12686.add(request.d('TMPro.KerningPair', i12687[i + 0]));
  }
  i12684.kerningPairs = i12686
  return i12684
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i12690 = root || request.c( 'TMPro.KerningPair' )
  var i12691 = data
  i12690.xOffset = i12691[0]
  i12690.m_FirstGlyph = i12691[1]
  i12690.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i12691[2], i12690.m_FirstGlyphAdjustments)
  i12690.m_SecondGlyph = i12691[3]
  i12690.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i12691[4], i12690.m_SecondGlyphAdjustments)
  i12690.m_IgnoreSpacingAdjustments = !!i12691[5]
  return i12690
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i12692 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i12693 = data
  i12692.m_FaceIndex = i12693[0]
  i12692.m_FamilyName = i12693[1]
  i12692.m_StyleName = i12693[2]
  i12692.m_PointSize = i12693[3]
  i12692.m_Scale = i12693[4]
  i12692.m_UnitsPerEM = i12693[5]
  i12692.m_LineHeight = i12693[6]
  i12692.m_AscentLine = i12693[7]
  i12692.m_CapLine = i12693[8]
  i12692.m_MeanLine = i12693[9]
  i12692.m_Baseline = i12693[10]
  i12692.m_DescentLine = i12693[11]
  i12692.m_SuperscriptOffset = i12693[12]
  i12692.m_SuperscriptSize = i12693[13]
  i12692.m_SubscriptOffset = i12693[14]
  i12692.m_SubscriptSize = i12693[15]
  i12692.m_UnderlineOffset = i12693[16]
  i12692.m_UnderlineThickness = i12693[17]
  i12692.m_StrikethroughOffset = i12693[18]
  i12692.m_StrikethroughThickness = i12693[19]
  i12692.m_TabWidth = i12693[20]
  return i12692
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i12694 = root || request.c( 'TMPro.TMP_Settings' )
  var i12695 = data
  i12694.assetVersion = i12695[0]
  i12694.m_TextWrappingMode = i12695[1]
  i12694.m_enableKerning = !!i12695[2]
  var i12697 = i12695[3]
  var i12696 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i12697.length; i += 1) {
    i12696.add(i12697[i + 0]);
  }
  i12694.m_ActiveFontFeatures = i12696
  i12694.m_enableExtraPadding = !!i12695[4]
  i12694.m_enableTintAllSprites = !!i12695[5]
  i12694.m_enableParseEscapeCharacters = !!i12695[6]
  i12694.m_EnableRaycastTarget = !!i12695[7]
  i12694.m_GetFontFeaturesAtRuntime = !!i12695[8]
  i12694.m_missingGlyphCharacter = i12695[9]
  i12694.m_ClearDynamicDataOnBuild = !!i12695[10]
  i12694.m_warningsDisabled = !!i12695[11]
  request.r(i12695[12], i12695[13], 0, i12694, 'm_defaultFontAsset')
  i12694.m_defaultFontAssetPath = i12695[14]
  i12694.m_defaultFontSize = i12695[15]
  i12694.m_defaultAutoSizeMinRatio = i12695[16]
  i12694.m_defaultAutoSizeMaxRatio = i12695[17]
  i12694.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i12695[18], i12695[19] )
  i12694.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i12695[20], i12695[21] )
  i12694.m_autoSizeTextContainer = !!i12695[22]
  i12694.m_IsTextObjectScaleStatic = !!i12695[23]
  var i12699 = i12695[24]
  var i12698 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i12699.length; i += 2) {
  request.r(i12699[i + 0], i12699[i + 1], 1, i12698, '')
  }
  i12694.m_fallbackFontAssets = i12698
  i12694.m_matchMaterialPreset = !!i12695[25]
  i12694.m_HideSubTextObjects = !!i12695[26]
  request.r(i12695[27], i12695[28], 0, i12694, 'm_defaultSpriteAsset')
  i12694.m_defaultSpriteAssetPath = i12695[29]
  i12694.m_enableEmojiSupport = !!i12695[30]
  i12694.m_MissingCharacterSpriteUnicode = i12695[31]
  var i12701 = i12695[32]
  var i12700 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i12701.length; i += 2) {
  request.r(i12701[i + 0], i12701[i + 1], 1, i12700, '')
  }
  i12694.m_EmojiFallbackTextAssets = i12700
  i12694.m_defaultColorGradientPresetsPath = i12695[33]
  request.r(i12695[34], i12695[35], 0, i12694, 'm_defaultStyleSheet')
  i12694.m_StyleSheetsResourcePath = i12695[36]
  request.r(i12695[37], i12695[38], 0, i12694, 'm_leadingCharacters')
  request.r(i12695[39], i12695[40], 0, i12694, 'm_followingCharacters')
  i12694.m_UseModernHangulLineBreakingRules = !!i12695[41]
  return i12694
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i12706 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i12707 = data
  request.r(i12707[0], i12707[1], 0, i12706, 'spriteSheet')
  var i12709 = i12707[2]
  var i12708 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i12709.length; i += 1) {
    i12708.add(request.d('TMPro.TMP_Sprite', i12709[i + 0]));
  }
  i12706.spriteInfoList = i12708
  var i12711 = i12707[3]
  var i12710 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i12711.length; i += 2) {
  request.r(i12711[i + 0], i12711[i + 1], 1, i12710, '')
  }
  i12706.fallbackSpriteAssets = i12710
  var i12713 = i12707[4]
  var i12712 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i12713.length; i += 1) {
    i12712.add(request.d('TMPro.TMP_SpriteCharacter', i12713[i + 0]));
  }
  i12706.m_SpriteCharacterTable = i12712
  var i12715 = i12707[5]
  var i12714 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i12715.length; i += 1) {
    i12714.add(request.d('TMPro.TMP_SpriteGlyph', i12715[i + 0]));
  }
  i12706.m_GlyphTable = i12714
  i12706.m_Version = i12707[6]
  i12706.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i12707[7], i12706.m_FaceInfo)
  request.r(i12707[8], i12707[9], 0, i12706, 'm_Material')
  return i12706
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i12718 = root || request.c( 'TMPro.TMP_Sprite' )
  var i12719 = data
  i12718.name = i12719[0]
  i12718.hashCode = i12719[1]
  i12718.unicode = i12719[2]
  i12718.pivot = new pc.Vec2( i12719[3], i12719[4] )
  request.r(i12719[5], i12719[6], 0, i12718, 'sprite')
  i12718.id = i12719[7]
  i12718.x = i12719[8]
  i12718.y = i12719[9]
  i12718.width = i12719[10]
  i12718.height = i12719[11]
  i12718.xOffset = i12719[12]
  i12718.yOffset = i12719[13]
  i12718.xAdvance = i12719[14]
  i12718.scale = i12719[15]
  return i12718
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i12724 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i12725 = data
  i12724.m_Name = i12725[0]
  i12724.m_ElementType = i12725[1]
  i12724.m_Unicode = i12725[2]
  i12724.m_GlyphIndex = i12725[3]
  i12724.m_Scale = i12725[4]
  return i12724
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i12728 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i12729 = data
  request.r(i12729[0], i12729[1], 0, i12728, 'sprite')
  i12728.m_Index = i12729[2]
  i12728.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i12729[3], i12728.m_Metrics)
  i12728.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i12729[4], i12728.m_GlyphRect)
  i12728.m_Scale = i12729[5]
  i12728.m_AtlasIndex = i12729[6]
  i12728.m_ClassDefinitionType = i12729[7]
  return i12728
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i12730 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i12731 = data
  var i12733 = i12731[0]
  var i12732 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i12733.length; i += 1) {
    i12732.add(request.d('TMPro.TMP_Style', i12733[i + 0]));
  }
  i12730.m_StyleList = i12732
  return i12730
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i12736 = root || request.c( 'TMPro.TMP_Style' )
  var i12737 = data
  i12736.m_Name = i12737[0]
  i12736.m_HashCode = i12737[1]
  i12736.m_OpeningDefinition = i12737[2]
  i12736.m_ClosingDefinition = i12737[3]
  i12736.m_OpeningTagArray = i12737[4]
  i12736.m_ClosingTagArray = i12737[5]
  return i12736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i12738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i12739 = data
  var i12741 = i12739[0]
  var i12740 = []
  for(var i = 0; i < i12741.length; i += 1) {
    i12740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i12741[i + 0]) );
  }
  i12738.files = i12740
  i12738.componentToPrefabIds = i12739[1]
  return i12738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i12744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i12745 = data
  i12744.path = i12745[0]
  request.r(i12745[1], i12745[2], 0, i12744, 'unityObject')
  return i12744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i12746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i12747 = data
  var i12749 = i12747[0]
  var i12748 = []
  for(var i = 0; i < i12749.length; i += 1) {
    i12748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i12749[i + 0]) );
  }
  i12746.scriptsExecutionOrder = i12748
  var i12751 = i12747[1]
  var i12750 = []
  for(var i = 0; i < i12751.length; i += 1) {
    i12750.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i12751[i + 0]) );
  }
  i12746.sortingLayers = i12750
  var i12753 = i12747[2]
  var i12752 = []
  for(var i = 0; i < i12753.length; i += 1) {
    i12752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i12753[i + 0]) );
  }
  i12746.cullingLayers = i12752
  i12746.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i12747[3], i12746.timeSettings)
  i12746.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i12747[4], i12746.physicsSettings)
  i12746.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i12747[5], i12746.physics2DSettings)
  i12746.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i12747[6], i12746.qualitySettings)
  i12746.enableRealtimeShadows = !!i12747[7]
  i12746.enableAutoInstancing = !!i12747[8]
  i12746.enableStaticBatching = !!i12747[9]
  i12746.enableDynamicBatching = !!i12747[10]
  i12746.usePreservativeDynamicBatching = !!i12747[11]
  i12746.lightmapEncodingQuality = i12747[12]
  i12746.desiredColorSpace = i12747[13]
  var i12755 = i12747[14]
  var i12754 = []
  for(var i = 0; i < i12755.length; i += 1) {
    i12754.push( i12755[i + 0] );
  }
  i12746.allTags = i12754
  return i12746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i12758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i12759 = data
  i12758.name = i12759[0]
  i12758.value = i12759[1]
  return i12758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i12762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i12763 = data
  i12762.id = i12763[0]
  i12762.name = i12763[1]
  i12762.value = i12763[2]
  return i12762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i12766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i12767 = data
  i12766.id = i12767[0]
  i12766.name = i12767[1]
  return i12766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i12768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i12769 = data
  i12768.fixedDeltaTime = i12769[0]
  i12768.maximumDeltaTime = i12769[1]
  i12768.timeScale = i12769[2]
  i12768.maximumParticleTimestep = i12769[3]
  return i12768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i12770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i12771 = data
  i12770.gravity = new pc.Vec3( i12771[0], i12771[1], i12771[2] )
  i12770.defaultSolverIterations = i12771[3]
  i12770.bounceThreshold = i12771[4]
  i12770.autoSyncTransforms = !!i12771[5]
  i12770.autoSimulation = !!i12771[6]
  var i12773 = i12771[7]
  var i12772 = []
  for(var i = 0; i < i12773.length; i += 1) {
    i12772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i12773[i + 0]) );
  }
  i12770.collisionMatrix = i12772
  return i12770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i12776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i12777 = data
  i12776.enabled = !!i12777[0]
  i12776.layerId = i12777[1]
  i12776.otherLayerId = i12777[2]
  return i12776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i12778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i12779 = data
  request.r(i12779[0], i12779[1], 0, i12778, 'material')
  i12778.gravity = new pc.Vec2( i12779[2], i12779[3] )
  i12778.positionIterations = i12779[4]
  i12778.velocityIterations = i12779[5]
  i12778.velocityThreshold = i12779[6]
  i12778.maxLinearCorrection = i12779[7]
  i12778.maxAngularCorrection = i12779[8]
  i12778.maxTranslationSpeed = i12779[9]
  i12778.maxRotationSpeed = i12779[10]
  i12778.baumgarteScale = i12779[11]
  i12778.baumgarteTOIScale = i12779[12]
  i12778.timeToSleep = i12779[13]
  i12778.linearSleepTolerance = i12779[14]
  i12778.angularSleepTolerance = i12779[15]
  i12778.defaultContactOffset = i12779[16]
  i12778.autoSimulation = !!i12779[17]
  i12778.queriesHitTriggers = !!i12779[18]
  i12778.queriesStartInColliders = !!i12779[19]
  i12778.callbacksOnDisable = !!i12779[20]
  i12778.reuseCollisionCallbacks = !!i12779[21]
  i12778.autoSyncTransforms = !!i12779[22]
  var i12781 = i12779[23]
  var i12780 = []
  for(var i = 0; i < i12781.length; i += 1) {
    i12780.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i12781[i + 0]) );
  }
  i12778.collisionMatrix = i12780
  return i12778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i12784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i12785 = data
  i12784.enabled = !!i12785[0]
  i12784.layerId = i12785[1]
  i12784.otherLayerId = i12785[2]
  return i12784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i12786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i12787 = data
  var i12789 = i12787[0]
  var i12788 = []
  for(var i = 0; i < i12789.length; i += 1) {
    i12788.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i12789[i + 0]) );
  }
  i12786.qualityLevels = i12788
  var i12791 = i12787[1]
  var i12790 = []
  for(var i = 0; i < i12791.length; i += 1) {
    i12790.push( i12791[i + 0] );
  }
  i12786.names = i12790
  i12786.shadows = i12787[2]
  i12786.anisotropicFiltering = i12787[3]
  i12786.antiAliasing = i12787[4]
  i12786.lodBias = i12787[5]
  i12786.shadowCascades = i12787[6]
  i12786.shadowDistance = i12787[7]
  i12786.shadowmaskMode = i12787[8]
  i12786.shadowProjection = i12787[9]
  i12786.shadowResolution = i12787[10]
  i12786.softParticles = !!i12787[11]
  i12786.softVegetation = !!i12787[12]
  i12786.activeColorSpace = i12787[13]
  i12786.desiredColorSpace = i12787[14]
  i12786.masterTextureLimit = i12787[15]
  i12786.maxQueuedFrames = i12787[16]
  i12786.particleRaycastBudget = i12787[17]
  i12786.pixelLightCount = i12787[18]
  i12786.realtimeReflectionProbes = !!i12787[19]
  i12786.shadowCascade2Split = i12787[20]
  i12786.shadowCascade4Split = new pc.Vec3( i12787[21], i12787[22], i12787[23] )
  i12786.streamingMipmapsActive = !!i12787[24]
  i12786.vSyncCount = i12787[25]
  i12786.asyncUploadBufferSize = i12787[26]
  i12786.asyncUploadTimeSlice = i12787[27]
  i12786.billboardsFaceCameraPosition = !!i12787[28]
  i12786.shadowNearPlaneOffset = i12787[29]
  i12786.streamingMipmapsMemoryBudget = i12787[30]
  i12786.maximumLODLevel = i12787[31]
  i12786.streamingMipmapsAddAllCameras = !!i12787[32]
  i12786.streamingMipmapsMaxLevelReduction = i12787[33]
  i12786.streamingMipmapsRenderersPerFrame = i12787[34]
  i12786.resolutionScalingFixedDPIFactor = i12787[35]
  i12786.streamingMipmapsMaxFileIORequests = i12787[36]
  i12786.currentQualityLevel = i12787[37]
  return i12786
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i12794 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i12795 = data
  i12794.m_XCoordinate = i12795[0]
  i12794.m_YCoordinate = i12795[1]
  return i12794
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i12796 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i12797 = data
  i12796.m_XPositionAdjustment = i12797[0]
  i12796.m_YPositionAdjustment = i12797[1]
  return i12796
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i12798 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i12799 = data
  i12798.xPlacement = i12799[0]
  i12798.yPlacement = i12799[1]
  i12798.xAdvance = i12799[2]
  i12798.yAdvance = i12799[3]
  return i12798
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"31":[32],"33":[32],"34":[32],"35":[32],"36":[32],"37":[32],"38":[39],"40":[1],"41":[42],"43":[42],"44":[42],"45":[42],"46":[42],"47":[42],"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[49],"56":[49],"57":[49],"58":[49],"59":[49],"60":[49],"61":[49],"62":[1],"63":[64],"65":[66],"67":[66],"12":[11],"68":[20],"69":[1],"70":[71],"5":[4],"72":[12],"73":[11],"74":[15,11],"75":[64],"76":[15,11],"77":[11],"78":[11],"79":[64,11],"80":[11,15],"81":[82],"83":[82],"84":[82],"85":[11],"86":[11],"14":[12],"16":[15,11],"87":[11],"13":[12],"88":[11],"89":[11],"90":[11],"91":[11],"92":[11],"93":[11],"94":[11],"95":[11],"96":[11],"97":[15,11],"98":[11],"99":[11],"100":[11],"101":[11],"18":[15,11],"102":[11],"103":[4],"104":[4],"105":[4],"106":[4],"107":[1],"108":[1]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.InputActionAsset","UnityEngine.InputSystem.InputActionReference","UnityEngine.MonoBehaviour","GameManager","UnityEngine.GameObject","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.CircleCollider2D","ClickTarget","PulseTarget","UnityEngine.Texture2D","TMPro.TMP_FontAsset","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.85f2";

Deserializers.productName = "PlayableAddsCP1";

Deserializers.lunaInitializationTime = "11/09/2026 19:54:21";

Deserializers.lunaDaysRunning = "2.0";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "0";

Deserializers.projectId = "d59363ae4aef7ba4097b44256f5c45af";

Deserializers.packagesInfo = "com.unity.inputsystem: 1.20.1\ncom.unity.timeline: 1.8.13";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1669";

Deserializers.runtimeAnalysisExcludedMethodsCount = "2832";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, particle-system, reflection, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2D-Project";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "df093e5a-fe37-4ecf-beed-c71b9b68ecde";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["Unity","Burst","BurstCompiler","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","VisualScripting","GraphReference","ResetStaticsOnLoad"],["UnityEngine","InputSystem","PlayerInput","InitializeGlobalPlayerState"],["UnityEngine","InputSystem","InputSystem","RuntimeInitialize"],["UnityEngine","InputSystem","InputActionState","InitializeGlobalActionState"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","VisualScripting","Dependencies","NCalc","Expression","ResetStaticsOnLoad"],["Unity","VisualScripting","Flow","ResetStaticsOnLoad"],["Unity","VisualScripting","ReferenceCollector","ResetStaticsOnLoad"],["Unity","VisualScripting","EventBus","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsMetaType","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsResult","ResetStaticsOnLoad"],["Unity","VisualScripting","ApplicationVariables","ResetStaticsOnLoad"],["Unity","VisualScripting","SavedVariables","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsSerializer","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsGlobalConfig","ResetStaticsOnLoad"],["Unity","VisualScripting","RuntimeCodebase","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","Internal","fsPortableReflection","ResetStaticsOnLoad"],["Unity","VisualScripting","EditorTimeBinding","ResetStaticsOnLoad"],["Unity","VisualScripting","UnityThread","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsAotCompilationManager","ResetStaticsOnLoad"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Unity","VisualScripting","GraphInstances","ResetStaticsOnLoad"],["Unity","VisualScripting","GlobalMessageListener","ResetSingletonOnLoad"],["Unity","VisualScripting","Ensure","ResetStaticsOnLoad"],["Unity","VisualScripting","Serialization","ResetStaticsOnLoad"],["Unity","VisualScripting","OptimizedReflection","ResetStaticsOnLoad"],["Unity","VisualScripting","Recursion","ResetStaticsOnLoad"],["Unity","VisualScripting","ProfilingUtility","ResetStaticsOnLoad"],["Unity","VisualScripting","MessageListener","ResetStaticsOnLoad"],["Unity","VisualScripting","CoroutineRunner","ResetSingletonOnLoad"],["Unity","VisualScripting","VariablesSaver","ResetSingletonOnLoad"],["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","EnhancedTouch","Touch","InitializeGlobalTouchState"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","Users","InputUser","InitializeGlobalUserState"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

