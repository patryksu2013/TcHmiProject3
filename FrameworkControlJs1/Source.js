// Keep this lines for a best effort IntelliSense of Visual Studio 2017.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Controls\System\TcHmiControl\Source.d.ts" />

// Keep this lines for a best effort IntelliSense of Visual Studio 2013/2015.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery\jquery.js" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.js" />

/*
 * Generated 7/6/2020 11:30:52 AM
 * Copyright Patryk 2020
 * 
 * destinationdirectory:        C:\Users\Patryk\Desktop\TcHmiProject1\FrameworkControlJs1
 * TcHmi_DefaultParameters:     [$guid1$, 69cd333d-0b1e-4171-9164-57b04e67016f] | [$guid2$, d19636b4-040e-4110-a710-76c249e55384] | [$guid3$, bb9278cb-998a-48a3-95ed-22775523ee10] | [$guid4$, fe93d910-9563-433f-a7d6-a17176b8a698] | [$guid5$, da93cdae-14b3-47ed-9985-ae4b10047a48] | [$guid6$, deff68be-72e2-437a-b60e-192fc563c51d] | [$guid7$, 7fa384a0-972f-43c2-acfa-6c7036734182] | [$guid8$, 873368e9-9574-40b5-8a57-bfc491adc460] | [$guid9$, 3e0dfcfa-f6a5-4ed4-b3c5-7dc404199267] | [$guid10$, 2c14ca64-4e77-47eb-8404-bf143ab20b35] | [$time$, 7/6/2020 11:30:52 AM] | [$year$, 2020] | [$username$, Patryk] | [$userdomain$, LAPTOP] | [$machinename$, LAPTOP] | [$clrversion$, 4.0.30319.42000] | [$registeredorganization$, ] | [$runsilent$, False] | [$solutiondirectory$, C:\Users\Patryk\Desktop\TcHmiProject1\] | [$projectname$, FrameworkControlJs1] | [$safeprojectname$, FrameworkControlJs1] | [$currentuiculturename$, en-US] | [$installpath$, C:\Program Files (x86)\Microsoft Visual Studio\2017\Community\Common7\IDE\] | [$specifiedsolutionname$, FrameworkControlJs1] | [$exclusiveproject$, False] | [$destinationdirectory$, C:\Users\Patryk\Desktop\TcHmiProject1\FrameworkControlJs1] | [$targetframeworkversion$, 4.5]
 * projectname_tchmi:           FrameworkControlJs1
 * projectname_tchmi_dashcase:  framework-control-js1
 * safeprojectname:             FrameworkControlJs1
 * projectname:                 FrameworkControlJs1
 */

