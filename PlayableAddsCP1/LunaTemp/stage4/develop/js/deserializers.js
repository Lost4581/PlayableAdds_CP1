var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i5610 = root || request.c( 'UnityEngine.JointSpring' )
  var i5611 = data
  i5610.spring = i5611[0]
  i5610.damper = i5611[1]
  i5610.targetPosition = i5611[2]
  return i5610
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i5612 = root || request.c( 'UnityEngine.JointMotor' )
  var i5613 = data
  i5612.m_TargetVelocity = i5613[0]
  i5612.m_Force = i5613[1]
  i5612.m_FreeSpin = i5613[2]
  return i5612
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i5614 = root || request.c( 'UnityEngine.JointLimits' )
  var i5615 = data
  i5614.m_Min = i5615[0]
  i5614.m_Max = i5615[1]
  i5614.m_Bounciness = i5615[2]
  i5614.m_BounceMinVelocity = i5615[3]
  i5614.m_ContactDistance = i5615[4]
  i5614.minBounce = i5615[5]
  i5614.maxBounce = i5615[6]
  return i5614
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i5616 = root || request.c( 'UnityEngine.JointDrive' )
  var i5617 = data
  i5616.m_PositionSpring = i5617[0]
  i5616.m_PositionDamper = i5617[1]
  i5616.m_MaximumForce = i5617[2]
  i5616.m_UseAcceleration = i5617[3]
  return i5616
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i5618 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i5619 = data
  i5618.m_Spring = i5619[0]
  i5618.m_Damper = i5619[1]
  return i5618
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i5620 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i5621 = data
  i5620.m_Limit = i5621[0]
  i5620.m_Bounciness = i5621[1]
  i5620.m_ContactDistance = i5621[2]
  return i5620
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i5622 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i5623 = data
  i5622.m_ExtremumSlip = i5623[0]
  i5622.m_ExtremumValue = i5623[1]
  i5622.m_AsymptoteSlip = i5623[2]
  i5622.m_AsymptoteValue = i5623[3]
  i5622.m_Stiffness = i5623[4]
  return i5622
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i5624 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i5625 = data
  i5624.m_LowerAngle = i5625[0]
  i5624.m_UpperAngle = i5625[1]
  return i5624
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i5626 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i5627 = data
  i5626.m_MotorSpeed = i5627[0]
  i5626.m_MaximumMotorTorque = i5627[1]
  return i5626
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i5628 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i5629 = data
  i5628.m_DampingRatio = i5629[0]
  i5628.m_Frequency = i5629[1]
  i5628.m_Angle = i5629[2]
  return i5628
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i5630 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i5631 = data
  i5630.m_LowerTranslation = i5631[0]
  i5630.m_UpperTranslation = i5631[1]
  return i5630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i5632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i5633 = data
  i5632.name = i5633[0]
  i5632.width = i5633[1]
  i5632.height = i5633[2]
  i5632.mipmapCount = i5633[3]
  i5632.anisoLevel = i5633[4]
  i5632.filterMode = i5633[5]
  i5632.hdr = !!i5633[6]
  i5632.format = i5633[7]
  i5632.wrapMode = i5633[8]
  i5632.alphaIsTransparency = !!i5633[9]
  i5632.alphaSource = i5633[10]
  i5632.graphicsFormat = i5633[11]
  i5632.sRGBTexture = !!i5633[12]
  i5632.desiredColorSpace = i5633[13]
  i5632.wrapU = i5633[14]
  i5632.wrapV = i5633[15]
  return i5632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i5634 = root || new pc.UnityMaterial()
  var i5635 = data
  i5634.name = i5635[0]
  request.r(i5635[1], i5635[2], 0, i5634, 'shader')
  i5634.renderQueue = i5635[3]
  i5634.enableInstancing = !!i5635[4]
  var i5637 = i5635[5]
  var i5636 = []
  for(var i = 0; i < i5637.length; i += 1) {
    i5636.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i5637[i + 0]) );
  }
  i5634.floatParameters = i5636
  var i5639 = i5635[6]
  var i5638 = []
  for(var i = 0; i < i5639.length; i += 1) {
    i5638.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i5639[i + 0]) );
  }
  i5634.colorParameters = i5638
  var i5641 = i5635[7]
  var i5640 = []
  for(var i = 0; i < i5641.length; i += 1) {
    i5640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i5641[i + 0]) );
  }
  i5634.vectorParameters = i5640
  var i5643 = i5635[8]
  var i5642 = []
  for(var i = 0; i < i5643.length; i += 1) {
    i5642.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i5643[i + 0]) );
  }
  i5634.textureParameters = i5642
  var i5645 = i5635[9]
  var i5644 = []
  for(var i = 0; i < i5645.length; i += 1) {
    i5644.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i5645[i + 0]) );
  }
  i5634.materialFlags = i5644
  return i5634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i5648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i5649 = data
  i5648.name = i5649[0]
  i5648.value = i5649[1]
  return i5648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i5652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i5653 = data
  i5652.name = i5653[0]
  i5652.value = new pc.Color(i5653[1], i5653[2], i5653[3], i5653[4])
  return i5652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i5656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i5657 = data
  i5656.name = i5657[0]
  i5656.value = new pc.Vec4( i5657[1], i5657[2], i5657[3], i5657[4] )
  return i5656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i5660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i5661 = data
  i5660.name = i5661[0]
  request.r(i5661[1], i5661[2], 0, i5660, 'value')
  return i5660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i5664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i5665 = data
  i5664.name = i5665[0]
  i5664.enabled = !!i5665[1]
  return i5664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i5666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i5667 = data
  i5666.name = i5667[0]
  i5666.index = i5667[1]
  i5666.startup = !!i5667[2]
  return i5666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i5668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i5669 = data
  i5668.aspect = i5669[0]
  i5668.orthographic = !!i5669[1]
  i5668.orthographicSize = i5669[2]
  i5668.backgroundColor = new pc.Color(i5669[3], i5669[4], i5669[5], i5669[6])
  i5668.nearClipPlane = i5669[7]
  i5668.farClipPlane = i5669[8]
  i5668.fieldOfView = i5669[9]
  i5668.depth = i5669[10]
  i5668.clearFlags = i5669[11]
  i5668.cullingMask = i5669[12]
  i5668.rect = i5669[13]
  request.r(i5669[14], i5669[15], 0, i5668, 'targetTexture')
  i5668.usePhysicalProperties = !!i5669[16]
  i5668.focalLength = i5669[17]
  i5668.sensorSize = new pc.Vec2( i5669[18], i5669[19] )
  i5668.lensShift = new pc.Vec2( i5669[20], i5669[21] )
  i5668.gateFit = i5669[22]
  i5668.commandBufferCount = i5669[23]
  i5668.cameraType = i5669[24]
  i5668.enabled = !!i5669[25]
  return i5668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i5670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i5671 = data
  i5670.name = i5671[0]
  i5670.tagId = i5671[1]
  i5670.enabled = !!i5671[2]
  i5670.isStatic = !!i5671[3]
  i5670.layer = i5671[4]
  return i5670
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i5672 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i5673 = data
  request.r(i5673[0], i5673[1], 0, i5672, 'm_FirstSelected')
  i5672.m_sendNavigationEvents = !!i5673[2]
  i5672.m_DragThreshold = i5673[3]
  return i5672
}

