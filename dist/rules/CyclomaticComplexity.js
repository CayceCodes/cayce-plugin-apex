"use strict";
var __esDecorate =
  (this && this.__esDecorate) ||
  function (
    ctor,
    descriptorIn,
    decorators,
    contextIn,
    initializers,
    extraInitializers,
  ) {
    function accept(f) {
      if (f !== void 0 && typeof f !== "function")
        throw new TypeError("Function expected");
      return f;
    }
    var kind = contextIn.kind,
      key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target =
      !descriptorIn && ctor
        ? contextIn["static"]
          ? ctor
          : ctor.prototype
        : null;
    var descriptor =
      descriptorIn ||
      (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _,
      done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) {
        if (done)
          throw new TypeError(
            "Cannot add initializers after decoration has completed",
          );
        extraInitializers.push(accept(f || null));
      };
      var result = (0, decorators[i])(
        kind === "accessor"
          ? { get: descriptor.get, set: descriptor.set }
          : descriptor[key],
        context,
      );
      if (kind === "accessor") {
        if (result === void 0) continue;
        if (result === null || typeof result !== "object")
          throw new TypeError("Object expected");
        if ((_ = accept(result.get))) descriptor.get = _;
        if ((_ = accept(result.set))) descriptor.set = _;
        if ((_ = accept(result.init))) initializers.unshift(_);
      } else if ((_ = accept(result))) {
        if (kind === "field") initializers.unshift(_);
        else descriptor[key] = _;
      }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
  };
var __runInitializers =
  (this && this.__runInitializers) ||
  function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
      value = useValue
        ? initializers[i].call(thisArg, value)
        : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
  };
var __setFunctionName =
  (this && this.__setFunctionName) ||
  function (f, name, prefix) {
    if (typeof name === "symbol")
      name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
      configurable: true,
      value: prefix ? "".concat(prefix, " ", name) : name,
    });
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.CyclomaticComplexity = void 0;
const sourceloupe_types_1 = require("sourceloupe-types");
let CyclomaticComplexity = (() => {
  let _classDecorators = [
    (0, sourceloupe_types_1.name)("CyclomaticComplexity"),
    (0, sourceloupe_types_1.category)("design"),
    (0, sourceloupe_types_1.context)("scan"),
    (0, sourceloupe_types_1.message)(
      "The {0} ''{1}'' has a{2} cyclomatic complexity of {3}.",
    ),
    (0, sourceloupe_types_1.suggestion)(""),
    (0, sourceloupe_types_1.priority)(3),
    (0, sourceloupe_types_1.query)("(parser_output)@p"),
    (0, sourceloupe_types_1.regex)(""),
  ];
  let _classDescriptor;
  let _classExtraInitializers = [];
  let _classThis;
  let _classSuper = sourceloupe_types_1.ScanRule;
  var CyclomaticComplexity = (_classThis = class extends _classSuper {
    validateNode(node) {
      const rating = this.calculateCyclomaticComplexity(node);
      if (rating > 20) {
        return [
          new sourceloupe_types_1.ScanResult(
            this,
            sourceloupe_types_1.ResultType.VIOLATION,
          ),
        ];
      }
      return [];
    }
    calculateCyclomaticComplexity(node) {
      let complexity = 1; // Start with one for the entry point of the function
      function traverse(node) {
        if (node.type === "if_statement") {
          complexity += 1;
        } else if (
          node.type === "for_statement" ||
          node.type === "while_statement"
        ) {
          complexity += 1;
        } else if (node.type === "try_statement") {
          complexity += 2; // One for the try block, one for each catch block
        }
        node.children.forEach(traverse);
      }
      traverse(node);
      return complexity;
    }
  });
  __setFunctionName(_classThis, "CyclomaticComplexity");
  (() => {
    var _a;
    const _metadata =
      typeof Symbol === "function" && Symbol.metadata
        ? Object.create(
            (_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0
              ? _a
              : null,
          )
        : void 0;
    __esDecorate(
      null,
      (_classDescriptor = { value: _classThis }),
      _classDecorators,
      { kind: "class", name: _classThis.name, metadata: _metadata },
      null,
      _classExtraInitializers,
    );
    CyclomaticComplexity = _classThis = _classDescriptor.value;
    if (_metadata)
      Object.defineProperty(_classThis, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata,
      });
    __runInitializers(_classThis, _classExtraInitializers);
  })();
  return (CyclomaticComplexity = _classThis);
})();
exports.CyclomaticComplexity = CyclomaticComplexity;