/**
*  Namespace: TcHmi
*  [REQUIRED]
*/
(function (TcHmi) {
    /**
    *  Namespace: TcHmi.Controls
    *  [REQUIRED]
    */
    (function (Controls) {
        /**
         *  Namespace: TcHmi.Controls.Custom
         *  [CUSTOM]
         */
        var Custom;
        (function (Custom) {
            /** FrameworkControlJs1 object */
            var FrameworkControlJs1 = (function (_super) {
                __extends(FrameworkControlJs1, _super);

                /*
                Attribute philosophy
                --------------------
                - Local variables are not set while definition in class, so they have the value 'undefined'.
                - On compile the Framework sets the value from HTML or from theme (possibly 'null') via normal setters
                - The "changed detection" in the setter will result in processing the value only once while compile
                - Attention: If we have a Server Binding on an Attribute the setter can be very late or never (leaving the value = undefined).
                */

                /**
                 * @description Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                function FrameworkControlJs1(element, pcElement, attrs) {
                    /** Call base constructor */
                    _super.call(this, element, pcElement, attrs);

                    /** Attribute variables are initialized with undefined. The System will call the setter later. See "Attribute philosophy" above. */
                    this.__variableName = undefined;
                    this.__variableValue = null;
                    this.__variableUnit = undefined;
                    this.__variableOffset = null;
                    this.__limitHigh = null;
                    this.__limitLow = null;
                    this.__warnHigh = null;
                    this.__warnLow = null;
                }
                /** 
                * @description Is called during control initialize phase before attribute setter are called based on initial html dom values. 
                * @returns {void}
                */
                FrameworkControlJs1.prototype.__previnit = function () {
                    /** Handle template elements. Should be done before call to __previnit of super class. */
                    this.__elementTemplateRoot = this.__element.find('.framework-control-js1-template');
                    this.__elementVariableName = this.__elementTemplateRoot.find('.framework-control-js1-template-variable-name');
                    this.__elementVariableValue = this.__elementTemplateRoot.find('.framework-control-js1-template-variable-value');
                    this.__elementVariableUnit = this.__elementTemplateRoot.find('.framework-control-js1-template-variable-unit');
                    
                    /** Call __previnit of super class with the correct instance. */
                    _super.prototype.__previnit.call(this);
                };
                /** 
                 * @description Is called during control initialize phase after attribute setter have been called based on it's default or initial html dom values. 
                 * @returns {void}
                 */
                FrameworkControlJs1.prototype.__init = function () {
                    /** Call __init of super class with the correct instance. */
                    _super.prototype.__init.call(this);

                };
                /**
                * @description Is called after the control instance gets part of the current DOM.
                * Is only allowed to be called from the framework itself!
                * @returns {void}
                */
                FrameworkControlJs1.prototype.__attach = function () {
                    /** Call __attach of super class with the correct instance. */
                    _super.prototype.__attach.call(this);

                    /**
                     * Initialize everything which is only available while the control is part of the active dom.
                     */

                };
                
                /**
                * @description Is called after the control instance is no longer part of the current DOM.
                * Is only allowed to be called from the framework itself!
                * @returns {void}
                */
                FrameworkControlJs1.prototype.__detach = function () {
                    /** Call __detach of super class with the correct instance. */
                    _super.prototype.__detach.call(this);

                    /**
                     * Disable everything which is not needed while the control is not part of the active dom.
                     * No need to listen to events for example!
                     */
                };
                /**
                * @description Destroy the current control instance. 
                * Will be called automatically if system destroys control!
                * @returns {void}
                */
                FrameworkControlJs1.prototype.destroy = function () {
                    /** Call destroy of super class with the correct instance. */
                    _super.prototype.destroy.call(this);

                    /**
                    * Free resources like child controls etc.
                    */
                };

                /**
                 * @description Setter function for 'data-tchmi-variable-name' attribute.
                 * @param {String} valueNew the new value or null 
                 * @returns {void}
                 */
                FrameworkControlJs1.prototype.setVariableName = function (valueNew) {
                    // convert the value with the value converter
                    var convertedValue = TcHmi.ValueConverter.toString(valueNew);
                
                    // check if the converted value is valid
                    if (convertedValue === null) {
                        // if we have no value to set we have to fall back to the defaultValueInternal from description.json
                        convertedValue = this.getAttributeDefaultValueInternal('VariableName');
                    }
                
                    if (tchmi_equal(convertedValue, this.__variableName)) {
                        // skip processing when the value has not changed
                        return;
                    }
                
                    // remember the new value
                    this.__variableName = convertedValue;
                
                    // inform the system that the function has a changed result.
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getVariableName"]);
                
                    // call process function to process the new value
                    //this.__processValue();
                    this.__elementVariableName[0].innerHTML = this.__variableName;
                };

                /**
                 * @description Getter function for 'data-tchmi-variable-name' attribute.
                 * @returns {String}
                 */
                FrameworkControlJs1.prototype.getVariableName = function () {
                    return this.__variableName;
                };

                /**
                 * @description Setter function for 'data-tchmi-variable-value' attribute.
                 * @param {String} valueNew the new value or null 
                 * @returns {void}
                 */
                FrameworkControlJs1.prototype.setVariableValue = function (valueNew) {
                    // convert the value with the value converter
                    var convertedValue = TcHmi.ValueConverter.toNumber(valueNew);
                
                    // check if the converted value is valid
                    if (convertedValue === null) {
                        // if we have no value to set we have to fall back to the defaultValueInternal from description.json
                        convertedValue = this.getAttributeDefaultValueInternal('VariableValue');
                    }
                
                    if (tchmi_equal(convertedValue, this.__variableValue)) {
                        // skip processing when the value has not changed
                        return;
                    }
                
                    // remember the new value
                    this.__variableValue = convertedValue;
                
                    // inform the system that the function has a changed result.
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getVariableValue"]);
                
                    // call process function to process the new value
                    this.__processValue();
                    var value = this.__variableValue + this.__variableOffset;
                    this.__elementVariableValue[0].innerHTML = value.toFixed(2);
                };

                FrameworkControlJs1.prototype.__processValue = function () {
                    var value = this.__variableValue + this.__variableOffset;
                    if ((value <= this.__limitLow) || (value >= this.__limitHigh)) {
                        this.__elementVariableValue.css('background-color', 'red');
                    } else if ((value <= this.__limitLow && value >= this.__warnLow) || (value <= this.__limitHigh && value >= this.__warnHigh)) {
                        this.__elementVariableValue.css('background-color', 'yellow');
                    } else {
                        this.__elementVariableValue.css('background-color', 'white');
                    }
                };

                /**
                 * @description Getter function for 'data-tchmi-variable-value' attribute.
                 * @returns {String}
                 */
                FrameworkControlJs1.prototype.getVariableValue = function () {
                    return this.__variableValue;
                };

                /**
                 * @description Setter function for 'data-tchmi-variable-unit' attribute.
                 * @param {String} valueNew the new value or null 
                 * @returns {void}
                 */
                FrameworkControlJs1.prototype.setVariableUnit = function (valueNew) {
                    // convert the value with the value converter
                    var convertedValue = TcHmi.ValueConverter.toString(valueNew);
                
                    // check if the converted value is valid
                    if (convertedValue === null) {
                        // if we have no value to set we have to fall back to the defaultValueInternal from description.json
                        convertedValue = this.getAttributeDefaultValueInternal('VariableUnit');
                    }
                
                    if (tchmi_equal(convertedValue, this.__variableUnit)) {
                        // skip processing when the value has not changed
                        return;
                    }
                
                    // remember the new value
                    this.__variableUnit = convertedValue;
                
                    // inform the system that the function has a changed result.
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getVariableUnit"]);
                
                    // call process function to process the new value
                    //this.__processValue();
                    this.__elementVariableUnit[0].innerHTML = this.__variableUnit;
                };

                /**
                 * @description Getter function for 'data-tchmi-variable-unit' attribute.
                 * @returns {String}
                 */
                FrameworkControlJs1.prototype.getVariableUnit = function () {
                    return this.__variableUnit;
                };

                /**
                 * @description Setter function for 'data-tchmi-variable-offset' attribute.
                 * @param {Number} valueNew the new value or null 
                 * @returns {void}
                 */
                FrameworkControlJs1.prototype.setVariableOffset = function (valueNew) {
                    // convert the value with the value converter
                    var convertedValue = TcHmi.ValueConverter.toNumber(valueNew);
                
                    // check if the converted value is valid
                    if (convertedValue === null) {
                        // if we have no value to set we have to fall back to the defaultValueInternal from description.json
                        convertedValue = this.getAttributeDefaultValueInternal('VariableOffset');
                    }
                
                    if (tchmi_equal(convertedValue, this.__variableOffset)) {
                        // skip processing when the value has not changed
                        return;
                    }
                
                    // remember the new value
                    this.__variableOffset = convertedValue;
                
                    // inform the system that the function has a changed result.
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getVariableOffset"]);
                
                    // call process function to process the new value
                    //this.__processLimitHigh();
                };

                /**
                 * @description Getter function for 'data-tchmi-variable-offset' attribute.
                 * @returns {Number}
                 */
                FrameworkControlJs1.prototype.getVariableOffset = function () {
                    return this.__variableOffset;
                };

                /**
                 * @description Setter function for 'data-tchmi-limit-high' attribute.
                 * @param {Number} valueNew the new value or null 
                 * @returns {void}
                 */
                FrameworkControlJs1.prototype.setLimitHigh = function (valueNew) {
                    // convert the value with the value converter
                    var convertedValue = TcHmi.ValueConverter.toNumber(valueNew);
                
                    // check if the converted value is valid
                    if (convertedValue === null) {
                        // if we have no value to set we have to fall back to the defaultValueInternal from description.json
                        convertedValue = this.getAttributeDefaultValueInternal('LimitHigh');
                    }
                
                    if (tchmi_equal(convertedValue, this.__limitHigh)) {
                        // skip processing when the value has not changed
                        return;
                    }
                
                    // remember the new value
                    this.__limitHigh = convertedValue;
                
                    // inform the system that the function has a changed result.
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getLimitHigh"]);
                
                    // call process function to process the new value
                    //this.__processLimitHigh();
                };

                /**
                 * @description Getter function for 'data-tchmi-limit-high' attribute.
                 * @returns {Number}
                 */
                FrameworkControlJs1.prototype.getLimitHigh = function () {
                    return this.__limitHigh;
                };

                /**
                 * @description Setter function for 'data-tchmi-limit-low' attribute.
                 * @param {Number} valueNew the new value or null 
                 * @returns {void}
                 */
                FrameworkControlJs1.prototype.setLimitLow = function (valueNew) {
                    // convert the value with the value converter
                    var convertedValue = TcHmi.ValueConverter.toNumber(valueNew);
                
                    // check if the converted value is valid
                    if (convertedValue === null) {
                        // if we have no value to set we have to fall back to the defaultValueInternal from description.json
                        convertedValue = this.getAttributeDefaultValueInternal('LimitLow');
                    }
                
                    if (tchmi_equal(convertedValue, this.__limitLow)) {
                        // skip processing when the value has not changed
                        return;
                    }
                
                    // remember the new value
                    this.__limitLow = convertedValue;
                
                    // inform the system that the function has a changed result.
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getLimitLow"]);
                
                    // call process function to process the new value
                    //this.__processLimitLow();
                };

                /**
                 * @description Getter function for 'data-tchmi-limit-low' attribute.
                 * @returns {Number}
                 */
                FrameworkControlJs1.prototype.getLimitLow = function () {
                    return this.__limitLow;
                };

                /**
                 * @description Setter function for 'data-tchmi-warn-high' attribute.
                 * @param {Number} valueNew the new value or null 
                 * @returns {void}
                 */
                FrameworkControlJs1.prototype.setWarnHigh = function (valueNew) {
                    // convert the value with the value converter
                    var convertedValue = TcHmi.ValueConverter.toNumber(valueNew);
                
                    // check if the converted value is valid
                    if (convertedValue === null) {
                        // if we have no value to set we have to fall back to the defaultValueInternal from description.json
                        convertedValue = this.getAttributeDefaultValueInternal('WarnHigh');
                    }
                
                    if (tchmi_equal(convertedValue, this.__warnHigh)) {
                        // skip processing when the value has not changed
                        return;
                    }
                
                    // remember the new value
                    this.__warnHigh = convertedValue;
                
                    // inform the system that the function has a changed result.
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getWarnHigh"]);
                
                    // call process function to process the new value
                    // this.__processWarnHigh();
                };

                /**
                 * @description Getter function for 'data-tchmi-warn-high' attribute.
                 * @returns {Number}
                 */
                FrameworkControlJs1.prototype.getWarnHigh = function () {
                    return this.__warnHigh;
                };

                /**
                 * @description Setter function for 'data-tchmi-warn-low' attribute.
                 * @param {Number} valueNew the new value or null 
                 * @returns {void}
                 */
                FrameworkControlJs1.prototype.setWarnLow = function (valueNew) {
                    // convert the value with the value converter
                    var convertedValue = TcHmi.ValueConverter.toNumber(valueNew);
                
                    // check if the converted value is valid
                    if (convertedValue === null) {
                        // if we have no value to set we have to fall back to the defaultValueInternal from description.json
                        convertedValue = this.getAttributeDefaultValueInternal('WarnLow');
                    }
                
                    if (tchmi_equal(convertedValue, this.__warnLow)) {
                        // skip processing when the value has not changed
                        return;
                    }
                
                    // remember the new value
                    this.__warnLow = convertedValue;
                
                    // inform the system that the function has a changed result.
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getWarnLow"]);
                
                    // call process function to process the new value
                    // this.__processWarnLow();
                };

                /**
                 * @description Getter function for 'data-tchmi-warn-low' attribute.
                 * @returns {Number}
                 */
                FrameworkControlJs1.prototype.getWarnLow = function () {
                    return this.__warnLow;
                };
                
                return FrameworkControlJs1;
            })(TcHmi.Controls.System.TcHmiControl);
            Custom.FrameworkControlJs1 = FrameworkControlJs1;
        })(Custom = Controls.Custom || (Controls.Custom = {}));
        /**
        * Register control...
        */
        Controls.register('framework-control-js1', Custom.FrameworkControlJs1, 'Custom/FrameworkControlJs1/', 'Custom/FrameworkControlJs1/Template.html');
    })(Controls = TcHmi.Controls || (TcHmi.Controls = {}));
})(TcHmi);