Deserializers["UnityEngine.InputSystem.UI.InputSystemUIInputModule"] = function (request, data, root) {
  var i5674 = root || request.c( 'UnityEngine.InputSystem.UI.InputSystemUIInputModule' )
  var i5675 = data
  i5674.m_MoveRepeatDelay = i5675[0]
  i5674.m_MoveRepeatRate = i5675[1]
  request.r(i5675[2], i5675[3], 0, i5674, 'm_XRTrackingOrigin')
  request.r(i5675[4], i5675[5], 0, i5674, 'm_ActionsAsset')
  request.r(i5675[6], i5675[7], 0, i5674, 'm_PointAction')
  request.r(i5675[8], i5675[9], 0, i5674, 'm_MoveAction')
  request.r(i5675[10], i5675[11], 0, i5674, 'm_SubmitAction')
  request.r(i5675[12], i5675[13], 0, i5674, 'm_CancelAction')
  request.r(i5675[14], i5675[15], 0, i5674, 'm_LeftClickAction')
  request.r(i5675[16], i5675[17], 0, i5674, 'm_MiddleClickAction')
  request.r(i5675[18], i5675[19], 0, i5674, 'm_RightClickAction')
  request.r(i5675[20], i5675[21], 0, i5674, 'm_ScrollWheelAction')
  request.r(i5675[22], i5675[23], 0, i5674, 'm_TrackedDevicePositionAction')
  request.r(i5675[24], i5675[25], 0, i5674, 'm_TrackedDeviceOrientationAction')
  i5674.m_DeselectOnBackgroundClick = !!i5675[26]
  i5674.m_PointerBehavior = i5675[27]
  i5674.m_CursorLockBehavior = i5675[28]
  i5674.m_ScrollDeltaPerTick = i5675[29]
  i5674.m_SendPointerHoverToParent = !!i5675[30]
  return i5674
}

Deserializers["GameManager"] = function (request, data, root) {
  var i5676 = root || request.c( 'GameManager' )
  var i5677 = data
  request.r(i5677[0], i5677[1], 0, i5676, 'IntroScreen')
  request.r(i5677[2], i5677[3], 0, i5676, 'WinScreen')
  request.r(i5677[4], i5677[5], 0, i5676, 'Target')
  i5676.clicksToWin = i5677[6]
  return i5676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i5678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i5679 = data
  i5678.pivot = new pc.Vec2( i5679[0], i5679[1] )
  i5678.anchorMin = new pc.Vec2( i5679[2], i5679[3] )
  i5678.anchorMax = new pc.Vec2( i5679[4], i5679[5] )
  i5678.sizeDelta = new pc.Vec2( i5679[6], i5679[7] )
  i5678.anchoredPosition3D = new pc.Vec3( i5679[8], i5679[9], i5679[10] )
  i5678.rotation = new pc.Quat(i5679[11], i5679[12], i5679[13], i5679[14])
  i5678.scale = new pc.Vec3( i5679[15], i5679[16], i5679[17] )
  return i5678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i5680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i5681 = data
  i5680.planeDistance = i5681[0]
  i5680.referencePixelsPerUnit = i5681[1]
  i5680.isFallbackOverlay = !!i5681[2]
  i5680.renderMode = i5681[3]
  i5680.renderOrder = i5681[4]
  i5680.sortingLayerName = i5681[5]
  i5680.sortingOrder = i5681[6]
  i5680.scaleFactor = i5681[7]
  request.r(i5681[8], i5681[9], 0, i5680, 'worldCamera')
  i5680.overrideSorting = !!i5681[10]
  i5680.pixelPerfect = !!i5681[11]
  i5680.targetDisplay = i5681[12]
  i5680.overridePixelPerfect = !!i5681[13]
  i5680.enabled = !!i5681[14]
  return i5680
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i5682 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i5683 = data
  i5682.m_UiScaleMode = i5683[0]
  i5682.m_ReferencePixelsPerUnit = i5683[1]
  i5682.m_ScaleFactor = i5683[2]
  i5682.m_ReferenceResolution = new pc.Vec2( i5683[3], i5683[4] )
  i5682.m_ScreenMatchMode = i5683[5]
  i5682.m_MatchWidthOrHeight = i5683[6]
  i5682.m_PhysicalUnit = i5683[7]
  i5682.m_FallbackScreenDPI = i5683[8]
  i5682.m_DefaultSpriteDPI = i5683[9]
  i5682.m_DynamicPixelsPerUnit = i5683[10]
  i5682.m_PresetInfoIsWorld = !!i5683[11]
  return i5682
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i5684 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i5685 = data
  i5684.m_IgnoreReversedGraphics = !!i5685[0]
  i5684.m_BlockingObjects = i5685[1]
  i5684.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i5685[2] )
  return i5684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i5686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i5687 = data
  i5686.cullTransparentMesh = !!i5687[0]
  return i5686
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i5688 = root || request.c( 'UnityEngine.UI.Image' )
  var i5689 = data
  request.r(i5689[0], i5689[1], 0, i5688, 'm_Sprite')
  i5688.m_Type = i5689[2]
  i5688.m_PreserveAspect = !!i5689[3]
  i5688.m_FillCenter = !!i5689[4]
  i5688.m_FillMethod = i5689[5]
  i5688.m_FillAmount = i5689[6]
  i5688.m_FillClockwise = !!i5689[7]
  i5688.m_FillOrigin = i5689[8]
  i5688.m_UseSpriteMesh = !!i5689[9]
  i5688.m_PixelsPerUnitMultiplier = i5689[10]
  request.r(i5689[11], i5689[12], 0, i5688, 'm_Material')
  i5688.m_Maskable = !!i5689[13]
  i5688.m_Color = new pc.Color(i5689[14], i5689[15], i5689[16], i5689[17])
  i5688.m_RaycastTarget = !!i5689[18]
  i5688.m_RaycastPadding = new pc.Vec4( i5689[19], i5689[20], i5689[21], i5689[22] )
  return i5688
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i5690 = root || request.c( 'UnityEngine.UI.Text' )
  var i5691 = data
  i5690.m_FontData = request.d('UnityEngine.UI.FontData', i5691[0], i5690.m_FontData)
  i5690.m_Text = i5691[1]
  request.r(i5691[2], i5691[3], 0, i5690, 'm_Material')
  i5690.m_Maskable = !!i5691[4]
  i5690.m_Color = new pc.Color(i5691[5], i5691[6], i5691[7], i5691[8])
  i5690.m_RaycastTarget = !!i5691[9]
  i5690.m_RaycastPadding = new pc.Vec4( i5691[10], i5691[11], i5691[12], i5691[13] )
  return i5690
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i5692 = root || request.c( 'UnityEngine.UI.FontData' )
  var i5693 = data
  request.r(i5693[0], i5693[1], 0, i5692, 'm_Font')
  i5692.m_FontSize = i5693[2]
  i5692.m_FontStyle = i5693[3]
  i5692.m_BestFit = !!i5693[4]
  i5692.m_MinSize = i5693[5]
  i5692.m_MaxSize = i5693[6]
  i5692.m_Alignment = i5693[7]
  i5692.m_AlignByGeometry = !!i5693[8]
  i5692.m_RichText = !!i5693[9]
  i5692.m_HorizontalOverflow = i5693[10]
  i5692.m_VerticalOverflow = i5693[11]
  i5692.m_LineSpacing = i5693[12]
  return i5692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i5694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i5695 = data
  i5694.color = new pc.Color(i5695[0], i5695[1], i5695[2], i5695[3])
  request.r(i5695[4], i5695[5], 0, i5694, 'sprite')
  i5694.flipX = !!i5695[6]
  i5694.flipY = !!i5695[7]
  i5694.drawMode = i5695[8]
  i5694.size = new pc.Vec2( i5695[9], i5695[10] )
  i5694.tileMode = i5695[11]
  i5694.adaptiveModeThreshold = i5695[12]
  i5694.maskInteraction = i5695[13]
  i5694.spriteSortPoint = i5695[14]
  i5694.enabled = !!i5695[15]
  request.r(i5695[16], i5695[17], 0, i5694, 'sharedMaterial')
  var i5697 = i5695[18]
  var i5696 = []
  for(var i = 0; i < i5697.length; i += 2) {
  request.r(i5697[i + 0], i5697[i + 1], 2, i5696, '')
  }
  i5694.sharedMaterials = i5696
  i5694.receiveShadows = !!i5695[19]
  i5694.shadowCastingMode = i5695[20]
  i5694.sortingLayerID = i5695[21]
  i5694.sortingOrder = i5695[22]
  i5694.lightmapIndex = i5695[23]
  i5694.lightmapSceneIndex = i5695[24]
  i5694.lightmapScaleOffset = new pc.Vec4( i5695[25], i5695[26], i5695[27], i5695[28] )
  i5694.lightProbeUsage = i5695[29]
  i5694.reflectionProbeUsage = i5695[30]
  return i5694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i5700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i5701 = data
  i5700.radius = i5701[0]
  i5700.enabled = !!i5701[1]
  i5700.isTrigger = !!i5701[2]
  i5700.usedByEffector = !!i5701[3]
  i5700.density = i5701[4]
  i5700.offset = new pc.Vec2( i5701[5], i5701[6] )
  request.r(i5701[7], i5701[8], 0, i5700, 'material')
  return i5700
}

