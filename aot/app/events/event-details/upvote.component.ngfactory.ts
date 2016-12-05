/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../../app/events/event-details/upvote.component';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from './upvote.component.css.shim';
import * as import9 from '@angular/core/src/security';
export class Wrapper_UpvoteComponent {
  /*private*/ _eventHandler:Function;
  context:import0.UpvoteComponent;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  subscription0:any;
  constructor() {
    this._changed = false;
    this.context = new import0.UpvoteComponent();
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    (this.subscription0 && this.subscription0.unsubscribe());
  }
  check_count(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.count = currValue;
      this._expr_0 = currValue;
    }
  }
  check_voted(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.voted = currValue;
      this._expr_1 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any,emit0:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.vote.subscribe(_eventHandler.bind(view,'vote'))); }
  }
}
var renderType_UpvoteComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_UpvoteComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.UpvoteComponent>;
  _UpvoteComponent_0_3:Wrapper_UpvoteComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_UpvoteComponent_Host0,renderType_UpvoteComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'upvote',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_UpvoteComponent0(this.viewUtils,this,0,this._el_0);
    this._UpvoteComponent_0_3 = new Wrapper_UpvoteComponent();
    this.compView_0.create(this._UpvoteComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._UpvoteComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.UpvoteComponent) && (0 === requestNodeIndex))) { return this._UpvoteComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._UpvoteComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._UpvoteComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const UpvoteComponentNgFactory:import7.ComponentFactory<import0.UpvoteComponent> = new import7.ComponentFactory<import0.UpvoteComponent>('upvote',View_UpvoteComponent_Host0,import0.UpvoteComponent);
const styles_UpvoteComponent:any[] = [import8.styles];
var renderType_UpvoteComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.Emulated,styles_UpvoteComponent,{});
export class View_UpvoteComponent0 extends import2.AppView<import0.UpvoteComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  _el_9:any;
  _text_10:any;
  _el_11:any;
  _text_12:any;
  _el_13:any;
  _text_14:any;
  _text_15:any;
  _text_16:any;
  _text_17:any;
  _text_18:any;
  /*private*/ _expr_19:any;
  /*private*/ _expr_20:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_UpvoteComponent0,renderType_UpvoteComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways);
    this._expr_19 = import1.UNINITIALIZED;
    this._expr_20 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','votingWidgetContainer pointable'),(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,this._el_1,'div',new import3.InlineArray2(2,'class','well votingWidget'),(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'\n        ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_3,'div',new import3.InlineArray2(2,'class','votingButton'),(null as any));
    this._text_6 = this.renderer.createText(this._el_5,'\n          ',(null as any));
    this._el_7 = import3.createRenderElement(this.renderer,this._el_5,'i',new import3.InlineArray2(2,'class','glyphicon glyphicon-heart'),(null as any));
    this._text_8 = this.renderer.createText(this._el_5,'\n        ',(null as any));
    this._el_9 = import3.createRenderElement(this.renderer,this._el_5,'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_10 = this.renderer.createText(this._el_9,'\n        ',(null as any));
    this._el_11 = import3.createRenderElement(this.renderer,this._el_9,'div',new import3.InlineArray2(2,'class','badge badge-inverse votingCount'),(null as any));
    this._text_12 = this.renderer.createText(this._el_11,'\n          ',(null as any));
    this._el_13 = import3.createRenderElement(this.renderer,this._el_11,'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_14 = this.renderer.createText(this._el_13,'',(null as any));
    this._text_15 = this.renderer.createText(this._el_11,'\n        ',(null as any));
    this._text_16 = this.renderer.createText(this._el_9,'\n      ',(null as any));
    this._text_17 = this.renderer.createText(this._el_5,'\n    ',(null as any));
    this._text_18 = this.renderer.createText(this._el_3,'\n  ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_1,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_1));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._el_13,
      this._text_14,
      this._text_15,
      this._text_16,
      this._text_17,
      this._text_18
    ]
    ),[disposable_0]);
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_19:any = this.context.iconColor;
    if (import3.checkBinding(throwOnChange,this._expr_19,currVal_19)) {
      this.renderer.setElementStyle(this._el_7,'color',((this.viewUtils.sanitizer.sanitize(import9.SecurityContext.STYLE,currVal_19) == null)? (null as any): this.viewUtils.sanitizer.sanitize(import9.SecurityContext.STYLE,currVal_19).toString()));
      this._expr_19 = currVal_19;
    }
    const currVal_20:any = import3.inlineInterpolate(1,'',this.context.count,'');
    if (import3.checkBinding(throwOnChange,this._expr_20,currVal_20)) {
      this.renderer.setText(this._text_14,currVal_20);
      this._expr_20 = currVal_20;
    }
  }
  handleEvent_1(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.onClick()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}