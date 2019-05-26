let fieldStore: any = {}

/**
 * @description 实体类基类
 * @author anthhub
 * @date 2019-05-26
 * @class EntityBase
 * @template T
 */
class EntityBase<T> {
  constructor(_props?: T) {}
}

/**
 * @description 实体类装饰器, 自动构建类属性, 构造函数空参赋值null
 * @author anthhub
 * @date 2019-05-26
 * @template T
 * @param {T} constructor
 * @returns
 */
function entity<T extends new (...args: any[]) => {}>(constructor: T) {
  // 闭包
  const thefieldStore = fieldStore
  fieldStore = {}

  return class extends constructor {
    constructor(...props: any[]) {
      super(...props)
      const prop = props[0]
      const that: any = this
      Object.keys(thefieldStore).map(item => (that[item] = prop ? prop[thefieldStore[item]] : null))
      fieldStore = {}
    }
  }
}

/**
 * @description 字段别名装饰器,  优先级最高
 * @author anthhub
 * @date 2019-05-26
 * @param {string} [param]
 * @returns
 */
function fieldName(param?: string) {
  return (_target: any, key: string | number) => {
    fieldStore[key] = param || key
  }
}

/**
 * @description 字段装饰器,  声明字段
 * @author anthhub
 * @date 2019-05-26
 * @param {*} _target
 * @param {(string | number)} key
 */
function field(_target: any, key: string | number) {
  fieldStore[key] = key
}

export { EntityBase, entity, fieldName, field }