Deserializers["ClickTarget"] = function (request, data, root) {
  var i5702 = root || request.c( 'ClickTarget' )
  var i5703 = data
  return i5702
}

Deserializers["PulseTarget"] = function (request, data, root) {
  var i5704 = root || request.c( 'PulseTarget' )
  var i5705 = data
  i5704.amount = i5705[0]
  i5704.speed = i5705[1]
  return i5704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i5706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i5707 = data
  i5706.ambientIntensity = i5707[0]
  i5706.reflectionIntensity = i5707[1]
  i5706.ambientMode = i5707[2]
  i5706.ambientLight = new pc.Color(i5707[3], i5707[4], i5707[5], i5707[6])
  i5706.ambientSkyColor = new pc.Color(i5707[7], i5707[8], i5707[9], i5707[10])
  i5706.ambientGroundColor = new pc.Color(i5707[11], i5707[12], i5707[13], i5707[14])
  i5706.ambientEquatorColor = new pc.Color(i5707[15], i5707[16], i5707[17], i5707[18])
  i5706.fogColor = new pc.Color(i5707[19], i5707[20], i5707[21], i5707[22])
  i5706.fogEndDistance = i5707[23]
  i5706.fogStartDistance = i5707[24]
  i5706.fogDensity = i5707[25]
  i5706.fog = !!i5707[26]
  request.r(i5707[27], i5707[28], 0, i5706, 'skybox')
  i5706.fogMode = i5707[29]
  var i5709 = i5707[30]
  var i5708 = []
  for(var i = 0; i < i5709.length; i += 1) {
    i5708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i5709[i + 0]) );
  }
  i5706.lightmaps = i5708
  i5706.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i5707[31], i5706.lightProbes)
  i5706.lightmapsMode = i5707[32]
  i5706.mixedBakeMode = i5707[33]
  i5706.environmentLightingMode = i5707[34]
  i5706.ambientProbe = new pc.SphericalHarmonicsL2(i5707[35])
  request.r(i5707[36], i5707[37], 0, i5706, 'customReflection')
  request.r(i5707[38], i5707[39], 0, i5706, 'defaultReflection')
  i5706.defaultReflectionMode = i5707[40]
  i5706.defaultReflectionResolution = i5707[41]
  i5706.sunLightObjectId = i5707[42]
  i5706.pixelLightCount = i5707[43]
  i5706.defaultReflectionHDR = !!i5707[44]
  i5706.hasLightDataAsset = !!i5707[45]
  i5706.hasManualGenerate = !!i5707[46]
  return i5706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i5712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i5713 = data
  request.r(i5713[0], i5713[1], 0, i5712, 'lightmapColor')
  request.r(i5713[2], i5713[3], 0, i5712, 'lightmapDirection')
  request.r(i5713[4], i5713[5], 0, i5712, 'shadowMask')
  return i5712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i5714 = root || new UnityEngine.LightProbes()
  var i5715 = data
  return i5714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i5722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i5723 = data
  var i5725 = i5723[0]
  var i5724 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i5725.length; i += 1) {
    i5724.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i5725[i + 0]));
  }
  i5722.ShaderCompilationErrors = i5724
  i5722.name = i5723[1]
  i5722.guid = i5723[2]
  var i5727 = i5723[3]
  var i5726 = []
  for(var i = 0; i < i5727.length; i += 1) {
    i5726.push( i5727[i + 0] );
  }
  i5722.shaderDefinedKeywords = i5726
  var i5729 = i5723[4]
  var i5728 = []
  for(var i = 0; i < i5729.length; i += 1) {
    i5728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i5729[i + 0]) );
  }
  i5722.passes = i5728
  var i5731 = i5723[5]
  var i5730 = []
  for(var i = 0; i < i5731.length; i += 1) {
    i5730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i5731[i + 0]) );
  }
  i5722.usePasses = i5730
  var i5733 = i5723[6]
  var i5732 = []
  for(var i = 0; i < i5733.length; i += 1) {
    i5732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i5733[i + 0]) );
  }
  i5722.defaultParameterValues = i5732
  request.r(i5723[7], i5723[8], 0, i5722, 'unityFallbackShader')
  i5722.readDepth = !!i5723[9]
  i5722.hasDepthOnlyPass = !!i5723[10]
  i5722.isCreatedByShaderGraph = !!i5723[11]
  i5722.disableBatching = !!i5723[12]
  i5722.compiled = !!i5723[13]
  return i5722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i5736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i5737 = data
  i5736.shaderName = i5737[0]
  i5736.errorMessage = i5737[1]
  return i5736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i5742 = root || new pc.UnityShaderPass()
  var i5743 = data
  i5742.id = i5743[0]
  i5742.subShaderIndex = i5743[1]
  i5742.name = i5743[2]
  i5742.passType = i5743[3]
  i5742.grabPassTextureName = i5743[4]
  i5742.usePass = !!i5743[5]
  i5742.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5743[6], i5742.zTest)
  i5742.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5743[7], i5742.zWrite)
  i5742.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5743[8], i5742.culling)
  i5742.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5743[9], i5742.blending)
  i5742.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5743[10], i5742.alphaBlending)
  i5742.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5743[11], i5742.colorWriteMask)
  i5742.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5743[12], i5742.offsetUnits)
  i5742.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5743[13], i5742.offsetFactor)
  i5742.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5743[14], i5742.stencilRef)
  i5742.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5743[15], i5742.stencilReadMask)
  i5742.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5743[16], i5742.stencilWriteMask)
  i5742.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5743[17], i5742.stencilOp)
  i5742.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5743[18], i5742.stencilOpFront)
  i5742.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5743[19], i5742.stencilOpBack)
  var i5745 = i5743[20]
  var i5744 = []
  for(var i = 0; i < i5745.length; i += 1) {
    i5744.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i5745[i + 0]) );
  }
  i5742.tags = i5744
  var i5747 = i5743[21]
  var i5746 = []
  for(var i = 0; i < i5747.length; i += 1) {
    i5746.push( i5747[i + 0] );
  }
  i5742.passDefinedKeywords = i5746
  var i5749 = i5743[22]
  var i5748 = []
  for(var i = 0; i < i5749.length; i += 1) {
    i5748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i5749[i + 0]) );
  }
  i5742.passDefinedKeywordGroups = i5748
  var i5751 = i5743[23]
  var i5750 = []
  for(var i = 0; i < i5751.length; i += 1) {
    i5750.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5751[i + 0]) );
  }
  i5742.variants = i5750
  var i5753 = i5743[24]
  var i5752 = []
  for(var i = 0; i < i5753.length; i += 1) {
    i5752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5753[i + 0]) );
  }
  i5742.excludedVariants = i5752
  i5742.hasDepthReader = !!i5743[25]
  return i5742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i5754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i5755 = data
  i5754.val = i5755[0]
  i5754.name = i5755[1]
  return i5754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i5756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i5757 = data
  i5756.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5757[0], i5756.src)
  i5756.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5757[1], i5756.dst)
  i5756.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5757[2], i5756.op)
  return i5756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i5758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i5759 = data
  i5758.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5759[0], i5758.pass)
  i5758.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5759[1], i5758.fail)
  i5758.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5759[2], i5758.zFail)
  i5758.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5759[3], i5758.comp)
  return i5758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i5762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i5763 = data
  i5762.name = i5763[0]
  i5762.value = i5763[1]
  return i5762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i5766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i5767 = data
  var i5769 = i5767[0]
  var i5768 = []
  for(var i = 0; i < i5769.length; i += 1) {
    i5768.push( i5769[i + 0] );
  }
  i5766.keywords = i5768
  i5766.hasDiscard = !!i5767[1]
  return i5766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i5772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i5773 = data
  i5772.passId = i5773[0]
  i5772.subShaderIndex = i5773[1]
  var i5775 = i5773[2]
  var i5774 = []
  for(var i = 0; i < i5775.length; i += 1) {
    i5774.push( i5775[i + 0] );
  }
  i5772.keywords = i5774
  i5772.vertexProgram = i5773[3]
  i5772.fragmentProgram = i5773[4]
  i5772.exportedForWebGl2 = !!i5773[5]
  i5772.readDepth = !!i5773[6]
  return i5772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i5778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i5779 = data
  request.r(i5779[0], i5779[1], 0, i5778, 'shader')
  i5778.pass = i5779[2]
  return i5778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i5782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i5783 = data
  i5782.name = i5783[0]
  i5782.type = i5783[1]
  i5782.value = new pc.Vec4( i5783[2], i5783[3], i5783[4], i5783[5] )
  i5782.textureValue = i5783[6]
  i5782.shaderPropertyFlag = i5783[7]
  return i5782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i5784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i5785 = data
  i5784.name = i5785[0]
  request.r(i5785[1], i5785[2], 0, i5784, 'texture')
  i5784.aabb = i5785[3]
  i5784.vertices = i5785[4]
  i5784.triangles = i5785[5]
  i5784.textureRect = UnityEngine.Rect.MinMaxRect(i5785[6], i5785[7], i5785[8], i5785[9])
  i5784.packedRect = UnityEngine.Rect.MinMaxRect(i5785[10], i5785[11], i5785[12], i5785[13])
  i5784.border = new pc.Vec4( i5785[14], i5785[15], i5785[16], i5785[17] )
  i5784.transparency = i5785[18]
  i5784.bounds = i5785[19]
  i5784.pixelsPerUnit = i5785[20]
  i5784.textureWidth = i5785[21]
  i5784.textureHeight = i5785[22]
  i5784.nativeSize = new pc.Vec2( i5785[23], i5785[24] )
  i5784.pivot = new pc.Vec2( i5785[25], i5785[26] )
  i5784.textureRectOffset = new pc.Vec2( i5785[27], i5785[28] )
  return i5784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i5786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i5787 = data
  i5786.name = i5787[0]
  i5786.ascent = i5787[1]
  i5786.originalLineHeight = i5787[2]
  i5786.fontSize = i5787[3]
  var i5789 = i5787[4]
  var i5788 = []
  for(var i = 0; i < i5789.length; i += 1) {
    i5788.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i5789[i + 0]) );
  }
  i5786.characterInfo = i5788
  request.r(i5787[5], i5787[6], 0, i5786, 'texture')
  i5786.originalFontSize = i5787[7]
  return i5786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i5792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i5793 = data
  i5792.index = i5793[0]
  i5792.advance = i5793[1]
  i5792.bearing = i5793[2]
  i5792.glyphWidth = i5793[3]
  i5792.glyphHeight = i5793[4]
  i5792.minX = i5793[5]
  i5792.maxX = i5793[6]
  i5792.minY = i5793[7]
  i5792.maxY = i5793[8]
  i5792.uvBottomLeftX = i5793[9]
  i5792.uvBottomLeftY = i5793[10]
  i5792.uvBottomRightX = i5793[11]
  i5792.uvBottomRightY = i5793[12]
  i5792.uvTopLeftX = i5793[13]
  i5792.uvTopLeftY = i5793[14]
  i5792.uvTopRightX = i5793[15]
  i5792.uvTopRightY = i5793[16]
  return i5792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i5794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i5795 = data
  i5794.name = i5795[0]
  i5794.bytes64 = i5795[1]
  i5794.data = i5795[2]
  return i5794
}

Deserializers["UnityEngine.InputSystem.InputActionAsset"] = function (request, data, root) {
  var i5796 = root || request.c( 'UnityEngine.InputSystem.InputActionAsset' )
  var i5797 = data
  var i5799 = i5797[0]
  var i5798 = []
  for(var i = 0; i < i5799.length; i += 1) {
    i5798.push( request.d('UnityEngine.InputSystem.InputActionMap', i5799[i + 0]) );
  }
  i5796.m_ActionMaps = i5798
  var i5801 = i5797[1]
  var i5800 = []
  for(var i = 0; i < i5801.length; i += 1) {
    i5800.push( request.d('UnityEngine.InputSystem.InputControlScheme', i5801[i + 0]) );
  }
  i5796.m_ControlSchemes = i5800
  i5796.m_IsProjectWide = !!i5797[2]
  return i5796
}

Deserializers["UnityEngine.InputSystem.InputActionMap"] = function (request, data, root) {
  var i5804 = root || request.c( 'UnityEngine.InputSystem.InputActionMap' )
  var i5805 = data
  i5804.m_Name = i5805[0]
  i5804.m_Id = i5805[1]
  request.r(i5805[2], i5805[3], 0, i5804, 'm_Asset')
  var i5807 = i5805[4]
  var i5806 = []
  for(var i = 0; i < i5807.length; i += 1) {
    i5806.push( request.d('UnityEngine.InputSystem.InputAction', i5807[i + 0]) );
  }
  i5804.m_Actions = i5806
  var i5809 = i5805[5]
  var i5808 = []
  for(var i = 0; i < i5809.length; i += 1) {
    i5808.push( request.d('UnityEngine.InputSystem.InputBinding', i5809[i + 0]) );
  }
  i5804.m_Bindings = i5808
  return i5804
}

Deserializers["UnityEngine.InputSystem.InputAction"] = function (request, data, root) {
  var i5812 = root || request.c( 'UnityEngine.InputSystem.InputAction' )
  var i5813 = data
  i5812.m_Name = i5813[0]
  i5812.m_Type = i5813[1]
  i5812.m_ExpectedControlType = i5813[2]
  i5812.m_Id = i5813[3]
  i5812.m_Processors = i5813[4]
  i5812.m_Interactions = i5813[5]
  var i5815 = i5813[6]
  var i5814 = []
  for(var i = 0; i < i5815.length; i += 1) {
    i5814.push( request.d('UnityEngine.InputSystem.InputBinding', i5815[i + 0]) );
  }
  i5812.m_SingletonActionBindings = i5814
  i5812.m_Flags = i5813[7]
  i5812.m_Priority = i5813[8]
  return i5812
}

Deserializers["UnityEngine.InputSystem.InputBinding"] = function (request, data, root) {
  var i5818 = root || request.c( 'UnityEngine.InputSystem.InputBinding' )
  var i5819 = data
  i5818.m_Name = i5819[0]
  i5818.m_Id = i5819[1]
  i5818.m_Path = i5819[2]
  i5818.m_Interactions = i5819[3]
  i5818.m_Processors = i5819[4]
  i5818.m_Groups = i5819[5]
  i5818.m_Action = i5819[6]
  i5818.m_Flags = i5819[7]
  return i5818
}

Deserializers["UnityEngine.InputSystem.InputControlScheme"] = function (request, data, root) {
  var i5822 = root || request.c( 'UnityEngine.InputSystem.InputControlScheme' )
  var i5823 = data
  i5822.m_Name = i5823[0]
  i5822.m_BindingGroup = i5823[1]
  var i5825 = i5823[2]
  var i5824 = []
  for(var i = 0; i < i5825.length; i += 1) {
    i5824.push( request.d('UnityEngine.InputSystem.InputControlScheme+DeviceRequirement', i5825[i + 0]) );
  }
  i5822.m_DeviceRequirements = i5824
  return i5822
}

Deserializers["UnityEngine.InputSystem.InputControlScheme+DeviceRequirement"] = function (request, data, root) {
  var i5828 = root || request.c( 'UnityEngine.InputSystem.InputControlScheme+DeviceRequirement' )
  var i5829 = data
  i5828.m_ControlPath = i5829[0]
  i5828.m_Flags = i5829[1]
  return i5828
}

Deserializers["UnityEngine.InputSystem.InputActionReference"] = function (request, data, root) {
  var i5830 = root || request.c( 'UnityEngine.InputSystem.InputActionReference' )
  var i5831 = data
  request.r(i5831[0], i5831[1], 0, i5830, 'm_Asset')
  i5830.m_ActionId = i5831[2]
  return i5830
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i5832 = root || request.c( 'TMPro.TMP_Settings' )
  var i5833 = data
  i5832.assetVersion = i5833[0]
  i5832.m_TextWrappingMode = i5833[1]
  i5832.m_enableKerning = !!i5833[2]
  var i5835 = i5833[3]
  var i5834 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i5835.length; i += 1) {
    i5834.add(i5835[i + 0]);
  }
  i5832.m_ActiveFontFeatures = i5834
  i5832.m_enableExtraPadding = !!i5833[4]
  i5832.m_enableTintAllSprites = !!i5833[5]
  i5832.m_enableParseEscapeCharacters = !!i5833[6]
  i5832.m_EnableRaycastTarget = !!i5833[7]
  i5832.m_GetFontFeaturesAtRuntime = !!i5833[8]
  i5832.m_missingGlyphCharacter = i5833[9]
  i5832.m_ClearDynamicDataOnBuild = !!i5833[10]
  i5832.m_warningsDisabled = !!i5833[11]
  request.r(i5833[12], i5833[13], 0, i5832, 'm_defaultFontAsset')
  i5832.m_defaultFontAssetPath = i5833[14]
  i5832.m_defaultFontSize = i5833[15]
  i5832.m_defaultAutoSizeMinRatio = i5833[16]
  i5832.m_defaultAutoSizeMaxRatio = i5833[17]
  i5832.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i5833[18], i5833[19] )
  i5832.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i5833[20], i5833[21] )
  i5832.m_autoSizeTextContainer = !!i5833[22]
  i5832.m_IsTextObjectScaleStatic = !!i5833[23]
  var i5837 = i5833[24]
  var i5836 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5837.length; i += 2) {
  request.r(i5837[i + 0], i5837[i + 1], 1, i5836, '')
  }
  i5832.m_fallbackFontAssets = i5836
  i5832.m_matchMaterialPreset = !!i5833[25]
  i5832.m_HideSubTextObjects = !!i5833[26]
  request.r(i5833[27], i5833[28], 0, i5832, 'm_defaultSpriteAsset')
  i5832.m_defaultSpriteAssetPath = i5833[29]
  i5832.m_enableEmojiSupport = !!i5833[30]
  i5832.m_MissingCharacterSpriteUnicode = i5833[31]
  var i5839 = i5833[32]
  var i5838 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i5839.length; i += 2) {
  request.r(i5839[i + 0], i5839[i + 1], 1, i5838, '')
  }
  i5832.m_EmojiFallbackTextAssets = i5838
  i5832.m_defaultColorGradientPresetsPath = i5833[33]
  request.r(i5833[34], i5833[35], 0, i5832, 'm_defaultStyleSheet')
  i5832.m_StyleSheetsResourcePath = i5833[36]
  request.r(i5833[37], i5833[38], 0, i5832, 'm_leadingCharacters')
  request.r(i5833[39], i5833[40], 0, i5832, 'm_followingCharacters')
  i5832.m_UseModernHangulLineBreakingRules = !!i5833[41]
  return i5832
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i5846 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i5847 = data
  i5846.normalStyle = i5847[0]
  i5846.normalSpacingOffset = i5847[1]
  i5846.boldStyle = i5847[2]
  i5846.boldSpacing = i5847[3]
  i5846.italicStyle = i5847[4]
  i5846.tabSize = i5847[5]
  request.r(i5847[6], i5847[7], 0, i5846, 'atlas')
  i5846.m_SourceFontFileGUID = i5847[8]
  i5846.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i5847[9], i5846.m_CreationSettings)
  request.r(i5847[10], i5847[11], 0, i5846, 'm_SourceFontFile')
  i5846.m_SourceFontFilePath = i5847[12]
  i5846.m_AtlasPopulationMode = i5847[13]
  i5846.InternalDynamicOS = !!i5847[14]
  var i5849 = i5847[15]
  var i5848 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i5849.length; i += 1) {
    i5848.add(request.d('UnityEngine.TextCore.Glyph', i5849[i + 0]));
  }
  i5846.m_GlyphTable = i5848
  var i5851 = i5847[16]
  var i5850 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i5851.length; i += 1) {
    i5850.add(request.d('TMPro.TMP_Character', i5851[i + 0]));
  }
  i5846.m_CharacterTable = i5850
  var i5853 = i5847[17]
  var i5852 = []
  for(var i = 0; i < i5853.length; i += 2) {
  request.r(i5853[i + 0], i5853[i + 1], 2, i5852, '')
  }
  i5846.m_AtlasTextures = i5852
  i5846.m_AtlasTextureIndex = i5847[18]
  i5846.m_IsMultiAtlasTexturesEnabled = !!i5847[19]
  i5846.m_GetFontFeatures = !!i5847[20]
  i5846.m_ClearDynamicDataOnBuild = !!i5847[21]
  i5846.m_AtlasWidth = i5847[22]
  i5846.m_AtlasHeight = i5847[23]
  i5846.m_AtlasPadding = i5847[24]
  i5846.m_AtlasRenderMode = i5847[25]
  var i5855 = i5847[26]
  var i5854 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i5855.length; i += 1) {
    i5854.add(request.d('UnityEngine.TextCore.GlyphRect', i5855[i + 0]));
  }
  i5846.m_UsedGlyphRects = i5854
  var i5857 = i5847[27]
  var i5856 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i5857.length; i += 1) {
    i5856.add(request.d('UnityEngine.TextCore.GlyphRect', i5857[i + 0]));
  }
  i5846.m_FreeGlyphRects = i5856
  i5846.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i5847[28], i5846.m_FontFeatureTable)
  i5846.m_ShouldReimportFontFeatures = !!i5847[29]
  var i5859 = i5847[30]
  var i5858 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5859.length; i += 2) {
  request.r(i5859[i + 0], i5859[i + 1], 1, i5858, '')
  }
  i5846.m_FallbackFontAssetTable = i5858
  var i5861 = i5847[31]
  var i5860 = []
  for(var i = 0; i < i5861.length; i += 1) {
    i5860.push( request.d('TMPro.TMP_FontWeightPair', i5861[i + 0]) );
  }
  i5846.m_FontWeightTable = i5860
  var i5863 = i5847[32]
  var i5862 = []
  for(var i = 0; i < i5863.length; i += 1) {
    i5862.push( request.d('TMPro.TMP_FontWeightPair', i5863[i + 0]) );
  }
  i5846.fontWeights = i5862
  i5846.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i5847[33], i5846.m_fontInfo)
  var i5865 = i5847[34]
  var i5864 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i5865.length; i += 1) {
    i5864.add(request.d('TMPro.TMP_Glyph', i5865[i + 0]));
  }
  i5846.m_glyphInfoList = i5864
  i5846.m_KerningTable = request.d('TMPro.KerningTable', i5847[35], i5846.m_KerningTable)
  var i5867 = i5847[36]
  var i5866 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5867.length; i += 2) {
  request.r(i5867[i + 0], i5867[i + 1], 1, i5866, '')
  }
  i5846.fallbackFontAssets = i5866
  i5846.m_Version = i5847[37]
  i5846.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i5847[38], i5846.m_FaceInfo)
  request.r(i5847[39], i5847[40], 0, i5846, 'm_Material')
  return i5846
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i5868 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i5869 = data
  i5868.sourceFontFileName = i5869[0]
  i5868.sourceFontFileGUID = i5869[1]
  i5868.faceIndex = i5869[2]
  i5868.pointSizeSamplingMode = i5869[3]
  i5868.pointSize = i5869[4]
  i5868.padding = i5869[5]
  i5868.paddingMode = i5869[6]
  i5868.packingMode = i5869[7]
  i5868.atlasWidth = i5869[8]
  i5868.atlasHeight = i5869[9]
  i5868.characterSetSelectionMode = i5869[10]
  i5868.characterSequence = i5869[11]
  i5868.referencedFontAssetGUID = i5869[12]
  i5868.referencedTextAssetGUID = i5869[13]
  i5868.fontStyle = i5869[14]
  i5868.fontStyleModifier = i5869[15]
  i5868.renderMode = i5869[16]
  i5868.includeFontFeatures = !!i5869[17]
  return i5868
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i5872 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i5873 = data
  i5872.m_Index = i5873[0]
  i5872.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i5873[1], i5872.m_Metrics)
  i5872.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i5873[2], i5872.m_GlyphRect)
  i5872.m_Scale = i5873[3]
  i5872.m_AtlasIndex = i5873[4]
  i5872.m_ClassDefinitionType = i5873[5]
  return i5872
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i5874 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i5875 = data
  i5874.m_Width = i5875[0]
  i5874.m_Height = i5875[1]
  i5874.m_HorizontalBearingX = i5875[2]
  i5874.m_HorizontalBearingY = i5875[3]
  i5874.m_HorizontalAdvance = i5875[4]
  return i5874
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i5876 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i5877 = data
  i5876.m_X = i5877[0]
  i5876.m_Y = i5877[1]
  i5876.m_Width = i5877[2]
  i5876.m_Height = i5877[3]
  return i5876
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i5880 = root || request.c( 'TMPro.TMP_Character' )
  var i5881 = data
  i5880.m_ElementType = i5881[0]
  i5880.m_Unicode = i5881[1]
  i5880.m_GlyphIndex = i5881[2]
  i5880.m_Scale = i5881[3]
  return i5880
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i5886 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i5887 = data
  var i5889 = i5887[0]
  var i5888 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i5889.length; i += 1) {
    i5888.add(request.d('TMPro.MultipleSubstitutionRecord', i5889[i + 0]));
  }
  i5886.m_MultipleSubstitutionRecords = i5888
  var i5891 = i5887[1]
  var i5890 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i5891.length; i += 1) {
    i5890.add(request.d('TMPro.LigatureSubstitutionRecord', i5891[i + 0]));
  }
  i5886.m_LigatureSubstitutionRecords = i5890
  var i5893 = i5887[2]
  var i5892 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i5893.length; i += 1) {
    i5892.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i5893[i + 0]));
  }
  i5886.m_GlyphPairAdjustmentRecords = i5892
  var i5895 = i5887[3]
  var i5894 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i5895.length; i += 1) {
    i5894.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i5895[i + 0]));
  }
  i5886.m_MarkToBaseAdjustmentRecords = i5894
  var i5897 = i5887[4]
  var i5896 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i5897.length; i += 1) {
    i5896.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i5897[i + 0]));
  }
  i5886.m_MarkToMarkAdjustmentRecords = i5896
  return i5886
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i5900 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i5901 = data
  i5900.m_TargetGlyphID = i5901[0]
  i5900.m_SubstituteGlyphIDs = i5901[1]
  return i5900
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i5904 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i5905 = data
  i5904.m_ComponentGlyphIDs = i5905[0]
  i5904.m_LigatureGlyphID = i5905[1]
  return i5904
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i5908 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i5909 = data
  i5908.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i5909[0], i5908.m_FirstAdjustmentRecord)
  i5908.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i5909[1], i5908.m_SecondAdjustmentRecord)
  i5908.m_FeatureLookupFlags = i5909[2]
  return i5908
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i5910 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i5911 = data
  i5910.m_GlyphIndex = i5911[0]
  i5910.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i5911[1], i5910.m_GlyphValueRecord)
  return i5910
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i5912 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i5913 = data
  i5912.m_XPlacement = i5913[0]
  i5912.m_YPlacement = i5913[1]
  i5912.m_XAdvance = i5913[2]
  i5912.m_YAdvance = i5913[3]
  return i5912
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i5916 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i5917 = data
  i5916.m_BaseGlyphID = i5917[0]
  i5916.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i5917[1], i5916.m_BaseGlyphAnchorPoint)
  i5916.m_MarkGlyphID = i5917[2]
  i5916.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i5917[3], i5916.m_MarkPositionAdjustment)
  return i5916
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i5920 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i5921 = data
  i5920.m_BaseMarkGlyphID = i5921[0]
  i5920.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i5921[1], i5920.m_BaseMarkGlyphAnchorPoint)
  i5920.m_CombiningMarkGlyphID = i5921[2]
  i5920.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i5921[3], i5920.m_CombiningMarkPositionAdjustment)
  return i5920
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i5924 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i5925 = data
  request.r(i5925[0], i5925[1], 0, i5924, 'regularTypeface')
  request.r(i5925[2], i5925[3], 0, i5924, 'italicTypeface')
  return i5924
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i5926 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i5927 = data
  i5926.Name = i5927[0]
  i5926.PointSize = i5927[1]
  i5926.Scale = i5927[2]
  i5926.CharacterCount = i5927[3]
  i5926.LineHeight = i5927[4]
  i5926.Baseline = i5927[5]
  i5926.Ascender = i5927[6]
  i5926.CapHeight = i5927[7]
  i5926.Descender = i5927[8]
  i5926.CenterLine = i5927[9]
  i5926.SuperscriptOffset = i5927[10]
  i5926.SubscriptOffset = i5927[11]
  i5926.SubSize = i5927[12]
  i5926.Underline = i5927[13]
  i5926.UnderlineThickness = i5927[14]
  i5926.strikethrough = i5927[15]
  i5926.strikethroughThickness = i5927[16]
  i5926.TabWidth = i5927[17]
  i5926.Padding = i5927[18]
  i5926.AtlasWidth = i5927[19]
  i5926.AtlasHeight = i5927[20]
  return i5926
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i5930 = root || request.c( 'TMPro.TMP_Glyph' )
  var i5931 = data
  i5930.id = i5931[0]
  i5930.x = i5931[1]
  i5930.y = i5931[2]
  i5930.width = i5931[3]
  i5930.height = i5931[4]
  i5930.xOffset = i5931[5]
  i5930.yOffset = i5931[6]
  i5930.xAdvance = i5931[7]
  i5930.scale = i5931[8]
  return i5930
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i5932 = root || request.c( 'TMPro.KerningTable' )
  var i5933 = data
  var i5935 = i5933[0]
  var i5934 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i5935.length; i += 1) {
    i5934.add(request.d('TMPro.KerningPair', i5935[i + 0]));
  }
  i5932.kerningPairs = i5934
  return i5932
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i5938 = root || request.c( 'TMPro.KerningPair' )
  var i5939 = data
  i5938.xOffset = i5939[0]
  i5938.m_FirstGlyph = i5939[1]
  i5938.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i5939[2], i5938.m_FirstGlyphAdjustments)
  i5938.m_SecondGlyph = i5939[3]
  i5938.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i5939[4], i5938.m_SecondGlyphAdjustments)
  i5938.m_IgnoreSpacingAdjustments = !!i5939[5]
  return i5938
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i5940 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i5941 = data
  i5940.m_FaceIndex = i5941[0]
  i5940.m_FamilyName = i5941[1]
  i5940.m_StyleName = i5941[2]
  i5940.m_PointSize = i5941[3]
  i5940.m_Scale = i5941[4]
  i5940.m_UnitsPerEM = i5941[5]
  i5940.m_LineHeight = i5941[6]
  i5940.m_AscentLine = i5941[7]
  i5940.m_CapLine = i5941[8]
  i5940.m_MeanLine = i5941[9]
  i5940.m_Baseline = i5941[10]
  i5940.m_DescentLine = i5941[11]
  i5940.m_SuperscriptOffset = i5941[12]
  i5940.m_SuperscriptSize = i5941[13]
  i5940.m_SubscriptOffset = i5941[14]
  i5940.m_SubscriptSize = i5941[15]
  i5940.m_UnderlineOffset = i5941[16]
  i5940.m_UnderlineThickness = i5941[17]
  i5940.m_StrikethroughOffset = i5941[18]
  i5940.m_StrikethroughThickness = i5941[19]
  i5940.m_TabWidth = i5941[20]
  return i5940
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i5942 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i5943 = data
  request.r(i5943[0], i5943[1], 0, i5942, 'spriteSheet')
  var i5945 = i5943[2]
  var i5944 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i5945.length; i += 1) {
    i5944.add(request.d('TMPro.TMP_Sprite', i5945[i + 0]));
  }
  i5942.spriteInfoList = i5944
  var i5947 = i5943[3]
  var i5946 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i5947.length; i += 2) {
  request.r(i5947[i + 0], i5947[i + 1], 1, i5946, '')
  }
  i5942.fallbackSpriteAssets = i5946
  var i5949 = i5943[4]
  var i5948 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i5949.length; i += 1) {
    i5948.add(request.d('TMPro.TMP_SpriteCharacter', i5949[i + 0]));
  }
  i5942.m_SpriteCharacterTable = i5948
  var i5951 = i5943[5]
  var i5950 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i5951.length; i += 1) {
    i5950.add(request.d('TMPro.TMP_SpriteGlyph', i5951[i + 0]));
  }
  i5942.m_GlyphTable = i5950
  i5942.m_Version = i5943[6]
  i5942.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i5943[7], i5942.m_FaceInfo)
  request.r(i5943[8], i5943[9], 0, i5942, 'm_Material')
  return i5942
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i5954 = root || request.c( 'TMPro.TMP_Sprite' )
  var i5955 = data
  i5954.name = i5955[0]
  i5954.hashCode = i5955[1]
  i5954.unicode = i5955[2]
  i5954.pivot = new pc.Vec2( i5955[3], i5955[4] )
  request.r(i5955[5], i5955[6], 0, i5954, 'sprite')
  i5954.id = i5955[7]
  i5954.x = i5955[8]
  i5954.y = i5955[9]
  i5954.width = i5955[10]
  i5954.height = i5955[11]
  i5954.xOffset = i5955[12]
  i5954.yOffset = i5955[13]
  i5954.xAdvance = i5955[14]
  i5954.scale = i5955[15]
  return i5954
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i5960 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i5961 = data
  i5960.m_Name = i5961[0]
  i5960.m_ElementType = i5961[1]
  i5960.m_Unicode = i5961[2]
  i5960.m_GlyphIndex = i5961[3]
  i5960.m_Scale = i5961[4]
  return i5960
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i5964 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i5965 = data
  request.r(i5965[0], i5965[1], 0, i5964, 'sprite')
  i5964.m_Index = i5965[2]
  i5964.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i5965[3], i5964.m_Metrics)
  i5964.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i5965[4], i5964.m_GlyphRect)
  i5964.m_Scale = i5965[5]
  i5964.m_AtlasIndex = i5965[6]
  i5964.m_ClassDefinitionType = i5965[7]
  return i5964
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i5966 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i5967 = data
  var i5969 = i5967[0]
  var i5968 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i5969.length; i += 1) {
    i5968.add(request.d('TMPro.TMP_Style', i5969[i + 0]));
  }
  i5966.m_StyleList = i5968
  return i5966
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i5972 = root || request.c( 'TMPro.TMP_Style' )
  var i5973 = data
  i5972.m_Name = i5973[0]
  i5972.m_HashCode = i5973[1]
  i5972.m_OpeningDefinition = i5973[2]
  i5972.m_ClosingDefinition = i5973[3]
  i5972.m_OpeningTagArray = i5973[4]
  i5972.m_ClosingTagArray = i5973[5]
  return i5972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i5974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i5975 = data
  var i5977 = i5975[0]
  var i5976 = []
  for(var i = 0; i < i5977.length; i += 1) {
    i5976.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i5977[i + 0]) );
  }
  i5974.files = i5976
  i5974.componentToPrefabIds = i5975[1]
  return i5974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i5980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i5981 = data
  i5980.path = i5981[0]
  request.r(i5981[1], i5981[2], 0, i5980, 'unityObject')
  return i5980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i5982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i5983 = data
  var i5985 = i5983[0]
  var i5984 = []
  for(var i = 0; i < i5985.length; i += 1) {
    i5984.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i5985[i + 0]) );
  }
  i5982.scriptsExecutionOrder = i5984
  var i5987 = i5983[1]
  var i5986 = []
  for(var i = 0; i < i5987.length; i += 1) {
    i5986.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i5987[i + 0]) );
  }
  i5982.sortingLayers = i5986
  var i5989 = i5983[2]
  var i5988 = []
  for(var i = 0; i < i5989.length; i += 1) {
    i5988.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i5989[i + 0]) );
  }
  i5982.cullingLayers = i5988
  i5982.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i5983[3], i5982.timeSettings)
  i5982.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i5983[4], i5982.physicsSettings)
  i5982.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i5983[5], i5982.physics2DSettings)
  i5982.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5983[6], i5982.qualitySettings)
  i5982.enableRealtimeShadows = !!i5983[7]
  i5982.enableAutoInstancing = !!i5983[8]
  i5982.enableStaticBatching = !!i5983[9]
  i5982.enableDynamicBatching = !!i5983[10]
  i5982.usePreservativeDynamicBatching = !!i5983[11]
  i5982.lightmapEncodingQuality = i5983[12]
  i5982.desiredColorSpace = i5983[13]
  var i5991 = i5983[14]
  var i5990 = []
  for(var i = 0; i < i5991.length; i += 1) {
    i5990.push( i5991[i + 0] );
  }
  i5982.allTags = i5990
  return i5982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i5994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i5995 = data
  i5994.name = i5995[0]
  i5994.value = i5995[1]
  return i5994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i5998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i5999 = data
  i5998.id = i5999[0]
  i5998.name = i5999[1]
  i5998.value = i5999[2]
  return i5998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i6002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i6003 = data
  i6002.id = i6003[0]
  i6002.name = i6003[1]
  return i6002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i6004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i6005 = data
  i6004.fixedDeltaTime = i6005[0]
  i6004.maximumDeltaTime = i6005[1]
  i6004.timeScale = i6005[2]
  i6004.maximumParticleTimestep = i6005[3]
  return i6004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i6006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i6007 = data
  i6006.gravity = new pc.Vec3( i6007[0], i6007[1], i6007[2] )
  i6006.defaultSolverIterations = i6007[3]
  i6006.bounceThreshold = i6007[4]
  i6006.autoSyncTransforms = !!i6007[5]
  i6006.autoSimulation = !!i6007[6]
  var i6009 = i6007[7]
  var i6008 = []
  for(var i = 0; i < i6009.length; i += 1) {
    i6008.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i6009[i + 0]) );
  }
  i6006.collisionMatrix = i6008
  return i6006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i6012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i6013 = data
  i6012.enabled = !!i6013[0]
  i6012.layerId = i6013[1]
  i6012.otherLayerId = i6013[2]
  return i6012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i6014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i6015 = data
  request.r(i6015[0], i6015[1], 0, i6014, 'material')
  i6014.gravity = new pc.Vec2( i6015[2], i6015[3] )
  i6014.positionIterations = i6015[4]
  i6014.velocityIterations = i6015[5]
  i6014.velocityThreshold = i6015[6]
  i6014.maxLinearCorrection = i6015[7]
  i6014.maxAngularCorrection = i6015[8]
  i6014.maxTranslationSpeed = i6015[9]
  i6014.maxRotationSpeed = i6015[10]
  i6014.baumgarteScale = i6015[11]
  i6014.baumgarteTOIScale = i6015[12]
  i6014.timeToSleep = i6015[13]
  i6014.linearSleepTolerance = i6015[14]
  i6014.angularSleepTolerance = i6015[15]
  i6014.defaultContactOffset = i6015[16]
  i6014.autoSimulation = !!i6015[17]
  i6014.queriesHitTriggers = !!i6015[18]
  i6014.queriesStartInColliders = !!i6015[19]
  i6014.callbacksOnDisable = !!i6015[20]
  i6014.reuseCollisionCallbacks = !!i6015[21]
  i6014.autoSyncTransforms = !!i6015[22]
  var i6017 = i6015[23]
  var i6016 = []
  for(var i = 0; i < i6017.length; i += 1) {
    i6016.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i6017[i + 0]) );
  }
  i6014.collisionMatrix = i6016
  return i6014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i6020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i6021 = data
  i6020.enabled = !!i6021[0]
  i6020.layerId = i6021[1]
  i6020.otherLayerId = i6021[2]
  return i6020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i6022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i6023 = data
  var i6025 = i6023[0]
  var i6024 = []
  for(var i = 0; i < i6025.length; i += 1) {
    i6024.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i6025[i + 0]) );
  }
  i6022.qualityLevels = i6024
  var i6027 = i6023[1]
  var i6026 = []
  for(var i = 0; i < i6027.length; i += 1) {
    i6026.push( i6027[i + 0] );
  }
  i6022.names = i6026
  i6022.shadows = i6023[2]
  i6022.anisotropicFiltering = i6023[3]
  i6022.antiAliasing = i6023[4]
  i6022.lodBias = i6023[5]
  i6022.shadowCascades = i6023[6]
  i6022.shadowDistance = i6023[7]
  i6022.shadowmaskMode = i6023[8]
  i6022.shadowProjection = i6023[9]
  i6022.shadowResolution = i6023[10]
  i6022.softParticles = !!i6023[11]
  i6022.softVegetation = !!i6023[12]
  i6022.activeColorSpace = i6023[13]
  i6022.desiredColorSpace = i6023[14]
  i6022.masterTextureLimit = i6023[15]
  i6022.maxQueuedFrames = i6023[16]
  i6022.particleRaycastBudget = i6023[17]
  i6022.pixelLightCount = i6023[18]
  i6022.realtimeReflectionProbes = !!i6023[19]
  i6022.shadowCascade2Split = i6023[20]
  i6022.shadowCascade4Split = new pc.Vec3( i6023[21], i6023[22], i6023[23] )
  i6022.streamingMipmapsActive = !!i6023[24]
  i6022.vSyncCount = i6023[25]
  i6022.asyncUploadBufferSize = i6023[26]
  i6022.asyncUploadTimeSlice = i6023[27]
  i6022.billboardsFaceCameraPosition = !!i6023[28]
  i6022.shadowNearPlaneOffset = i6023[29]
  i6022.streamingMipmapsMemoryBudget = i6023[30]
  i6022.maximumLODLevel = i6023[31]
  i6022.streamingMipmapsAddAllCameras = !!i6023[32]
  i6022.streamingMipmapsMaxLevelReduction = i6023[33]
  i6022.streamingMipmapsRenderersPerFrame = i6023[34]
  i6022.resolutionScalingFixedDPIFactor = i6023[35]
  i6022.streamingMipmapsMaxFileIORequests = i6023[36]
  i6022.currentQualityLevel = i6023[37]
  return i6022
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i6030 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i6031 = data
  i6030.m_XCoordinate = i6031[0]
  i6030.m_YCoordinate = i6031[1]
  return i6030
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i6032 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i6033 = data
  i6032.m_XPositionAdjustment = i6033[0]
  i6032.m_YPositionAdjustment = i6033[1]
  return i6032
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i6034 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i6035 = data
  i6034.xPlacement = i6035[0]
  i6034.yPlacement = i6035[1]
  i6034.xAdvance = i6035[2]
  i6034.yAdvance = i6035[3]
  return i6034
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"31":[32],"33":[32],"34":[32],"35":[32],"36":[32],"37":[32],"38":[39],"40":[1],"41":[42],"43":[42],"44":[42],"45":[42],"46":[42],"47":[42],"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[49],"56":[49],"57":[49],"58":[49],"59":[49],"60":[49],"61":[49],"62":[1],"63":[64],"65":[66],"67":[66],"12":[11],"68":[20],"69":[1],"70":[71],"5":[4],"72":[12],"73":[11],"74":[15,11],"75":[64],"76":[15,11],"77":[11],"78":[11],"79":[64,11],"80":[11,15],"81":[82],"83":[82],"84":[82],"85":[11],"86":[11],"14":[12],"16":[15,11],"87":[11],"13":[12],"88":[11],"89":[11],"90":[11],"91":[11],"92":[11],"93":[11],"94":[11],"95":[11],"96":[11],"97":[15,11],"98":[11],"99":[11],"100":[11],"101":[11],"18":[15,11],"102":[11],"103":[4],"104":[4],"105":[4],"106":[4],"107":[1],"108":[1]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.InputActionAsset","UnityEngine.InputSystem.InputActionReference","UnityEngine.MonoBehaviour","GameManager","UnityEngine.GameObject","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.CircleCollider2D","ClickTarget","PulseTarget","UnityEngine.Texture2D","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.85f2";

Deserializers.productName = "PlayableAddsCP1";

Deserializers.lunaInitializationTime = "11/10/2026 21:07:45";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "0";

Deserializers.projectId = "d59363ae4aef7ba4097b44256f5c45af";

Deserializers.packagesInfo = "com.unity.inputsystem: 1.20.0\ncom.unity.timeline: 1.8.13\ncom.unity.ugui: 2.0.0";

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

Deserializers.buildID = "e86d13a2-bff4-4190-8aee-3bc584861310";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["Unity","Burst","BurstCompiler","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","GraphReference","ResetStaticsOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","PlayerInput","InitializeGlobalPlayerState"],["UnityEngine","InputSystem","InputSystem","RuntimeInitialize"],["UnityEngine","InputSystem","InputActionState","InitializeGlobalActionState"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","VisualScripting","Dependencies","NCalc","Expression","ResetStaticsOnLoad"],["Unity","VisualScripting","Flow","ResetStaticsOnLoad"],["Unity","VisualScripting","GraphInstances","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsGlobalConfig","ResetStaticsOnLoad"],["Unity","VisualScripting","RuntimeCodebase","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsAotCompilationManager","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsSerializer","ResetStaticsOnLoad"],["Unity","VisualScripting","EventBus","ResetStaticsOnLoad"],["Unity","VisualScripting","Ensure","ResetStaticsOnLoad"],["Unity","VisualScripting","UnityThread","ResetStaticsOnLoad"],["Unity","VisualScripting","Recursion","ResetStaticsOnLoad"],["Unity","VisualScripting","SavedVariables","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsMetaType","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsResult","ResetStaticsOnLoad"],["Unity","VisualScripting","ApplicationVariables","ResetStaticsOnLoad"],["Unity","VisualScripting","MessageListener","ResetStaticsOnLoad"],["Unity","VisualScripting","Serialization","ResetStaticsOnLoad"],["Unity","VisualScripting","ReferenceCollector","ResetStaticsOnLoad"],["Unity","VisualScripting","OptimizedReflection","ResetStaticsOnLoad"],["Unity","VisualScripting","EditorTimeBinding","ResetStaticsOnLoad"],["Unity","VisualScripting","ProfilingUtility","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","Internal","fsPortableReflection","ResetStaticsOnLoad"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","EnhancedTouch","Touch","InitializeGlobalTouchState"],["UnityEngine","InputSystem","Users","InputUser","InitializeGlobalUserState"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

