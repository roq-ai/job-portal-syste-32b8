/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model application
 *
 */
export type application = $Result.DefaultSelection<Prisma.$applicationPayload>;
/**
 * Model job
 *
 */
export type job = $Result.DefaultSelection<Prisma.$jobPayload>;
/**
 * Model job_seeker
 *
 */
export type job_seeker = $Result.DefaultSelection<Prisma.$job_seekerPayload>;
/**
 * Model organization
 *
 */
export type organization = $Result.DefaultSelection<Prisma.$organizationPayload>;
/**
 * Model recruiter
 *
 */
export type recruiter = $Result.DefaultSelection<Prisma.$recruiterPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Applications
 * const applications = await prisma.application.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Applications
   * const applications = await prisma.application.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.application`: Exposes CRUD operations for the **application** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Applications
   * const applications = await prisma.application.findMany()
   * ```
   */
  get application(): Prisma.applicationDelegate<ExtArgs>;

  /**
   * `prisma.job`: Exposes CRUD operations for the **job** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Jobs
   * const jobs = await prisma.job.findMany()
   * ```
   */
  get job(): Prisma.jobDelegate<ExtArgs>;

  /**
   * `prisma.job_seeker`: Exposes CRUD operations for the **job_seeker** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Job_seekers
   * const job_seekers = await prisma.job_seeker.findMany()
   * ```
   */
  get job_seeker(): Prisma.job_seekerDelegate<ExtArgs>;

  /**
   * `prisma.organization`: Exposes CRUD operations for the **organization** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Organizations
   * const organizations = await prisma.organization.findMany()
   * ```
   */
  get organization(): Prisma.organizationDelegate<ExtArgs>;

  /**
   * `prisma.recruiter`: Exposes CRUD operations for the **recruiter** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Recruiters
   * const recruiters = await prisma.recruiter.findMany()
   * ```
   */
  get recruiter(): Prisma.recruiterDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.4.2
   * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    application: 'application';
    job: 'job';
    job_seeker: 'job_seeker';
    organization: 'organization';
    recruiter: 'recruiter';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'application' | 'job' | 'job_seeker' | 'organization' | 'recruiter' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      application: {
        payload: Prisma.$applicationPayload<ExtArgs>;
        fields: Prisma.applicationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.applicationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$applicationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.applicationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$applicationPayload>;
          };
          findFirst: {
            args: Prisma.applicationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$applicationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.applicationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$applicationPayload>;
          };
          findMany: {
            args: Prisma.applicationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$applicationPayload>[];
          };
          create: {
            args: Prisma.applicationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$applicationPayload>;
          };
          createMany: {
            args: Prisma.applicationCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.applicationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$applicationPayload>;
          };
          update: {
            args: Prisma.applicationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$applicationPayload>;
          };
          deleteMany: {
            args: Prisma.applicationDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.applicationUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.applicationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$applicationPayload>;
          };
          aggregate: {
            args: Prisma.ApplicationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateApplication>;
          };
          groupBy: {
            args: Prisma.applicationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ApplicationGroupByOutputType>[];
          };
          count: {
            args: Prisma.applicationCountArgs<ExtArgs>;
            result: $Utils.Optional<ApplicationCountAggregateOutputType> | number;
          };
        };
      };
      job: {
        payload: Prisma.$jobPayload<ExtArgs>;
        fields: Prisma.jobFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.jobFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$jobPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.jobFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$jobPayload>;
          };
          findFirst: {
            args: Prisma.jobFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$jobPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.jobFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$jobPayload>;
          };
          findMany: {
            args: Prisma.jobFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$jobPayload>[];
          };
          create: {
            args: Prisma.jobCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$jobPayload>;
          };
          createMany: {
            args: Prisma.jobCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.jobDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$jobPayload>;
          };
          update: {
            args: Prisma.jobUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$jobPayload>;
          };
          deleteMany: {
            args: Prisma.jobDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.jobUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.jobUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$jobPayload>;
          };
          aggregate: {
            args: Prisma.JobAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateJob>;
          };
          groupBy: {
            args: Prisma.jobGroupByArgs<ExtArgs>;
            result: $Utils.Optional<JobGroupByOutputType>[];
          };
          count: {
            args: Prisma.jobCountArgs<ExtArgs>;
            result: $Utils.Optional<JobCountAggregateOutputType> | number;
          };
        };
      };
      job_seeker: {
        payload: Prisma.$job_seekerPayload<ExtArgs>;
        fields: Prisma.job_seekerFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.job_seekerFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_seekerPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.job_seekerFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_seekerPayload>;
          };
          findFirst: {
            args: Prisma.job_seekerFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_seekerPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.job_seekerFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_seekerPayload>;
          };
          findMany: {
            args: Prisma.job_seekerFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_seekerPayload>[];
          };
          create: {
            args: Prisma.job_seekerCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_seekerPayload>;
          };
          createMany: {
            args: Prisma.job_seekerCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.job_seekerDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_seekerPayload>;
          };
          update: {
            args: Prisma.job_seekerUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_seekerPayload>;
          };
          deleteMany: {
            args: Prisma.job_seekerDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.job_seekerUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.job_seekerUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_seekerPayload>;
          };
          aggregate: {
            args: Prisma.Job_seekerAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateJob_seeker>;
          };
          groupBy: {
            args: Prisma.job_seekerGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Job_seekerGroupByOutputType>[];
          };
          count: {
            args: Prisma.job_seekerCountArgs<ExtArgs>;
            result: $Utils.Optional<Job_seekerCountAggregateOutputType> | number;
          };
        };
      };
      organization: {
        payload: Prisma.$organizationPayload<ExtArgs>;
        fields: Prisma.organizationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.organizationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.organizationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          findFirst: {
            args: Prisma.organizationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.organizationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          findMany: {
            args: Prisma.organizationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>[];
          };
          create: {
            args: Prisma.organizationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          createMany: {
            args: Prisma.organizationCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.organizationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          update: {
            args: Prisma.organizationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          deleteMany: {
            args: Prisma.organizationDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.organizationUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.organizationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOrganization>;
          };
          groupBy: {
            args: Prisma.organizationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OrganizationGroupByOutputType>[];
          };
          count: {
            args: Prisma.organizationCountArgs<ExtArgs>;
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number;
          };
        };
      };
      recruiter: {
        payload: Prisma.$recruiterPayload<ExtArgs>;
        fields: Prisma.recruiterFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.recruiterFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$recruiterPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.recruiterFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$recruiterPayload>;
          };
          findFirst: {
            args: Prisma.recruiterFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$recruiterPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.recruiterFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$recruiterPayload>;
          };
          findMany: {
            args: Prisma.recruiterFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$recruiterPayload>[];
          };
          create: {
            args: Prisma.recruiterCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$recruiterPayload>;
          };
          createMany: {
            args: Prisma.recruiterCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.recruiterDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$recruiterPayload>;
          };
          update: {
            args: Prisma.recruiterUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$recruiterPayload>;
          };
          deleteMany: {
            args: Prisma.recruiterDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.recruiterUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.recruiterUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$recruiterPayload>;
          };
          aggregate: {
            args: Prisma.RecruiterAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateRecruiter>;
          };
          groupBy: {
            args: Prisma.recruiterGroupByArgs<ExtArgs>;
            result: $Utils.Optional<RecruiterGroupByOutputType>[];
          };
          count: {
            args: Prisma.recruiterCountArgs<ExtArgs>;
            result: $Utils.Optional<RecruiterCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type JobCountOutputType
   */

  export type JobCountOutputType = {
    application: number;
  };

  export type JobCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | JobCountOutputTypeCountApplicationArgs;
  };

  // Custom InputTypes

  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCountOutputType
     */
    select?: JobCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeCountApplicationArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: applicationWhereInput;
  };

  /**
   * Count Type Job_seekerCountOutputType
   */

  export type Job_seekerCountOutputType = {
    application: number;
  };

  export type Job_seekerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | Job_seekerCountOutputTypeCountApplicationArgs;
  };

  // Custom InputTypes

  /**
   * Job_seekerCountOutputType without action
   */
  export type Job_seekerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Job_seekerCountOutputType
       */
      select?: Job_seekerCountOutputTypeSelect<ExtArgs> | null;
    };

  /**
   * Job_seekerCountOutputType without action
   */
  export type Job_seekerCountOutputTypeCountApplicationArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: applicationWhereInput;
  };

  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    recruiter: number;
  };

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recruiter?: boolean | OrganizationCountOutputTypeCountRecruiterArgs;
  };

  // Custom InputTypes

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountRecruiterArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: recruiterWhereInput;
  };

  /**
   * Count Type RecruiterCountOutputType
   */

  export type RecruiterCountOutputType = {
    job: number;
  };

  export type RecruiterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | RecruiterCountOutputTypeCountJobArgs;
  };

  // Custom InputTypes

  /**
   * RecruiterCountOutputType without action
   */
  export type RecruiterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the RecruiterCountOutputType
       */
      select?: RecruiterCountOutputTypeSelect<ExtArgs> | null;
    };

  /**
   * RecruiterCountOutputType without action
   */
  export type RecruiterCountOutputTypeCountJobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: jobWhereInput;
    };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    job_seeker: number;
    organization: number;
    recruiter: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job_seeker?: boolean | UserCountOutputTypeCountJob_seekerArgs;
    organization?: boolean | UserCountOutputTypeCountOrganizationArgs;
    recruiter?: boolean | UserCountOutputTypeCountRecruiterArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountJob_seekerArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: job_seekerWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrganizationArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: organizationWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRecruiterArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: recruiterWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model application
   */

  export type AggregateApplication = {
    _count: ApplicationCountAggregateOutputType | null;
    _min: ApplicationMinAggregateOutputType | null;
    _max: ApplicationMaxAggregateOutputType | null;
  };

  export type ApplicationMinAggregateOutputType = {
    id: string | null;
    job_seeker_id: string | null;
    job_id: string | null;
    application_date: Date | null;
    status: string | null;
    resume: string | null;
    cover_letter: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ApplicationMaxAggregateOutputType = {
    id: string | null;
    job_seeker_id: string | null;
    job_id: string | null;
    application_date: Date | null;
    status: string | null;
    resume: string | null;
    cover_letter: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ApplicationCountAggregateOutputType = {
    id: number;
    job_seeker_id: number;
    job_id: number;
    application_date: number;
    status: number;
    resume: number;
    cover_letter: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ApplicationMinAggregateInputType = {
    id?: true;
    job_seeker_id?: true;
    job_id?: true;
    application_date?: true;
    status?: true;
    resume?: true;
    cover_letter?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ApplicationMaxAggregateInputType = {
    id?: true;
    job_seeker_id?: true;
    job_id?: true;
    application_date?: true;
    status?: true;
    resume?: true;
    cover_letter?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ApplicationCountAggregateInputType = {
    id?: true;
    job_seeker_id?: true;
    job_id?: true;
    application_date?: true;
    status?: true;
    resume?: true;
    cover_letter?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which application to aggregate.
     */
    where?: applicationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of applications to fetch.
     */
    orderBy?: applicationOrderByWithRelationInput | applicationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: applicationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` applications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` applications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned applications
     **/
    _count?: true | ApplicationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ApplicationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ApplicationMaxAggregateInputType;
  };

  export type GetApplicationAggregateType<T extends ApplicationAggregateArgs> = {
    [P in keyof T & keyof AggregateApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplication[P]>
      : GetScalarType<T[P], AggregateApplication[P]>;
  };

  export type applicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: applicationWhereInput;
    orderBy?: applicationOrderByWithAggregationInput | applicationOrderByWithAggregationInput[];
    by: ApplicationScalarFieldEnum[] | ApplicationScalarFieldEnum;
    having?: applicationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ApplicationCountAggregateInputType | true;
    _min?: ApplicationMinAggregateInputType;
    _max?: ApplicationMaxAggregateInputType;
  };

  export type ApplicationGroupByOutputType = {
    id: string;
    job_seeker_id: string;
    job_id: string;
    application_date: Date | null;
    status: string | null;
    resume: string | null;
    cover_letter: string | null;
    created_at: Date;
    updated_at: Date;
    _count: ApplicationCountAggregateOutputType | null;
    _min: ApplicationMinAggregateOutputType | null;
    _max: ApplicationMaxAggregateOutputType | null;
  };

  type GetApplicationGroupByPayload<T extends applicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ApplicationGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
          : GetScalarType<T[P], ApplicationGroupByOutputType[P]>;
      }
    >
  >;

  export type applicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        job_seeker_id?: boolean;
        job_id?: boolean;
        application_date?: boolean;
        status?: boolean;
        resume?: boolean;
        cover_letter?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        job?: boolean | jobDefaultArgs<ExtArgs>;
        job_seeker?: boolean | job_seekerDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['application']
    >;

  export type applicationSelectScalar = {
    id?: boolean;
    job_seeker_id?: boolean;
    job_id?: boolean;
    application_date?: boolean;
    status?: boolean;
    resume?: boolean;
    cover_letter?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type applicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | jobDefaultArgs<ExtArgs>;
    job_seeker?: boolean | job_seekerDefaultArgs<ExtArgs>;
  };

  export type $applicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'application';
    objects: {
      job: Prisma.$jobPayload<ExtArgs>;
      job_seeker: Prisma.$job_seekerPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        job_seeker_id: string;
        job_id: string;
        application_date: Date | null;
        status: string | null;
        resume: string | null;
        cover_letter: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['application']
    >;
    composites: {};
  };

  type applicationGetPayload<S extends boolean | null | undefined | applicationDefaultArgs> = $Result.GetResult<
    Prisma.$applicationPayload,
    S
  >;

  type applicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    applicationFindManyArgs,
    'select' | 'include'
  > & {
    select?: ApplicationCountAggregateInputType | true;
  };

  export interface applicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['application']; meta: { name: 'application' } };
    /**
     * Find zero or one Application that matches the filter.
     * @param {applicationFindUniqueArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends applicationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, applicationFindUniqueArgs<ExtArgs>>,
    ): Prisma__applicationClient<
      $Result.GetResult<Prisma.$applicationPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Application that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {applicationFindUniqueOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends applicationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, applicationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__applicationClient<
      $Result.GetResult<Prisma.$applicationPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Application that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicationFindFirstArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends applicationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, applicationFindFirstArgs<ExtArgs>>,
    ): Prisma__applicationClient<
      $Result.GetResult<Prisma.$applicationPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Application that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicationFindFirstOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends applicationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, applicationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__applicationClient<
      $Result.GetResult<Prisma.$applicationPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applications
     * const applications = await prisma.application.findMany()
     *
     * // Get first 10 Applications
     * const applications = await prisma.application.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const applicationWithIdOnly = await prisma.application.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends applicationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, applicationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$applicationPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Application.
     * @param {applicationCreateArgs} args - Arguments to create a Application.
     * @example
     * // Create one Application
     * const Application = await prisma.application.create({
     *   data: {
     *     // ... data to create a Application
     *   }
     * })
     *
     **/
    create<T extends applicationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, applicationCreateArgs<ExtArgs>>,
    ): Prisma__applicationClient<$Result.GetResult<Prisma.$applicationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Applications.
     *     @param {applicationCreateManyArgs} args - Arguments to create many Applications.
     *     @example
     *     // Create many Applications
     *     const application = await prisma.application.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends applicationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, applicationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Application.
     * @param {applicationDeleteArgs} args - Arguments to delete one Application.
     * @example
     * // Delete one Application
     * const Application = await prisma.application.delete({
     *   where: {
     *     // ... filter to delete one Application
     *   }
     * })
     *
     **/
    delete<T extends applicationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, applicationDeleteArgs<ExtArgs>>,
    ): Prisma__applicationClient<$Result.GetResult<Prisma.$applicationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Application.
     * @param {applicationUpdateArgs} args - Arguments to update one Application.
     * @example
     * // Update one Application
     * const application = await prisma.application.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends applicationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, applicationUpdateArgs<ExtArgs>>,
    ): Prisma__applicationClient<$Result.GetResult<Prisma.$applicationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Applications.
     * @param {applicationDeleteManyArgs} args - Arguments to filter Applications to delete.
     * @example
     * // Delete a few Applications
     * const { count } = await prisma.application.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends applicationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, applicationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends applicationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, applicationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Application.
     * @param {applicationUpsertArgs} args - Arguments to update or create a Application.
     * @example
     * // Update or create a Application
     * const application = await prisma.application.upsert({
     *   create: {
     *     // ... data to create a Application
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Application we want to update
     *   }
     * })
     **/
    upsert<T extends applicationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, applicationUpsertArgs<ExtArgs>>,
    ): Prisma__applicationClient<$Result.GetResult<Prisma.$applicationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicationCountArgs} args - Arguments to filter Applications to count.
     * @example
     * // Count the number of Applications
     * const count = await prisma.application.count({
     *   where: {
     *     // ... the filter for the Applications we want to count
     *   }
     * })
     **/
    count<T extends applicationCountArgs>(
      args?: Subset<T, applicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ApplicationAggregateArgs>(
      args: Subset<T, ApplicationAggregateArgs>,
    ): Prisma.PrismaPromise<GetApplicationAggregateType<T>>;

    /**
     * Group by Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends applicationGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: applicationGroupByArgs['orderBy'] }
        : { orderBy?: applicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, applicationGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the application model
     */
    readonly fields: applicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for application.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__applicationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    job<T extends jobDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, jobDefaultArgs<ExtArgs>>,
    ): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    job_seeker<T extends job_seekerDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, job_seekerDefaultArgs<ExtArgs>>,
    ): Prisma__job_seekerClient<
      $Result.GetResult<Prisma.$job_seekerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the application model
   */
  interface applicationFieldRefs {
    readonly id: FieldRef<'application', 'String'>;
    readonly job_seeker_id: FieldRef<'application', 'String'>;
    readonly job_id: FieldRef<'application', 'String'>;
    readonly application_date: FieldRef<'application', 'DateTime'>;
    readonly status: FieldRef<'application', 'String'>;
    readonly resume: FieldRef<'application', 'String'>;
    readonly cover_letter: FieldRef<'application', 'String'>;
    readonly created_at: FieldRef<'application', 'DateTime'>;
    readonly updated_at: FieldRef<'application', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * application findUnique
   */
  export type applicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicationInclude<ExtArgs> | null;
    /**
     * Filter, which application to fetch.
     */
    where: applicationWhereUniqueInput;
  };

  /**
   * application findUniqueOrThrow
   */
  export type applicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicationInclude<ExtArgs> | null;
    /**
     * Filter, which application to fetch.
     */
    where: applicationWhereUniqueInput;
  };

  /**
   * application findFirst
   */
  export type applicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicationInclude<ExtArgs> | null;
    /**
     * Filter, which application to fetch.
     */
    where?: applicationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of applications to fetch.
     */
    orderBy?: applicationOrderByWithRelationInput | applicationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for applications.
     */
    cursor?: applicationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` applications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` applications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[];
  };

  /**
   * application findFirstOrThrow
   */
  export type applicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicationInclude<ExtArgs> | null;
    /**
     * Filter, which application to fetch.
     */
    where?: applicationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of applications to fetch.
     */
    orderBy?: applicationOrderByWithRelationInput | applicationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for applications.
     */
    cursor?: applicationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` applications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` applications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[];
  };

  /**
   * application findMany
   */
  export type applicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicationInclude<ExtArgs> | null;
    /**
     * Filter, which applications to fetch.
     */
    where?: applicationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of applications to fetch.
     */
    orderBy?: applicationOrderByWithRelationInput | applicationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing applications.
     */
    cursor?: applicationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` applications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` applications.
     */
    skip?: number;
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[];
  };

  /**
   * application create
   */
  export type applicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicationInclude<ExtArgs> | null;
    /**
     * The data needed to create a application.
     */
    data: XOR<applicationCreateInput, applicationUncheckedCreateInput>;
  };

  /**
   * application createMany
   */
  export type applicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many applications.
     */
    data: applicationCreateManyInput | applicationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * application update
   */
  export type applicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicationInclude<ExtArgs> | null;
    /**
     * The data needed to update a application.
     */
    data: XOR<applicationUpdateInput, applicationUncheckedUpdateInput>;
    /**
     * Choose, which application to update.
     */
    where: applicationWhereUniqueInput;
  };

  /**
   * application updateMany
   */
  export type applicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update applications.
     */
    data: XOR<applicationUpdateManyMutationInput, applicationUncheckedUpdateManyInput>;
    /**
     * Filter which applications to update
     */
    where?: applicationWhereInput;
  };

  /**
   * application upsert
   */
  export type applicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicationInclude<ExtArgs> | null;
    /**
     * The filter to search for the application to update in case it exists.
     */
    where: applicationWhereUniqueInput;
    /**
     * In case the application found by the `where` argument doesn't exist, create a new application with this data.
     */
    create: XOR<applicationCreateInput, applicationUncheckedCreateInput>;
    /**
     * In case the application was found with the provided `where` argument, update it with this data.
     */
    update: XOR<applicationUpdateInput, applicationUncheckedUpdateInput>;
  };

  /**
   * application delete
   */
  export type applicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicationInclude<ExtArgs> | null;
    /**
     * Filter which application to delete.
     */
    where: applicationWhereUniqueInput;
  };

  /**
   * application deleteMany
   */
  export type applicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which applications to delete
     */
    where?: applicationWhereInput;
  };

  /**
   * application without action
   */
  export type applicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicationInclude<ExtArgs> | null;
  };

  /**
   * Model job
   */

  export type AggregateJob = {
    _count: JobCountAggregateOutputType | null;
    _avg: JobAvgAggregateOutputType | null;
    _sum: JobSumAggregateOutputType | null;
    _min: JobMinAggregateOutputType | null;
    _max: JobMaxAggregateOutputType | null;
  };

  export type JobAvgAggregateOutputType = {
    salary: number | null;
  };

  export type JobSumAggregateOutputType = {
    salary: number | null;
  };

  export type JobMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    recruiter_id: string | null;
    location: string | null;
    salary: number | null;
    job_type: string | null;
    posted_date: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type JobMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    recruiter_id: string | null;
    location: string | null;
    salary: number | null;
    job_type: string | null;
    posted_date: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type JobCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    recruiter_id: number;
    location: number;
    salary: number;
    job_type: number;
    posted_date: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type JobAvgAggregateInputType = {
    salary?: true;
  };

  export type JobSumAggregateInputType = {
    salary?: true;
  };

  export type JobMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    recruiter_id?: true;
    location?: true;
    salary?: true;
    job_type?: true;
    posted_date?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type JobMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    recruiter_id?: true;
    location?: true;
    salary?: true;
    job_type?: true;
    posted_date?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type JobCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    recruiter_id?: true;
    location?: true;
    salary?: true;
    job_type?: true;
    posted_date?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type JobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which job to aggregate.
     */
    where?: jobWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobOrderByWithRelationInput | jobOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: jobWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` jobs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned jobs
     **/
    _count?: true | JobCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: JobAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: JobSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: JobMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: JobMaxAggregateInputType;
  };

  export type GetJobAggregateType<T extends JobAggregateArgs> = {
    [P in keyof T & keyof AggregateJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob[P]>
      : GetScalarType<T[P], AggregateJob[P]>;
  };

  export type jobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jobWhereInput;
    orderBy?: jobOrderByWithAggregationInput | jobOrderByWithAggregationInput[];
    by: JobScalarFieldEnum[] | JobScalarFieldEnum;
    having?: jobScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: JobCountAggregateInputType | true;
    _avg?: JobAvgAggregateInputType;
    _sum?: JobSumAggregateInputType;
    _min?: JobMinAggregateInputType;
    _max?: JobMaxAggregateInputType;
  };

  export type JobGroupByOutputType = {
    id: string;
    title: string;
    description: string | null;
    recruiter_id: string;
    location: string | null;
    salary: number | null;
    job_type: string | null;
    posted_date: Date | null;
    created_at: Date;
    updated_at: Date;
    _count: JobCountAggregateOutputType | null;
    _avg: JobAvgAggregateOutputType | null;
    _sum: JobSumAggregateOutputType | null;
    _min: JobMinAggregateOutputType | null;
    _max: JobMaxAggregateOutputType | null;
  };

  type GetJobGroupByPayload<T extends jobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobGroupByOutputType, T['by']> & {
        [P in keyof T & keyof JobGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], JobGroupByOutputType[P]>
          : GetScalarType<T[P], JobGroupByOutputType[P]>;
      }
    >
  >;

  export type jobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      description?: boolean;
      recruiter_id?: boolean;
      location?: boolean;
      salary?: boolean;
      job_type?: boolean;
      posted_date?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      application?: boolean | job$applicationArgs<ExtArgs>;
      recruiter?: boolean | recruiterDefaultArgs<ExtArgs>;
      _count?: boolean | JobCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['job']
  >;

  export type jobSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    recruiter_id?: boolean;
    location?: boolean;
    salary?: boolean;
    job_type?: boolean;
    posted_date?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type jobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | job$applicationArgs<ExtArgs>;
    recruiter?: boolean | recruiterDefaultArgs<ExtArgs>;
    _count?: boolean | JobCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $jobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'job';
    objects: {
      application: Prisma.$applicationPayload<ExtArgs>[];
      recruiter: Prisma.$recruiterPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        title: string;
        description: string | null;
        recruiter_id: string;
        location: string | null;
        salary: number | null;
        job_type: string | null;
        posted_date: Date | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['job']
    >;
    composites: {};
  };

  type jobGetPayload<S extends boolean | null | undefined | jobDefaultArgs> = $Result.GetResult<Prisma.$jobPayload, S>;

  type jobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    jobFindManyArgs,
    'select' | 'include'
  > & {
    select?: JobCountAggregateInputType | true;
  };

  export interface jobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['job']; meta: { name: 'job' } };
    /**
     * Find zero or one Job that matches the filter.
     * @param {jobFindUniqueArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends jobFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, jobFindUniqueArgs<ExtArgs>>,
    ): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Job that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {jobFindUniqueOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends jobFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, jobFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Job that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobFindFirstArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends jobFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, jobFindFirstArgs<ExtArgs>>,
    ): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Job that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobFindFirstOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends jobFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, jobFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobs
     * const jobs = await prisma.job.findMany()
     *
     * // Get first 10 Jobs
     * const jobs = await prisma.job.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const jobWithIdOnly = await prisma.job.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends jobFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, jobFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Job.
     * @param {jobCreateArgs} args - Arguments to create a Job.
     * @example
     * // Create one Job
     * const Job = await prisma.job.create({
     *   data: {
     *     // ... data to create a Job
     *   }
     * })
     *
     **/
    create<T extends jobCreateArgs<ExtArgs>>(
      args: SelectSubset<T, jobCreateArgs<ExtArgs>>,
    ): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Jobs.
     *     @param {jobCreateManyArgs} args - Arguments to create many Jobs.
     *     @example
     *     // Create many Jobs
     *     const job = await prisma.job.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends jobCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, jobCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Job.
     * @param {jobDeleteArgs} args - Arguments to delete one Job.
     * @example
     * // Delete one Job
     * const Job = await prisma.job.delete({
     *   where: {
     *     // ... filter to delete one Job
     *   }
     * })
     *
     **/
    delete<T extends jobDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, jobDeleteArgs<ExtArgs>>,
    ): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Job.
     * @param {jobUpdateArgs} args - Arguments to update one Job.
     * @example
     * // Update one Job
     * const job = await prisma.job.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends jobUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, jobUpdateArgs<ExtArgs>>,
    ): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Jobs.
     * @param {jobDeleteManyArgs} args - Arguments to filter Jobs to delete.
     * @example
     * // Delete a few Jobs
     * const { count } = await prisma.job.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends jobDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, jobDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends jobUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, jobUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Job.
     * @param {jobUpsertArgs} args - Arguments to update or create a Job.
     * @example
     * // Update or create a Job
     * const job = await prisma.job.upsert({
     *   create: {
     *     // ... data to create a Job
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job we want to update
     *   }
     * })
     **/
    upsert<T extends jobUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, jobUpsertArgs<ExtArgs>>,
    ): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobCountArgs} args - Arguments to filter Jobs to count.
     * @example
     * // Count the number of Jobs
     * const count = await prisma.job.count({
     *   where: {
     *     // ... the filter for the Jobs we want to count
     *   }
     * })
     **/
    count<T extends jobCountArgs>(
      args?: Subset<T, jobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends JobAggregateArgs>(
      args: Subset<T, JobAggregateArgs>,
    ): Prisma.PrismaPromise<GetJobAggregateType<T>>;

    /**
     * Group by Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends jobGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: jobGroupByArgs['orderBy'] }
        : { orderBy?: jobGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, jobGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the job model
     */
    readonly fields: jobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for job.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__jobClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    application<T extends job$applicationArgs<ExtArgs> = {}>(
      args?: Subset<T, job$applicationArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$applicationPayload<ExtArgs>, T, 'findMany'> | Null>;

    recruiter<T extends recruiterDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, recruiterDefaultArgs<ExtArgs>>,
    ): Prisma__recruiterClient<
      $Result.GetResult<Prisma.$recruiterPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the job model
   */
  interface jobFieldRefs {
    readonly id: FieldRef<'job', 'String'>;
    readonly title: FieldRef<'job', 'String'>;
    readonly description: FieldRef<'job', 'String'>;
    readonly recruiter_id: FieldRef<'job', 'String'>;
    readonly location: FieldRef<'job', 'String'>;
    readonly salary: FieldRef<'job', 'Int'>;
    readonly job_type: FieldRef<'job', 'String'>;
    readonly posted_date: FieldRef<'job', 'DateTime'>;
    readonly created_at: FieldRef<'job', 'DateTime'>;
    readonly updated_at: FieldRef<'job', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * job findUnique
   */
  export type jobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobInclude<ExtArgs> | null;
    /**
     * Filter, which job to fetch.
     */
    where: jobWhereUniqueInput;
  };

  /**
   * job findUniqueOrThrow
   */
  export type jobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobInclude<ExtArgs> | null;
    /**
     * Filter, which job to fetch.
     */
    where: jobWhereUniqueInput;
  };

  /**
   * job findFirst
   */
  export type jobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobInclude<ExtArgs> | null;
    /**
     * Filter, which job to fetch.
     */
    where?: jobWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobOrderByWithRelationInput | jobOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for jobs.
     */
    cursor?: jobWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` jobs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[];
  };

  /**
   * job findFirstOrThrow
   */
  export type jobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobInclude<ExtArgs> | null;
    /**
     * Filter, which job to fetch.
     */
    where?: jobWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobOrderByWithRelationInput | jobOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for jobs.
     */
    cursor?: jobWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` jobs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[];
  };

  /**
   * job findMany
   */
  export type jobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobInclude<ExtArgs> | null;
    /**
     * Filter, which jobs to fetch.
     */
    where?: jobWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobOrderByWithRelationInput | jobOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing jobs.
     */
    cursor?: jobWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` jobs.
     */
    skip?: number;
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[];
  };

  /**
   * job create
   */
  export type jobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobInclude<ExtArgs> | null;
    /**
     * The data needed to create a job.
     */
    data: XOR<jobCreateInput, jobUncheckedCreateInput>;
  };

  /**
   * job createMany
   */
  export type jobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many jobs.
     */
    data: jobCreateManyInput | jobCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * job update
   */
  export type jobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobInclude<ExtArgs> | null;
    /**
     * The data needed to update a job.
     */
    data: XOR<jobUpdateInput, jobUncheckedUpdateInput>;
    /**
     * Choose, which job to update.
     */
    where: jobWhereUniqueInput;
  };

  /**
   * job updateMany
   */
  export type jobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update jobs.
     */
    data: XOR<jobUpdateManyMutationInput, jobUncheckedUpdateManyInput>;
    /**
     * Filter which jobs to update
     */
    where?: jobWhereInput;
  };

  /**
   * job upsert
   */
  export type jobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobInclude<ExtArgs> | null;
    /**
     * The filter to search for the job to update in case it exists.
     */
    where: jobWhereUniqueInput;
    /**
     * In case the job found by the `where` argument doesn't exist, create a new job with this data.
     */
    create: XOR<jobCreateInput, jobUncheckedCreateInput>;
    /**
     * In case the job was found with the provided `where` argument, update it with this data.
     */
    update: XOR<jobUpdateInput, jobUncheckedUpdateInput>;
  };

  /**
   * job delete
   */
  export type jobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobInclude<ExtArgs> | null;
    /**
     * Filter which job to delete.
     */
    where: jobWhereUniqueInput;
  };

  /**
   * job deleteMany
   */
  export type jobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jobs to delete
     */
    where?: jobWhereInput;
  };

  /**
   * job.application
   */
  export type job$applicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicationInclude<ExtArgs> | null;
    where?: applicationWhereInput;
    orderBy?: applicationOrderByWithRelationInput | applicationOrderByWithRelationInput[];
    cursor?: applicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[];
  };

  /**
   * job without action
   */
  export type jobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobInclude<ExtArgs> | null;
  };

  /**
   * Model job_seeker
   */

  export type AggregateJob_seeker = {
    _count: Job_seekerCountAggregateOutputType | null;
    _avg: Job_seekerAvgAggregateOutputType | null;
    _sum: Job_seekerSumAggregateOutputType | null;
    _min: Job_seekerMinAggregateOutputType | null;
    _max: Job_seekerMaxAggregateOutputType | null;
  };

  export type Job_seekerAvgAggregateOutputType = {
    experience_years: number | null;
  };

  export type Job_seekerSumAggregateOutputType = {
    experience_years: number | null;
  };

  export type Job_seekerMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    resume: string | null;
    skills: string | null;
    experience_years: number | null;
    education_level: string | null;
    preferred_job_type: string | null;
    preferred_location: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Job_seekerMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    resume: string | null;
    skills: string | null;
    experience_years: number | null;
    education_level: string | null;
    preferred_job_type: string | null;
    preferred_location: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Job_seekerCountAggregateOutputType = {
    id: number;
    user_id: number;
    resume: number;
    skills: number;
    experience_years: number;
    education_level: number;
    preferred_job_type: number;
    preferred_location: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Job_seekerAvgAggregateInputType = {
    experience_years?: true;
  };

  export type Job_seekerSumAggregateInputType = {
    experience_years?: true;
  };

  export type Job_seekerMinAggregateInputType = {
    id?: true;
    user_id?: true;
    resume?: true;
    skills?: true;
    experience_years?: true;
    education_level?: true;
    preferred_job_type?: true;
    preferred_location?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Job_seekerMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    resume?: true;
    skills?: true;
    experience_years?: true;
    education_level?: true;
    preferred_job_type?: true;
    preferred_location?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Job_seekerCountAggregateInputType = {
    id?: true;
    user_id?: true;
    resume?: true;
    skills?: true;
    experience_years?: true;
    education_level?: true;
    preferred_job_type?: true;
    preferred_location?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Job_seekerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which job_seeker to aggregate.
     */
    where?: job_seekerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of job_seekers to fetch.
     */
    orderBy?: job_seekerOrderByWithRelationInput | job_seekerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: job_seekerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` job_seekers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` job_seekers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned job_seekers
     **/
    _count?: true | Job_seekerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Job_seekerAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Job_seekerSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Job_seekerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Job_seekerMaxAggregateInputType;
  };

  export type GetJob_seekerAggregateType<T extends Job_seekerAggregateArgs> = {
    [P in keyof T & keyof AggregateJob_seeker]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob_seeker[P]>
      : GetScalarType<T[P], AggregateJob_seeker[P]>;
  };

  export type job_seekerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: job_seekerWhereInput;
    orderBy?: job_seekerOrderByWithAggregationInput | job_seekerOrderByWithAggregationInput[];
    by: Job_seekerScalarFieldEnum[] | Job_seekerScalarFieldEnum;
    having?: job_seekerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Job_seekerCountAggregateInputType | true;
    _avg?: Job_seekerAvgAggregateInputType;
    _sum?: Job_seekerSumAggregateInputType;
    _min?: Job_seekerMinAggregateInputType;
    _max?: Job_seekerMaxAggregateInputType;
  };

  export type Job_seekerGroupByOutputType = {
    id: string;
    user_id: string;
    resume: string | null;
    skills: string | null;
    experience_years: number | null;
    education_level: string | null;
    preferred_job_type: string | null;
    preferred_location: string | null;
    created_at: Date;
    updated_at: Date;
    _count: Job_seekerCountAggregateOutputType | null;
    _avg: Job_seekerAvgAggregateOutputType | null;
    _sum: Job_seekerSumAggregateOutputType | null;
    _min: Job_seekerMinAggregateOutputType | null;
    _max: Job_seekerMaxAggregateOutputType | null;
  };

  type GetJob_seekerGroupByPayload<T extends job_seekerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Job_seekerGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Job_seekerGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Job_seekerGroupByOutputType[P]>
          : GetScalarType<T[P], Job_seekerGroupByOutputType[P]>;
      }
    >
  >;

  export type job_seekerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        user_id?: boolean;
        resume?: boolean;
        skills?: boolean;
        experience_years?: boolean;
        education_level?: boolean;
        preferred_job_type?: boolean;
        preferred_location?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        application?: boolean | job_seeker$applicationArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
        _count?: boolean | Job_seekerCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['job_seeker']
    >;

  export type job_seekerSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    resume?: boolean;
    skills?: boolean;
    experience_years?: boolean;
    education_level?: boolean;
    preferred_job_type?: boolean;
    preferred_location?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type job_seekerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | job_seeker$applicationArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    _count?: boolean | Job_seekerCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $job_seekerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'job_seeker';
    objects: {
      application: Prisma.$applicationPayload<ExtArgs>[];
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        resume: string | null;
        skills: string | null;
        experience_years: number | null;
        education_level: string | null;
        preferred_job_type: string | null;
        preferred_location: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['job_seeker']
    >;
    composites: {};
  };

  type job_seekerGetPayload<S extends boolean | null | undefined | job_seekerDefaultArgs> = $Result.GetResult<
    Prisma.$job_seekerPayload,
    S
  >;

  type job_seekerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    job_seekerFindManyArgs,
    'select' | 'include'
  > & {
    select?: Job_seekerCountAggregateInputType | true;
  };

  export interface job_seekerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['job_seeker']; meta: { name: 'job_seeker' } };
    /**
     * Find zero or one Job_seeker that matches the filter.
     * @param {job_seekerFindUniqueArgs} args - Arguments to find a Job_seeker
     * @example
     * // Get one Job_seeker
     * const job_seeker = await prisma.job_seeker.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends job_seekerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, job_seekerFindUniqueArgs<ExtArgs>>,
    ): Prisma__job_seekerClient<
      $Result.GetResult<Prisma.$job_seekerPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Job_seeker that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {job_seekerFindUniqueOrThrowArgs} args - Arguments to find a Job_seeker
     * @example
     * // Get one Job_seeker
     * const job_seeker = await prisma.job_seeker.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends job_seekerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, job_seekerFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__job_seekerClient<
      $Result.GetResult<Prisma.$job_seekerPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Job_seeker that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_seekerFindFirstArgs} args - Arguments to find a Job_seeker
     * @example
     * // Get one Job_seeker
     * const job_seeker = await prisma.job_seeker.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends job_seekerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, job_seekerFindFirstArgs<ExtArgs>>,
    ): Prisma__job_seekerClient<
      $Result.GetResult<Prisma.$job_seekerPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Job_seeker that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_seekerFindFirstOrThrowArgs} args - Arguments to find a Job_seeker
     * @example
     * // Get one Job_seeker
     * const job_seeker = await prisma.job_seeker.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends job_seekerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, job_seekerFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__job_seekerClient<
      $Result.GetResult<Prisma.$job_seekerPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Job_seekers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_seekerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Job_seekers
     * const job_seekers = await prisma.job_seeker.findMany()
     *
     * // Get first 10 Job_seekers
     * const job_seekers = await prisma.job_seeker.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const job_seekerWithIdOnly = await prisma.job_seeker.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends job_seekerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, job_seekerFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$job_seekerPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Job_seeker.
     * @param {job_seekerCreateArgs} args - Arguments to create a Job_seeker.
     * @example
     * // Create one Job_seeker
     * const Job_seeker = await prisma.job_seeker.create({
     *   data: {
     *     // ... data to create a Job_seeker
     *   }
     * })
     *
     **/
    create<T extends job_seekerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, job_seekerCreateArgs<ExtArgs>>,
    ): Prisma__job_seekerClient<$Result.GetResult<Prisma.$job_seekerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Job_seekers.
     *     @param {job_seekerCreateManyArgs} args - Arguments to create many Job_seekers.
     *     @example
     *     // Create many Job_seekers
     *     const job_seeker = await prisma.job_seeker.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends job_seekerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, job_seekerCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Job_seeker.
     * @param {job_seekerDeleteArgs} args - Arguments to delete one Job_seeker.
     * @example
     * // Delete one Job_seeker
     * const Job_seeker = await prisma.job_seeker.delete({
     *   where: {
     *     // ... filter to delete one Job_seeker
     *   }
     * })
     *
     **/
    delete<T extends job_seekerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, job_seekerDeleteArgs<ExtArgs>>,
    ): Prisma__job_seekerClient<$Result.GetResult<Prisma.$job_seekerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Job_seeker.
     * @param {job_seekerUpdateArgs} args - Arguments to update one Job_seeker.
     * @example
     * // Update one Job_seeker
     * const job_seeker = await prisma.job_seeker.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends job_seekerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, job_seekerUpdateArgs<ExtArgs>>,
    ): Prisma__job_seekerClient<$Result.GetResult<Prisma.$job_seekerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Job_seekers.
     * @param {job_seekerDeleteManyArgs} args - Arguments to filter Job_seekers to delete.
     * @example
     * // Delete a few Job_seekers
     * const { count } = await prisma.job_seeker.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends job_seekerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, job_seekerDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Job_seekers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_seekerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Job_seekers
     * const job_seeker = await prisma.job_seeker.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends job_seekerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, job_seekerUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Job_seeker.
     * @param {job_seekerUpsertArgs} args - Arguments to update or create a Job_seeker.
     * @example
     * // Update or create a Job_seeker
     * const job_seeker = await prisma.job_seeker.upsert({
     *   create: {
     *     // ... data to create a Job_seeker
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job_seeker we want to update
     *   }
     * })
     **/
    upsert<T extends job_seekerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, job_seekerUpsertArgs<ExtArgs>>,
    ): Prisma__job_seekerClient<$Result.GetResult<Prisma.$job_seekerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Job_seekers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_seekerCountArgs} args - Arguments to filter Job_seekers to count.
     * @example
     * // Count the number of Job_seekers
     * const count = await prisma.job_seeker.count({
     *   where: {
     *     // ... the filter for the Job_seekers we want to count
     *   }
     * })
     **/
    count<T extends job_seekerCountArgs>(
      args?: Subset<T, job_seekerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Job_seekerCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Job_seeker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_seekerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Job_seekerAggregateArgs>(
      args: Subset<T, Job_seekerAggregateArgs>,
    ): Prisma.PrismaPromise<GetJob_seekerAggregateType<T>>;

    /**
     * Group by Job_seeker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_seekerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends job_seekerGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: job_seekerGroupByArgs['orderBy'] }
        : { orderBy?: job_seekerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, job_seekerGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetJob_seekerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the job_seeker model
     */
    readonly fields: job_seekerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for job_seeker.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__job_seekerClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    application<T extends job_seeker$applicationArgs<ExtArgs> = {}>(
      args?: Subset<T, job_seeker$applicationArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$applicationPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the job_seeker model
   */
  interface job_seekerFieldRefs {
    readonly id: FieldRef<'job_seeker', 'String'>;
    readonly user_id: FieldRef<'job_seeker', 'String'>;
    readonly resume: FieldRef<'job_seeker', 'String'>;
    readonly skills: FieldRef<'job_seeker', 'String'>;
    readonly experience_years: FieldRef<'job_seeker', 'Int'>;
    readonly education_level: FieldRef<'job_seeker', 'String'>;
    readonly preferred_job_type: FieldRef<'job_seeker', 'String'>;
    readonly preferred_location: FieldRef<'job_seeker', 'String'>;
    readonly created_at: FieldRef<'job_seeker', 'DateTime'>;
    readonly updated_at: FieldRef<'job_seeker', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * job_seeker findUnique
   */
  export type job_seekerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_seeker
     */
    select?: job_seekerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_seekerInclude<ExtArgs> | null;
    /**
     * Filter, which job_seeker to fetch.
     */
    where: job_seekerWhereUniqueInput;
  };

  /**
   * job_seeker findUniqueOrThrow
   */
  export type job_seekerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_seeker
     */
    select?: job_seekerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_seekerInclude<ExtArgs> | null;
    /**
     * Filter, which job_seeker to fetch.
     */
    where: job_seekerWhereUniqueInput;
  };

  /**
   * job_seeker findFirst
   */
  export type job_seekerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_seeker
     */
    select?: job_seekerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_seekerInclude<ExtArgs> | null;
    /**
     * Filter, which job_seeker to fetch.
     */
    where?: job_seekerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of job_seekers to fetch.
     */
    orderBy?: job_seekerOrderByWithRelationInput | job_seekerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for job_seekers.
     */
    cursor?: job_seekerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` job_seekers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` job_seekers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of job_seekers.
     */
    distinct?: Job_seekerScalarFieldEnum | Job_seekerScalarFieldEnum[];
  };

  /**
   * job_seeker findFirstOrThrow
   */
  export type job_seekerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_seeker
     */
    select?: job_seekerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_seekerInclude<ExtArgs> | null;
    /**
     * Filter, which job_seeker to fetch.
     */
    where?: job_seekerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of job_seekers to fetch.
     */
    orderBy?: job_seekerOrderByWithRelationInput | job_seekerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for job_seekers.
     */
    cursor?: job_seekerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` job_seekers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` job_seekers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of job_seekers.
     */
    distinct?: Job_seekerScalarFieldEnum | Job_seekerScalarFieldEnum[];
  };

  /**
   * job_seeker findMany
   */
  export type job_seekerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_seeker
     */
    select?: job_seekerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_seekerInclude<ExtArgs> | null;
    /**
     * Filter, which job_seekers to fetch.
     */
    where?: job_seekerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of job_seekers to fetch.
     */
    orderBy?: job_seekerOrderByWithRelationInput | job_seekerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing job_seekers.
     */
    cursor?: job_seekerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` job_seekers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` job_seekers.
     */
    skip?: number;
    distinct?: Job_seekerScalarFieldEnum | Job_seekerScalarFieldEnum[];
  };

  /**
   * job_seeker create
   */
  export type job_seekerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_seeker
     */
    select?: job_seekerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_seekerInclude<ExtArgs> | null;
    /**
     * The data needed to create a job_seeker.
     */
    data: XOR<job_seekerCreateInput, job_seekerUncheckedCreateInput>;
  };

  /**
   * job_seeker createMany
   */
  export type job_seekerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many job_seekers.
     */
    data: job_seekerCreateManyInput | job_seekerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * job_seeker update
   */
  export type job_seekerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_seeker
     */
    select?: job_seekerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_seekerInclude<ExtArgs> | null;
    /**
     * The data needed to update a job_seeker.
     */
    data: XOR<job_seekerUpdateInput, job_seekerUncheckedUpdateInput>;
    /**
     * Choose, which job_seeker to update.
     */
    where: job_seekerWhereUniqueInput;
  };

  /**
   * job_seeker updateMany
   */
  export type job_seekerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update job_seekers.
     */
    data: XOR<job_seekerUpdateManyMutationInput, job_seekerUncheckedUpdateManyInput>;
    /**
     * Filter which job_seekers to update
     */
    where?: job_seekerWhereInput;
  };

  /**
   * job_seeker upsert
   */
  export type job_seekerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_seeker
     */
    select?: job_seekerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_seekerInclude<ExtArgs> | null;
    /**
     * The filter to search for the job_seeker to update in case it exists.
     */
    where: job_seekerWhereUniqueInput;
    /**
     * In case the job_seeker found by the `where` argument doesn't exist, create a new job_seeker with this data.
     */
    create: XOR<job_seekerCreateInput, job_seekerUncheckedCreateInput>;
    /**
     * In case the job_seeker was found with the provided `where` argument, update it with this data.
     */
    update: XOR<job_seekerUpdateInput, job_seekerUncheckedUpdateInput>;
  };

  /**
   * job_seeker delete
   */
  export type job_seekerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_seeker
     */
    select?: job_seekerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_seekerInclude<ExtArgs> | null;
    /**
     * Filter which job_seeker to delete.
     */
    where: job_seekerWhereUniqueInput;
  };

  /**
   * job_seeker deleteMany
   */
  export type job_seekerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which job_seekers to delete
     */
    where?: job_seekerWhereInput;
  };

  /**
   * job_seeker.application
   */
  export type job_seeker$applicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicationInclude<ExtArgs> | null;
    where?: applicationWhereInput;
    orderBy?: applicationOrderByWithRelationInput | applicationOrderByWithRelationInput[];
    cursor?: applicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[];
  };

  /**
   * job_seeker without action
   */
  export type job_seekerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_seeker
     */
    select?: job_seekerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_seekerInclude<ExtArgs> | null;
  };

  /**
   * Model organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
  };

  export type OrganizationMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    country: string | null;
    postal_code: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type OrganizationMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    country: string | null;
    postal_code: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type OrganizationCountAggregateOutputType = {
    id: number;
    description: number;
    address: number;
    city: number;
    state: number;
    country: number;
    postal_code: number;
    name: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    tenant_id: number;
    _all: number;
  };

  export type OrganizationMinAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    city?: true;
    state?: true;
    country?: true;
    postal_code?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type OrganizationMaxAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    city?: true;
    state?: true;
    country?: true;
    postal_code?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type OrganizationCountAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    city?: true;
    state?: true;
    country?: true;
    postal_code?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organization to aggregate.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned organizations
     **/
    _count?: true | OrganizationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OrganizationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OrganizationMaxAggregateInputType;
  };

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
    [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>;
  };

  export type organizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: organizationWhereInput;
    orderBy?: organizationOrderByWithAggregationInput | organizationOrderByWithAggregationInput[];
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum;
    having?: organizationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrganizationCountAggregateInputType | true;
    _min?: OrganizationMinAggregateInputType;
    _max?: OrganizationMaxAggregateInputType;
  };

  export type OrganizationGroupByOutputType = {
    id: string;
    description: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    country: string | null;
    postal_code: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    tenant_id: string;
    _count: OrganizationCountAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
  };

  type GetOrganizationGroupByPayload<T extends organizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> & {
        [P in keyof T & keyof OrganizationGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
          : GetScalarType<T[P], OrganizationGroupByOutputType[P]>;
      }
    >
  >;

  export type organizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        description?: boolean;
        address?: boolean;
        city?: boolean;
        state?: boolean;
        country?: boolean;
        postal_code?: boolean;
        name?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user_id?: boolean;
        tenant_id?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
        recruiter?: boolean | organization$recruiterArgs<ExtArgs>;
        _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['organization']
    >;

  export type organizationSelectScalar = {
    id?: boolean;
    description?: boolean;
    address?: boolean;
    city?: boolean;
    state?: boolean;
    country?: boolean;
    postal_code?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    tenant_id?: boolean;
  };

  export type organizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
    recruiter?: boolean | organization$recruiterArgs<ExtArgs>;
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $organizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'organization';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
      recruiter: Prisma.$recruiterPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        address: string | null;
        city: string | null;
        state: string | null;
        country: string | null;
        postal_code: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        tenant_id: string;
      },
      ExtArgs['result']['organization']
    >;
    composites: {};
  };

  type organizationGetPayload<S extends boolean | null | undefined | organizationDefaultArgs> = $Result.GetResult<
    Prisma.$organizationPayload,
    S
  >;

  type organizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    organizationFindManyArgs,
    'select' | 'include'
  > & {
    select?: OrganizationCountAggregateInputType | true;
  };

  export interface organizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['organization']; meta: { name: 'organization' } };
    /**
     * Find zero or one Organization that matches the filter.
     * @param {organizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends organizationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, organizationFindUniqueArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Organization that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {organizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends organizationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends organizationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindFirstArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends organizationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     *
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends organizationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Organization.
     * @param {organizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     *
     **/
    create<T extends organizationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, organizationCreateArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Organizations.
     *     @param {organizationCreateManyArgs} args - Arguments to create many Organizations.
     *     @example
     *     // Create many Organizations
     *     const organization = await prisma.organization.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends organizationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Organization.
     * @param {organizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     *
     **/
    delete<T extends organizationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, organizationDeleteArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Organization.
     * @param {organizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends organizationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpdateArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Organizations.
     * @param {organizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends organizationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends organizationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Organization.
     * @param {organizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     **/
    upsert<T extends organizationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpsertArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
     **/
    count<T extends organizationCountArgs>(
      args?: Subset<T, organizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends OrganizationAggregateArgs>(
      args: Subset<T, OrganizationAggregateArgs>,
    ): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>;

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends organizationGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: organizationGroupByArgs['orderBy'] }
        : { orderBy?: organizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, organizationGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the organization model
     */
    readonly fields: organizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__organizationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    recruiter<T extends organization$recruiterArgs<ExtArgs> = {}>(
      args?: Subset<T, organization$recruiterArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recruiterPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the organization model
   */
  interface organizationFieldRefs {
    readonly id: FieldRef<'organization', 'String'>;
    readonly description: FieldRef<'organization', 'String'>;
    readonly address: FieldRef<'organization', 'String'>;
    readonly city: FieldRef<'organization', 'String'>;
    readonly state: FieldRef<'organization', 'String'>;
    readonly country: FieldRef<'organization', 'String'>;
    readonly postal_code: FieldRef<'organization', 'String'>;
    readonly name: FieldRef<'organization', 'String'>;
    readonly created_at: FieldRef<'organization', 'DateTime'>;
    readonly updated_at: FieldRef<'organization', 'DateTime'>;
    readonly user_id: FieldRef<'organization', 'String'>;
    readonly tenant_id: FieldRef<'organization', 'String'>;
  }

  // Custom InputTypes

  /**
   * organization findUnique
   */
  export type organizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization findUniqueOrThrow
   */
  export type organizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization findFirst
   */
  export type organizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization findFirstOrThrow
   */
  export type organizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization findMany
   */
  export type organizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organizations to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization create
   */
  export type organizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The data needed to create a organization.
     */
    data: XOR<organizationCreateInput, organizationUncheckedCreateInput>;
  };

  /**
   * organization createMany
   */
  export type organizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many organizations.
     */
    data: organizationCreateManyInput | organizationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * organization update
   */
  export type organizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The data needed to update a organization.
     */
    data: XOR<organizationUpdateInput, organizationUncheckedUpdateInput>;
    /**
     * Choose, which organization to update.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization updateMany
   */
  export type organizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update organizations.
     */
    data: XOR<organizationUpdateManyMutationInput, organizationUncheckedUpdateManyInput>;
    /**
     * Filter which organizations to update
     */
    where?: organizationWhereInput;
  };

  /**
   * organization upsert
   */
  export type organizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The filter to search for the organization to update in case it exists.
     */
    where: organizationWhereUniqueInput;
    /**
     * In case the organization found by the `where` argument doesn't exist, create a new organization with this data.
     */
    create: XOR<organizationCreateInput, organizationUncheckedCreateInput>;
    /**
     * In case the organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<organizationUpdateInput, organizationUncheckedUpdateInput>;
  };

  /**
   * organization delete
   */
  export type organizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter which organization to delete.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization deleteMany
   */
  export type organizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organizations to delete
     */
    where?: organizationWhereInput;
  };

  /**
   * organization.recruiter
   */
  export type organization$recruiterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recruiter
     */
    select?: recruiterSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recruiterInclude<ExtArgs> | null;
    where?: recruiterWhereInput;
    orderBy?: recruiterOrderByWithRelationInput | recruiterOrderByWithRelationInput[];
    cursor?: recruiterWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: RecruiterScalarFieldEnum | RecruiterScalarFieldEnum[];
  };

  /**
   * organization without action
   */
  export type organizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
  };

  /**
   * Model recruiter
   */

  export type AggregateRecruiter = {
    _count: RecruiterCountAggregateOutputType | null;
    _avg: RecruiterAvgAggregateOutputType | null;
    _sum: RecruiterSumAggregateOutputType | null;
    _min: RecruiterMinAggregateOutputType | null;
    _max: RecruiterMaxAggregateOutputType | null;
  };

  export type RecruiterAvgAggregateOutputType = {
    job_posted: number | null;
    job_filled: number | null;
    active_jobs: number | null;
    inactive_jobs: number | null;
  };

  export type RecruiterSumAggregateOutputType = {
    job_posted: number | null;
    job_filled: number | null;
    active_jobs: number | null;
    inactive_jobs: number | null;
  };

  export type RecruiterMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    organization_id: string | null;
    job_posted: number | null;
    job_filled: number | null;
    active_jobs: number | null;
    inactive_jobs: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type RecruiterMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    organization_id: string | null;
    job_posted: number | null;
    job_filled: number | null;
    active_jobs: number | null;
    inactive_jobs: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type RecruiterCountAggregateOutputType = {
    id: number;
    user_id: number;
    organization_id: number;
    job_posted: number;
    job_filled: number;
    active_jobs: number;
    inactive_jobs: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type RecruiterAvgAggregateInputType = {
    job_posted?: true;
    job_filled?: true;
    active_jobs?: true;
    inactive_jobs?: true;
  };

  export type RecruiterSumAggregateInputType = {
    job_posted?: true;
    job_filled?: true;
    active_jobs?: true;
    inactive_jobs?: true;
  };

  export type RecruiterMinAggregateInputType = {
    id?: true;
    user_id?: true;
    organization_id?: true;
    job_posted?: true;
    job_filled?: true;
    active_jobs?: true;
    inactive_jobs?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type RecruiterMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    organization_id?: true;
    job_posted?: true;
    job_filled?: true;
    active_jobs?: true;
    inactive_jobs?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type RecruiterCountAggregateInputType = {
    id?: true;
    user_id?: true;
    organization_id?: true;
    job_posted?: true;
    job_filled?: true;
    active_jobs?: true;
    inactive_jobs?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type RecruiterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recruiter to aggregate.
     */
    where?: recruiterWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of recruiters to fetch.
     */
    orderBy?: recruiterOrderByWithRelationInput | recruiterOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: recruiterWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` recruiters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` recruiters.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned recruiters
     **/
    _count?: true | RecruiterCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: RecruiterAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: RecruiterSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: RecruiterMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: RecruiterMaxAggregateInputType;
  };

  export type GetRecruiterAggregateType<T extends RecruiterAggregateArgs> = {
    [P in keyof T & keyof AggregateRecruiter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecruiter[P]>
      : GetScalarType<T[P], AggregateRecruiter[P]>;
  };

  export type recruiterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recruiterWhereInput;
    orderBy?: recruiterOrderByWithAggregationInput | recruiterOrderByWithAggregationInput[];
    by: RecruiterScalarFieldEnum[] | RecruiterScalarFieldEnum;
    having?: recruiterScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RecruiterCountAggregateInputType | true;
    _avg?: RecruiterAvgAggregateInputType;
    _sum?: RecruiterSumAggregateInputType;
    _min?: RecruiterMinAggregateInputType;
    _max?: RecruiterMaxAggregateInputType;
  };

  export type RecruiterGroupByOutputType = {
    id: string;
    user_id: string;
    organization_id: string;
    job_posted: number | null;
    job_filled: number | null;
    active_jobs: number | null;
    inactive_jobs: number | null;
    created_at: Date;
    updated_at: Date;
    _count: RecruiterCountAggregateOutputType | null;
    _avg: RecruiterAvgAggregateOutputType | null;
    _sum: RecruiterSumAggregateOutputType | null;
    _min: RecruiterMinAggregateOutputType | null;
    _max: RecruiterMaxAggregateOutputType | null;
  };

  type GetRecruiterGroupByPayload<T extends recruiterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecruiterGroupByOutputType, T['by']> & {
        [P in keyof T & keyof RecruiterGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], RecruiterGroupByOutputType[P]>
          : GetScalarType<T[P], RecruiterGroupByOutputType[P]>;
      }
    >
  >;

  export type recruiterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        user_id?: boolean;
        organization_id?: boolean;
        job_posted?: boolean;
        job_filled?: boolean;
        active_jobs?: boolean;
        inactive_jobs?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        job?: boolean | recruiter$jobArgs<ExtArgs>;
        organization?: boolean | organizationDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
        _count?: boolean | RecruiterCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['recruiter']
    >;

  export type recruiterSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    organization_id?: boolean;
    job_posted?: boolean;
    job_filled?: boolean;
    active_jobs?: boolean;
    inactive_jobs?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type recruiterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | recruiter$jobArgs<ExtArgs>;
    organization?: boolean | organizationDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    _count?: boolean | RecruiterCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $recruiterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'recruiter';
    objects: {
      job: Prisma.$jobPayload<ExtArgs>[];
      organization: Prisma.$organizationPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        organization_id: string;
        job_posted: number | null;
        job_filled: number | null;
        active_jobs: number | null;
        inactive_jobs: number | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['recruiter']
    >;
    composites: {};
  };

  type recruiterGetPayload<S extends boolean | null | undefined | recruiterDefaultArgs> = $Result.GetResult<
    Prisma.$recruiterPayload,
    S
  >;

  type recruiterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    recruiterFindManyArgs,
    'select' | 'include'
  > & {
    select?: RecruiterCountAggregateInputType | true;
  };

  export interface recruiterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['recruiter']; meta: { name: 'recruiter' } };
    /**
     * Find zero or one Recruiter that matches the filter.
     * @param {recruiterFindUniqueArgs} args - Arguments to find a Recruiter
     * @example
     * // Get one Recruiter
     * const recruiter = await prisma.recruiter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends recruiterFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, recruiterFindUniqueArgs<ExtArgs>>,
    ): Prisma__recruiterClient<
      $Result.GetResult<Prisma.$recruiterPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Recruiter that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {recruiterFindUniqueOrThrowArgs} args - Arguments to find a Recruiter
     * @example
     * // Get one Recruiter
     * const recruiter = await prisma.recruiter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends recruiterFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, recruiterFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__recruiterClient<
      $Result.GetResult<Prisma.$recruiterPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Recruiter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recruiterFindFirstArgs} args - Arguments to find a Recruiter
     * @example
     * // Get one Recruiter
     * const recruiter = await prisma.recruiter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends recruiterFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, recruiterFindFirstArgs<ExtArgs>>,
    ): Prisma__recruiterClient<
      $Result.GetResult<Prisma.$recruiterPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Recruiter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recruiterFindFirstOrThrowArgs} args - Arguments to find a Recruiter
     * @example
     * // Get one Recruiter
     * const recruiter = await prisma.recruiter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends recruiterFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, recruiterFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__recruiterClient<
      $Result.GetResult<Prisma.$recruiterPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Recruiters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recruiterFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recruiters
     * const recruiters = await prisma.recruiter.findMany()
     *
     * // Get first 10 Recruiters
     * const recruiters = await prisma.recruiter.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const recruiterWithIdOnly = await prisma.recruiter.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends recruiterFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, recruiterFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recruiterPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Recruiter.
     * @param {recruiterCreateArgs} args - Arguments to create a Recruiter.
     * @example
     * // Create one Recruiter
     * const Recruiter = await prisma.recruiter.create({
     *   data: {
     *     // ... data to create a Recruiter
     *   }
     * })
     *
     **/
    create<T extends recruiterCreateArgs<ExtArgs>>(
      args: SelectSubset<T, recruiterCreateArgs<ExtArgs>>,
    ): Prisma__recruiterClient<$Result.GetResult<Prisma.$recruiterPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Recruiters.
     *     @param {recruiterCreateManyArgs} args - Arguments to create many Recruiters.
     *     @example
     *     // Create many Recruiters
     *     const recruiter = await prisma.recruiter.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends recruiterCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, recruiterCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Recruiter.
     * @param {recruiterDeleteArgs} args - Arguments to delete one Recruiter.
     * @example
     * // Delete one Recruiter
     * const Recruiter = await prisma.recruiter.delete({
     *   where: {
     *     // ... filter to delete one Recruiter
     *   }
     * })
     *
     **/
    delete<T extends recruiterDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, recruiterDeleteArgs<ExtArgs>>,
    ): Prisma__recruiterClient<$Result.GetResult<Prisma.$recruiterPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Recruiter.
     * @param {recruiterUpdateArgs} args - Arguments to update one Recruiter.
     * @example
     * // Update one Recruiter
     * const recruiter = await prisma.recruiter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends recruiterUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, recruiterUpdateArgs<ExtArgs>>,
    ): Prisma__recruiterClient<$Result.GetResult<Prisma.$recruiterPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Recruiters.
     * @param {recruiterDeleteManyArgs} args - Arguments to filter Recruiters to delete.
     * @example
     * // Delete a few Recruiters
     * const { count } = await prisma.recruiter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends recruiterDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, recruiterDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Recruiters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recruiterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recruiters
     * const recruiter = await prisma.recruiter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends recruiterUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, recruiterUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Recruiter.
     * @param {recruiterUpsertArgs} args - Arguments to update or create a Recruiter.
     * @example
     * // Update or create a Recruiter
     * const recruiter = await prisma.recruiter.upsert({
     *   create: {
     *     // ... data to create a Recruiter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recruiter we want to update
     *   }
     * })
     **/
    upsert<T extends recruiterUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, recruiterUpsertArgs<ExtArgs>>,
    ): Prisma__recruiterClient<$Result.GetResult<Prisma.$recruiterPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Recruiters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recruiterCountArgs} args - Arguments to filter Recruiters to count.
     * @example
     * // Count the number of Recruiters
     * const count = await prisma.recruiter.count({
     *   where: {
     *     // ... the filter for the Recruiters we want to count
     *   }
     * })
     **/
    count<T extends recruiterCountArgs>(
      args?: Subset<T, recruiterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecruiterCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Recruiter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecruiterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends RecruiterAggregateArgs>(
      args: Subset<T, RecruiterAggregateArgs>,
    ): Prisma.PrismaPromise<GetRecruiterAggregateType<T>>;

    /**
     * Group by Recruiter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recruiterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends recruiterGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: recruiterGroupByArgs['orderBy'] }
        : { orderBy?: recruiterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, recruiterGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetRecruiterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the recruiter model
     */
    readonly fields: recruiterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for recruiter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__recruiterClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    job<T extends recruiter$jobArgs<ExtArgs> = {}>(
      args?: Subset<T, recruiter$jobArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, 'findMany'> | Null>;

    organization<T extends organizationDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, organizationDefaultArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the recruiter model
   */
  interface recruiterFieldRefs {
    readonly id: FieldRef<'recruiter', 'String'>;
    readonly user_id: FieldRef<'recruiter', 'String'>;
    readonly organization_id: FieldRef<'recruiter', 'String'>;
    readonly job_posted: FieldRef<'recruiter', 'Int'>;
    readonly job_filled: FieldRef<'recruiter', 'Int'>;
    readonly active_jobs: FieldRef<'recruiter', 'Int'>;
    readonly inactive_jobs: FieldRef<'recruiter', 'Int'>;
    readonly created_at: FieldRef<'recruiter', 'DateTime'>;
    readonly updated_at: FieldRef<'recruiter', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * recruiter findUnique
   */
  export type recruiterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recruiter
     */
    select?: recruiterSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recruiterInclude<ExtArgs> | null;
    /**
     * Filter, which recruiter to fetch.
     */
    where: recruiterWhereUniqueInput;
  };

  /**
   * recruiter findUniqueOrThrow
   */
  export type recruiterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recruiter
     */
    select?: recruiterSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recruiterInclude<ExtArgs> | null;
    /**
     * Filter, which recruiter to fetch.
     */
    where: recruiterWhereUniqueInput;
  };

  /**
   * recruiter findFirst
   */
  export type recruiterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recruiter
     */
    select?: recruiterSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recruiterInclude<ExtArgs> | null;
    /**
     * Filter, which recruiter to fetch.
     */
    where?: recruiterWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of recruiters to fetch.
     */
    orderBy?: recruiterOrderByWithRelationInput | recruiterOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for recruiters.
     */
    cursor?: recruiterWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` recruiters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` recruiters.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of recruiters.
     */
    distinct?: RecruiterScalarFieldEnum | RecruiterScalarFieldEnum[];
  };

  /**
   * recruiter findFirstOrThrow
   */
  export type recruiterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recruiter
     */
    select?: recruiterSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recruiterInclude<ExtArgs> | null;
    /**
     * Filter, which recruiter to fetch.
     */
    where?: recruiterWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of recruiters to fetch.
     */
    orderBy?: recruiterOrderByWithRelationInput | recruiterOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for recruiters.
     */
    cursor?: recruiterWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` recruiters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` recruiters.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of recruiters.
     */
    distinct?: RecruiterScalarFieldEnum | RecruiterScalarFieldEnum[];
  };

  /**
   * recruiter findMany
   */
  export type recruiterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recruiter
     */
    select?: recruiterSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recruiterInclude<ExtArgs> | null;
    /**
     * Filter, which recruiters to fetch.
     */
    where?: recruiterWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of recruiters to fetch.
     */
    orderBy?: recruiterOrderByWithRelationInput | recruiterOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing recruiters.
     */
    cursor?: recruiterWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` recruiters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` recruiters.
     */
    skip?: number;
    distinct?: RecruiterScalarFieldEnum | RecruiterScalarFieldEnum[];
  };

  /**
   * recruiter create
   */
  export type recruiterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recruiter
     */
    select?: recruiterSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recruiterInclude<ExtArgs> | null;
    /**
     * The data needed to create a recruiter.
     */
    data: XOR<recruiterCreateInput, recruiterUncheckedCreateInput>;
  };

  /**
   * recruiter createMany
   */
  export type recruiterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many recruiters.
     */
    data: recruiterCreateManyInput | recruiterCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * recruiter update
   */
  export type recruiterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recruiter
     */
    select?: recruiterSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recruiterInclude<ExtArgs> | null;
    /**
     * The data needed to update a recruiter.
     */
    data: XOR<recruiterUpdateInput, recruiterUncheckedUpdateInput>;
    /**
     * Choose, which recruiter to update.
     */
    where: recruiterWhereUniqueInput;
  };

  /**
   * recruiter updateMany
   */
  export type recruiterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update recruiters.
     */
    data: XOR<recruiterUpdateManyMutationInput, recruiterUncheckedUpdateManyInput>;
    /**
     * Filter which recruiters to update
     */
    where?: recruiterWhereInput;
  };

  /**
   * recruiter upsert
   */
  export type recruiterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recruiter
     */
    select?: recruiterSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recruiterInclude<ExtArgs> | null;
    /**
     * The filter to search for the recruiter to update in case it exists.
     */
    where: recruiterWhereUniqueInput;
    /**
     * In case the recruiter found by the `where` argument doesn't exist, create a new recruiter with this data.
     */
    create: XOR<recruiterCreateInput, recruiterUncheckedCreateInput>;
    /**
     * In case the recruiter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<recruiterUpdateInput, recruiterUncheckedUpdateInput>;
  };

  /**
   * recruiter delete
   */
  export type recruiterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recruiter
     */
    select?: recruiterSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recruiterInclude<ExtArgs> | null;
    /**
     * Filter which recruiter to delete.
     */
    where: recruiterWhereUniqueInput;
  };

  /**
   * recruiter deleteMany
   */
  export type recruiterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recruiters to delete
     */
    where?: recruiterWhereInput;
  };

  /**
   * recruiter.job
   */
  export type recruiter$jobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobInclude<ExtArgs> | null;
    where?: jobWhereInput;
    orderBy?: jobOrderByWithRelationInput | jobOrderByWithRelationInput[];
    cursor?: jobWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[];
  };

  /**
   * recruiter without action
   */
  export type recruiterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recruiter
     */
    select?: recruiterSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recruiterInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    firstName: number;
    lastName: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      job_seeker?: boolean | user$job_seekerArgs<ExtArgs>;
      organization?: boolean | user$organizationArgs<ExtArgs>;
      recruiter?: boolean | user$recruiterArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job_seeker?: boolean | user$job_seekerArgs<ExtArgs>;
    organization?: boolean | user$organizationArgs<ExtArgs>;
    recruiter?: boolean | user$recruiterArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      job_seeker: Prisma.$job_seekerPayload<ExtArgs>[];
      organization: Prisma.$organizationPayload<ExtArgs>[];
      recruiter: Prisma.$recruiterPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    job_seeker<T extends user$job_seekerArgs<ExtArgs> = {}>(
      args?: Subset<T, user$job_seekerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$job_seekerPayload<ExtArgs>, T, 'findMany'> | Null>;

    organization<T extends user$organizationArgs<ExtArgs> = {}>(
      args?: Subset<T, user$organizationArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findMany'> | Null>;

    recruiter<T extends user$recruiterArgs<ExtArgs> = {}>(
      args?: Subset<T, user$recruiterArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recruiterPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly firstName: FieldRef<'user', 'String'>;
    readonly lastName: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.job_seeker
   */
  export type user$job_seekerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_seeker
     */
    select?: job_seekerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_seekerInclude<ExtArgs> | null;
    where?: job_seekerWhereInput;
    orderBy?: job_seekerOrderByWithRelationInput | job_seekerOrderByWithRelationInput[];
    cursor?: job_seekerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Job_seekerScalarFieldEnum | Job_seekerScalarFieldEnum[];
  };

  /**
   * user.organization
   */
  export type user$organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    where?: organizationWhereInput;
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    cursor?: organizationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * user.recruiter
   */
  export type user$recruiterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recruiter
     */
    select?: recruiterSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recruiterInclude<ExtArgs> | null;
    where?: recruiterWhereInput;
    orderBy?: recruiterOrderByWithRelationInput | recruiterOrderByWithRelationInput[];
    cursor?: recruiterWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: RecruiterScalarFieldEnum | RecruiterScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const ApplicationScalarFieldEnum: {
    id: 'id';
    job_seeker_id: 'job_seeker_id';
    job_id: 'job_id';
    application_date: 'application_date';
    status: 'status';
    resume: 'resume';
    cover_letter: 'cover_letter';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ApplicationScalarFieldEnum = (typeof ApplicationScalarFieldEnum)[keyof typeof ApplicationScalarFieldEnum];

  export const JobScalarFieldEnum: {
    id: 'id';
    title: 'title';
    description: 'description';
    recruiter_id: 'recruiter_id';
    location: 'location';
    salary: 'salary';
    job_type: 'job_type';
    posted_date: 'posted_date';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type JobScalarFieldEnum = (typeof JobScalarFieldEnum)[keyof typeof JobScalarFieldEnum];

  export const Job_seekerScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    resume: 'resume';
    skills: 'skills';
    experience_years: 'experience_years';
    education_level: 'education_level';
    preferred_job_type: 'preferred_job_type';
    preferred_location: 'preferred_location';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Job_seekerScalarFieldEnum = (typeof Job_seekerScalarFieldEnum)[keyof typeof Job_seekerScalarFieldEnum];

  export const OrganizationScalarFieldEnum: {
    id: 'id';
    description: 'description';
    address: 'address';
    city: 'city';
    state: 'state';
    country: 'country';
    postal_code: 'postal_code';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
  };

  export type OrganizationScalarFieldEnum =
    (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum];

  export const RecruiterScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    organization_id: 'organization_id';
    job_posted: 'job_posted';
    job_filled: 'job_filled';
    active_jobs: 'active_jobs';
    inactive_jobs: 'inactive_jobs';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type RecruiterScalarFieldEnum = (typeof RecruiterScalarFieldEnum)[keyof typeof RecruiterScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    firstName: 'firstName';
    lastName: 'lastName';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type applicationWhereInput = {
    AND?: applicationWhereInput | applicationWhereInput[];
    OR?: applicationWhereInput[];
    NOT?: applicationWhereInput | applicationWhereInput[];
    id?: UuidFilter<'application'> | string;
    job_seeker_id?: UuidFilter<'application'> | string;
    job_id?: UuidFilter<'application'> | string;
    application_date?: DateTimeNullableFilter<'application'> | Date | string | null;
    status?: StringNullableFilter<'application'> | string | null;
    resume?: StringNullableFilter<'application'> | string | null;
    cover_letter?: StringNullableFilter<'application'> | string | null;
    created_at?: DateTimeFilter<'application'> | Date | string;
    updated_at?: DateTimeFilter<'application'> | Date | string;
    job?: XOR<JobRelationFilter, jobWhereInput>;
    job_seeker?: XOR<Job_seekerRelationFilter, job_seekerWhereInput>;
  };

  export type applicationOrderByWithRelationInput = {
    id?: SortOrder;
    job_seeker_id?: SortOrder;
    job_id?: SortOrder;
    application_date?: SortOrderInput | SortOrder;
    status?: SortOrderInput | SortOrder;
    resume?: SortOrderInput | SortOrder;
    cover_letter?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    job?: jobOrderByWithRelationInput;
    job_seeker?: job_seekerOrderByWithRelationInput;
  };

  export type applicationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: applicationWhereInput | applicationWhereInput[];
      OR?: applicationWhereInput[];
      NOT?: applicationWhereInput | applicationWhereInput[];
      job_seeker_id?: UuidFilter<'application'> | string;
      job_id?: UuidFilter<'application'> | string;
      application_date?: DateTimeNullableFilter<'application'> | Date | string | null;
      status?: StringNullableFilter<'application'> | string | null;
      resume?: StringNullableFilter<'application'> | string | null;
      cover_letter?: StringNullableFilter<'application'> | string | null;
      created_at?: DateTimeFilter<'application'> | Date | string;
      updated_at?: DateTimeFilter<'application'> | Date | string;
      job?: XOR<JobRelationFilter, jobWhereInput>;
      job_seeker?: XOR<Job_seekerRelationFilter, job_seekerWhereInput>;
    },
    'id'
  >;

  export type applicationOrderByWithAggregationInput = {
    id?: SortOrder;
    job_seeker_id?: SortOrder;
    job_id?: SortOrder;
    application_date?: SortOrderInput | SortOrder;
    status?: SortOrderInput | SortOrder;
    resume?: SortOrderInput | SortOrder;
    cover_letter?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: applicationCountOrderByAggregateInput;
    _max?: applicationMaxOrderByAggregateInput;
    _min?: applicationMinOrderByAggregateInput;
  };

  export type applicationScalarWhereWithAggregatesInput = {
    AND?: applicationScalarWhereWithAggregatesInput | applicationScalarWhereWithAggregatesInput[];
    OR?: applicationScalarWhereWithAggregatesInput[];
    NOT?: applicationScalarWhereWithAggregatesInput | applicationScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'application'> | string;
    job_seeker_id?: UuidWithAggregatesFilter<'application'> | string;
    job_id?: UuidWithAggregatesFilter<'application'> | string;
    application_date?: DateTimeNullableWithAggregatesFilter<'application'> | Date | string | null;
    status?: StringNullableWithAggregatesFilter<'application'> | string | null;
    resume?: StringNullableWithAggregatesFilter<'application'> | string | null;
    cover_letter?: StringNullableWithAggregatesFilter<'application'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'application'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'application'> | Date | string;
  };

  export type jobWhereInput = {
    AND?: jobWhereInput | jobWhereInput[];
    OR?: jobWhereInput[];
    NOT?: jobWhereInput | jobWhereInput[];
    id?: UuidFilter<'job'> | string;
    title?: StringFilter<'job'> | string;
    description?: StringNullableFilter<'job'> | string | null;
    recruiter_id?: UuidFilter<'job'> | string;
    location?: StringNullableFilter<'job'> | string | null;
    salary?: IntNullableFilter<'job'> | number | null;
    job_type?: StringNullableFilter<'job'> | string | null;
    posted_date?: DateTimeNullableFilter<'job'> | Date | string | null;
    created_at?: DateTimeFilter<'job'> | Date | string;
    updated_at?: DateTimeFilter<'job'> | Date | string;
    application?: ApplicationListRelationFilter;
    recruiter?: XOR<RecruiterRelationFilter, recruiterWhereInput>;
  };

  export type jobOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrderInput | SortOrder;
    recruiter_id?: SortOrder;
    location?: SortOrderInput | SortOrder;
    salary?: SortOrderInput | SortOrder;
    job_type?: SortOrderInput | SortOrder;
    posted_date?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    application?: applicationOrderByRelationAggregateInput;
    recruiter?: recruiterOrderByWithRelationInput;
  };

  export type jobWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: jobWhereInput | jobWhereInput[];
      OR?: jobWhereInput[];
      NOT?: jobWhereInput | jobWhereInput[];
      title?: StringFilter<'job'> | string;
      description?: StringNullableFilter<'job'> | string | null;
      recruiter_id?: UuidFilter<'job'> | string;
      location?: StringNullableFilter<'job'> | string | null;
      salary?: IntNullableFilter<'job'> | number | null;
      job_type?: StringNullableFilter<'job'> | string | null;
      posted_date?: DateTimeNullableFilter<'job'> | Date | string | null;
      created_at?: DateTimeFilter<'job'> | Date | string;
      updated_at?: DateTimeFilter<'job'> | Date | string;
      application?: ApplicationListRelationFilter;
      recruiter?: XOR<RecruiterRelationFilter, recruiterWhereInput>;
    },
    'id'
  >;

  export type jobOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrderInput | SortOrder;
    recruiter_id?: SortOrder;
    location?: SortOrderInput | SortOrder;
    salary?: SortOrderInput | SortOrder;
    job_type?: SortOrderInput | SortOrder;
    posted_date?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: jobCountOrderByAggregateInput;
    _avg?: jobAvgOrderByAggregateInput;
    _max?: jobMaxOrderByAggregateInput;
    _min?: jobMinOrderByAggregateInput;
    _sum?: jobSumOrderByAggregateInput;
  };

  export type jobScalarWhereWithAggregatesInput = {
    AND?: jobScalarWhereWithAggregatesInput | jobScalarWhereWithAggregatesInput[];
    OR?: jobScalarWhereWithAggregatesInput[];
    NOT?: jobScalarWhereWithAggregatesInput | jobScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'job'> | string;
    title?: StringWithAggregatesFilter<'job'> | string;
    description?: StringNullableWithAggregatesFilter<'job'> | string | null;
    recruiter_id?: UuidWithAggregatesFilter<'job'> | string;
    location?: StringNullableWithAggregatesFilter<'job'> | string | null;
    salary?: IntNullableWithAggregatesFilter<'job'> | number | null;
    job_type?: StringNullableWithAggregatesFilter<'job'> | string | null;
    posted_date?: DateTimeNullableWithAggregatesFilter<'job'> | Date | string | null;
    created_at?: DateTimeWithAggregatesFilter<'job'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'job'> | Date | string;
  };

  export type job_seekerWhereInput = {
    AND?: job_seekerWhereInput | job_seekerWhereInput[];
    OR?: job_seekerWhereInput[];
    NOT?: job_seekerWhereInput | job_seekerWhereInput[];
    id?: UuidFilter<'job_seeker'> | string;
    user_id?: UuidFilter<'job_seeker'> | string;
    resume?: StringNullableFilter<'job_seeker'> | string | null;
    skills?: StringNullableFilter<'job_seeker'> | string | null;
    experience_years?: IntNullableFilter<'job_seeker'> | number | null;
    education_level?: StringNullableFilter<'job_seeker'> | string | null;
    preferred_job_type?: StringNullableFilter<'job_seeker'> | string | null;
    preferred_location?: StringNullableFilter<'job_seeker'> | string | null;
    created_at?: DateTimeFilter<'job_seeker'> | Date | string;
    updated_at?: DateTimeFilter<'job_seeker'> | Date | string;
    application?: ApplicationListRelationFilter;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type job_seekerOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    resume?: SortOrderInput | SortOrder;
    skills?: SortOrderInput | SortOrder;
    experience_years?: SortOrderInput | SortOrder;
    education_level?: SortOrderInput | SortOrder;
    preferred_job_type?: SortOrderInput | SortOrder;
    preferred_location?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    application?: applicationOrderByRelationAggregateInput;
    user?: userOrderByWithRelationInput;
  };

  export type job_seekerWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: job_seekerWhereInput | job_seekerWhereInput[];
      OR?: job_seekerWhereInput[];
      NOT?: job_seekerWhereInput | job_seekerWhereInput[];
      user_id?: UuidFilter<'job_seeker'> | string;
      resume?: StringNullableFilter<'job_seeker'> | string | null;
      skills?: StringNullableFilter<'job_seeker'> | string | null;
      experience_years?: IntNullableFilter<'job_seeker'> | number | null;
      education_level?: StringNullableFilter<'job_seeker'> | string | null;
      preferred_job_type?: StringNullableFilter<'job_seeker'> | string | null;
      preferred_location?: StringNullableFilter<'job_seeker'> | string | null;
      created_at?: DateTimeFilter<'job_seeker'> | Date | string;
      updated_at?: DateTimeFilter<'job_seeker'> | Date | string;
      application?: ApplicationListRelationFilter;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type job_seekerOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    resume?: SortOrderInput | SortOrder;
    skills?: SortOrderInput | SortOrder;
    experience_years?: SortOrderInput | SortOrder;
    education_level?: SortOrderInput | SortOrder;
    preferred_job_type?: SortOrderInput | SortOrder;
    preferred_location?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: job_seekerCountOrderByAggregateInput;
    _avg?: job_seekerAvgOrderByAggregateInput;
    _max?: job_seekerMaxOrderByAggregateInput;
    _min?: job_seekerMinOrderByAggregateInput;
    _sum?: job_seekerSumOrderByAggregateInput;
  };

  export type job_seekerScalarWhereWithAggregatesInput = {
    AND?: job_seekerScalarWhereWithAggregatesInput | job_seekerScalarWhereWithAggregatesInput[];
    OR?: job_seekerScalarWhereWithAggregatesInput[];
    NOT?: job_seekerScalarWhereWithAggregatesInput | job_seekerScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'job_seeker'> | string;
    user_id?: UuidWithAggregatesFilter<'job_seeker'> | string;
    resume?: StringNullableWithAggregatesFilter<'job_seeker'> | string | null;
    skills?: StringNullableWithAggregatesFilter<'job_seeker'> | string | null;
    experience_years?: IntNullableWithAggregatesFilter<'job_seeker'> | number | null;
    education_level?: StringNullableWithAggregatesFilter<'job_seeker'> | string | null;
    preferred_job_type?: StringNullableWithAggregatesFilter<'job_seeker'> | string | null;
    preferred_location?: StringNullableWithAggregatesFilter<'job_seeker'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'job_seeker'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'job_seeker'> | Date | string;
  };

  export type organizationWhereInput = {
    AND?: organizationWhereInput | organizationWhereInput[];
    OR?: organizationWhereInput[];
    NOT?: organizationWhereInput | organizationWhereInput[];
    id?: UuidFilter<'organization'> | string;
    description?: StringNullableFilter<'organization'> | string | null;
    address?: StringNullableFilter<'organization'> | string | null;
    city?: StringNullableFilter<'organization'> | string | null;
    state?: StringNullableFilter<'organization'> | string | null;
    country?: StringNullableFilter<'organization'> | string | null;
    postal_code?: StringNullableFilter<'organization'> | string | null;
    name?: StringFilter<'organization'> | string;
    created_at?: DateTimeFilter<'organization'> | Date | string;
    updated_at?: DateTimeFilter<'organization'> | Date | string;
    user_id?: UuidFilter<'organization'> | string;
    tenant_id?: StringFilter<'organization'> | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
    recruiter?: RecruiterListRelationFilter;
  };

  export type organizationOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    city?: SortOrderInput | SortOrder;
    state?: SortOrderInput | SortOrder;
    country?: SortOrderInput | SortOrder;
    postal_code?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    user?: userOrderByWithRelationInput;
    recruiter?: recruiterOrderByRelationAggregateInput;
  };

  export type organizationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: organizationWhereInput | organizationWhereInput[];
      OR?: organizationWhereInput[];
      NOT?: organizationWhereInput | organizationWhereInput[];
      description?: StringNullableFilter<'organization'> | string | null;
      address?: StringNullableFilter<'organization'> | string | null;
      city?: StringNullableFilter<'organization'> | string | null;
      state?: StringNullableFilter<'organization'> | string | null;
      country?: StringNullableFilter<'organization'> | string | null;
      postal_code?: StringNullableFilter<'organization'> | string | null;
      name?: StringFilter<'organization'> | string;
      created_at?: DateTimeFilter<'organization'> | Date | string;
      updated_at?: DateTimeFilter<'organization'> | Date | string;
      user_id?: UuidFilter<'organization'> | string;
      tenant_id?: StringFilter<'organization'> | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
      recruiter?: RecruiterListRelationFilter;
    },
    'id'
  >;

  export type organizationOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    city?: SortOrderInput | SortOrder;
    state?: SortOrderInput | SortOrder;
    country?: SortOrderInput | SortOrder;
    postal_code?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    _count?: organizationCountOrderByAggregateInput;
    _max?: organizationMaxOrderByAggregateInput;
    _min?: organizationMinOrderByAggregateInput;
  };

  export type organizationScalarWhereWithAggregatesInput = {
    AND?: organizationScalarWhereWithAggregatesInput | organizationScalarWhereWithAggregatesInput[];
    OR?: organizationScalarWhereWithAggregatesInput[];
    NOT?: organizationScalarWhereWithAggregatesInput | organizationScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'organization'> | string;
    description?: StringNullableWithAggregatesFilter<'organization'> | string | null;
    address?: StringNullableWithAggregatesFilter<'organization'> | string | null;
    city?: StringNullableWithAggregatesFilter<'organization'> | string | null;
    state?: StringNullableWithAggregatesFilter<'organization'> | string | null;
    country?: StringNullableWithAggregatesFilter<'organization'> | string | null;
    postal_code?: StringNullableWithAggregatesFilter<'organization'> | string | null;
    name?: StringWithAggregatesFilter<'organization'> | string;
    created_at?: DateTimeWithAggregatesFilter<'organization'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'organization'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'organization'> | string;
    tenant_id?: StringWithAggregatesFilter<'organization'> | string;
  };

  export type recruiterWhereInput = {
    AND?: recruiterWhereInput | recruiterWhereInput[];
    OR?: recruiterWhereInput[];
    NOT?: recruiterWhereInput | recruiterWhereInput[];
    id?: UuidFilter<'recruiter'> | string;
    user_id?: UuidFilter<'recruiter'> | string;
    organization_id?: UuidFilter<'recruiter'> | string;
    job_posted?: IntNullableFilter<'recruiter'> | number | null;
    job_filled?: IntNullableFilter<'recruiter'> | number | null;
    active_jobs?: IntNullableFilter<'recruiter'> | number | null;
    inactive_jobs?: IntNullableFilter<'recruiter'> | number | null;
    created_at?: DateTimeFilter<'recruiter'> | Date | string;
    updated_at?: DateTimeFilter<'recruiter'> | Date | string;
    job?: JobListRelationFilter;
    organization?: XOR<OrganizationRelationFilter, organizationWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type recruiterOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    job_posted?: SortOrderInput | SortOrder;
    job_filled?: SortOrderInput | SortOrder;
    active_jobs?: SortOrderInput | SortOrder;
    inactive_jobs?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    job?: jobOrderByRelationAggregateInput;
    organization?: organizationOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type recruiterWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: recruiterWhereInput | recruiterWhereInput[];
      OR?: recruiterWhereInput[];
      NOT?: recruiterWhereInput | recruiterWhereInput[];
      user_id?: UuidFilter<'recruiter'> | string;
      organization_id?: UuidFilter<'recruiter'> | string;
      job_posted?: IntNullableFilter<'recruiter'> | number | null;
      job_filled?: IntNullableFilter<'recruiter'> | number | null;
      active_jobs?: IntNullableFilter<'recruiter'> | number | null;
      inactive_jobs?: IntNullableFilter<'recruiter'> | number | null;
      created_at?: DateTimeFilter<'recruiter'> | Date | string;
      updated_at?: DateTimeFilter<'recruiter'> | Date | string;
      job?: JobListRelationFilter;
      organization?: XOR<OrganizationRelationFilter, organizationWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type recruiterOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    job_posted?: SortOrderInput | SortOrder;
    job_filled?: SortOrderInput | SortOrder;
    active_jobs?: SortOrderInput | SortOrder;
    inactive_jobs?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: recruiterCountOrderByAggregateInput;
    _avg?: recruiterAvgOrderByAggregateInput;
    _max?: recruiterMaxOrderByAggregateInput;
    _min?: recruiterMinOrderByAggregateInput;
    _sum?: recruiterSumOrderByAggregateInput;
  };

  export type recruiterScalarWhereWithAggregatesInput = {
    AND?: recruiterScalarWhereWithAggregatesInput | recruiterScalarWhereWithAggregatesInput[];
    OR?: recruiterScalarWhereWithAggregatesInput[];
    NOT?: recruiterScalarWhereWithAggregatesInput | recruiterScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'recruiter'> | string;
    user_id?: UuidWithAggregatesFilter<'recruiter'> | string;
    organization_id?: UuidWithAggregatesFilter<'recruiter'> | string;
    job_posted?: IntNullableWithAggregatesFilter<'recruiter'> | number | null;
    job_filled?: IntNullableWithAggregatesFilter<'recruiter'> | number | null;
    active_jobs?: IntNullableWithAggregatesFilter<'recruiter'> | number | null;
    inactive_jobs?: IntNullableWithAggregatesFilter<'recruiter'> | number | null;
    created_at?: DateTimeWithAggregatesFilter<'recruiter'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'recruiter'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    firstName?: StringNullableFilter<'user'> | string | null;
    lastName?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    job_seeker?: Job_seekerListRelationFilter;
    organization?: OrganizationListRelationFilter;
    recruiter?: RecruiterListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    job_seeker?: job_seekerOrderByRelationAggregateInput;
    organization?: organizationOrderByRelationAggregateInput;
    recruiter?: recruiterOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      firstName?: StringNullableFilter<'user'> | string | null;
      lastName?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      job_seeker?: Job_seekerListRelationFilter;
      organization?: OrganizationListRelationFilter;
      recruiter?: RecruiterListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    firstName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type applicationCreateInput = {
    id?: string;
    application_date?: Date | string | null;
    status?: string | null;
    resume?: string | null;
    cover_letter?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    job: jobCreateNestedOneWithoutApplicationInput;
    job_seeker: job_seekerCreateNestedOneWithoutApplicationInput;
  };

  export type applicationUncheckedCreateInput = {
    id?: string;
    job_seeker_id: string;
    job_id: string;
    application_date?: Date | string | null;
    status?: string | null;
    resume?: string | null;
    cover_letter?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type applicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    application_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    resume?: NullableStringFieldUpdateOperationsInput | string | null;
    cover_letter?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    job?: jobUpdateOneRequiredWithoutApplicationNestedInput;
    job_seeker?: job_seekerUpdateOneRequiredWithoutApplicationNestedInput;
  };

  export type applicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    job_seeker_id?: StringFieldUpdateOperationsInput | string;
    job_id?: StringFieldUpdateOperationsInput | string;
    application_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    resume?: NullableStringFieldUpdateOperationsInput | string | null;
    cover_letter?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type applicationCreateManyInput = {
    id?: string;
    job_seeker_id: string;
    job_id: string;
    application_date?: Date | string | null;
    status?: string | null;
    resume?: string | null;
    cover_letter?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type applicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    application_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    resume?: NullableStringFieldUpdateOperationsInput | string | null;
    cover_letter?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type applicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    job_seeker_id?: StringFieldUpdateOperationsInput | string;
    job_id?: StringFieldUpdateOperationsInput | string;
    application_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    resume?: NullableStringFieldUpdateOperationsInput | string | null;
    cover_letter?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type jobCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    location?: string | null;
    salary?: number | null;
    job_type?: string | null;
    posted_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    application?: applicationCreateNestedManyWithoutJobInput;
    recruiter: recruiterCreateNestedOneWithoutJobInput;
  };

  export type jobUncheckedCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    recruiter_id: string;
    location?: string | null;
    salary?: number | null;
    job_type?: string | null;
    posted_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    application?: applicationUncheckedCreateNestedManyWithoutJobInput;
  };

  export type jobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    salary?: NullableIntFieldUpdateOperationsInput | number | null;
    job_type?: NullableStringFieldUpdateOperationsInput | string | null;
    posted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    application?: applicationUpdateManyWithoutJobNestedInput;
    recruiter?: recruiterUpdateOneRequiredWithoutJobNestedInput;
  };

  export type jobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    recruiter_id?: StringFieldUpdateOperationsInput | string;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    salary?: NullableIntFieldUpdateOperationsInput | number | null;
    job_type?: NullableStringFieldUpdateOperationsInput | string | null;
    posted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    application?: applicationUncheckedUpdateManyWithoutJobNestedInput;
  };

  export type jobCreateManyInput = {
    id?: string;
    title: string;
    description?: string | null;
    recruiter_id: string;
    location?: string | null;
    salary?: number | null;
    job_type?: string | null;
    posted_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type jobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    salary?: NullableIntFieldUpdateOperationsInput | number | null;
    job_type?: NullableStringFieldUpdateOperationsInput | string | null;
    posted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type jobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    recruiter_id?: StringFieldUpdateOperationsInput | string;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    salary?: NullableIntFieldUpdateOperationsInput | number | null;
    job_type?: NullableStringFieldUpdateOperationsInput | string | null;
    posted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type job_seekerCreateInput = {
    id?: string;
    resume?: string | null;
    skills?: string | null;
    experience_years?: number | null;
    education_level?: string | null;
    preferred_job_type?: string | null;
    preferred_location?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    application?: applicationCreateNestedManyWithoutJob_seekerInput;
    user: userCreateNestedOneWithoutJob_seekerInput;
  };

  export type job_seekerUncheckedCreateInput = {
    id?: string;
    user_id: string;
    resume?: string | null;
    skills?: string | null;
    experience_years?: number | null;
    education_level?: string | null;
    preferred_job_type?: string | null;
    preferred_location?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    application?: applicationUncheckedCreateNestedManyWithoutJob_seekerInput;
  };

  export type job_seekerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    resume?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: NullableStringFieldUpdateOperationsInput | string | null;
    experience_years?: NullableIntFieldUpdateOperationsInput | number | null;
    education_level?: NullableStringFieldUpdateOperationsInput | string | null;
    preferred_job_type?: NullableStringFieldUpdateOperationsInput | string | null;
    preferred_location?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    application?: applicationUpdateManyWithoutJob_seekerNestedInput;
    user?: userUpdateOneRequiredWithoutJob_seekerNestedInput;
  };

  export type job_seekerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    resume?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: NullableStringFieldUpdateOperationsInput | string | null;
    experience_years?: NullableIntFieldUpdateOperationsInput | number | null;
    education_level?: NullableStringFieldUpdateOperationsInput | string | null;
    preferred_job_type?: NullableStringFieldUpdateOperationsInput | string | null;
    preferred_location?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    application?: applicationUncheckedUpdateManyWithoutJob_seekerNestedInput;
  };

  export type job_seekerCreateManyInput = {
    id?: string;
    user_id: string;
    resume?: string | null;
    skills?: string | null;
    experience_years?: number | null;
    education_level?: string | null;
    preferred_job_type?: string | null;
    preferred_location?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type job_seekerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    resume?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: NullableStringFieldUpdateOperationsInput | string | null;
    experience_years?: NullableIntFieldUpdateOperationsInput | number | null;
    education_level?: NullableStringFieldUpdateOperationsInput | string | null;
    preferred_job_type?: NullableStringFieldUpdateOperationsInput | string | null;
    preferred_location?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type job_seekerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    resume?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: NullableStringFieldUpdateOperationsInput | string | null;
    experience_years?: NullableIntFieldUpdateOperationsInput | number | null;
    education_level?: NullableStringFieldUpdateOperationsInput | string | null;
    preferred_job_type?: NullableStringFieldUpdateOperationsInput | string | null;
    preferred_location?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type organizationCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    country?: string | null;
    postal_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutOrganizationInput;
    recruiter?: recruiterCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    country?: string | null;
    postal_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    recruiter?: recruiterUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutOrganizationNestedInput;
    recruiter?: recruiterUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    recruiter?: recruiterUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationCreateManyInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    country?: string | null;
    postal_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type organizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type organizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type recruiterCreateInput = {
    id?: string;
    job_posted?: number | null;
    job_filled?: number | null;
    active_jobs?: number | null;
    inactive_jobs?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    job?: jobCreateNestedManyWithoutRecruiterInput;
    organization: organizationCreateNestedOneWithoutRecruiterInput;
    user: userCreateNestedOneWithoutRecruiterInput;
  };

  export type recruiterUncheckedCreateInput = {
    id?: string;
    user_id: string;
    organization_id: string;
    job_posted?: number | null;
    job_filled?: number | null;
    active_jobs?: number | null;
    inactive_jobs?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    job?: jobUncheckedCreateNestedManyWithoutRecruiterInput;
  };

  export type recruiterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    job_posted?: NullableIntFieldUpdateOperationsInput | number | null;
    job_filled?: NullableIntFieldUpdateOperationsInput | number | null;
    active_jobs?: NullableIntFieldUpdateOperationsInput | number | null;
    inactive_jobs?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    job?: jobUpdateManyWithoutRecruiterNestedInput;
    organization?: organizationUpdateOneRequiredWithoutRecruiterNestedInput;
    user?: userUpdateOneRequiredWithoutRecruiterNestedInput;
  };

  export type recruiterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    job_posted?: NullableIntFieldUpdateOperationsInput | number | null;
    job_filled?: NullableIntFieldUpdateOperationsInput | number | null;
    active_jobs?: NullableIntFieldUpdateOperationsInput | number | null;
    inactive_jobs?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    job?: jobUncheckedUpdateManyWithoutRecruiterNestedInput;
  };

  export type recruiterCreateManyInput = {
    id?: string;
    user_id: string;
    organization_id: string;
    job_posted?: number | null;
    job_filled?: number | null;
    active_jobs?: number | null;
    inactive_jobs?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type recruiterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    job_posted?: NullableIntFieldUpdateOperationsInput | number | null;
    job_filled?: NullableIntFieldUpdateOperationsInput | number | null;
    active_jobs?: NullableIntFieldUpdateOperationsInput | number | null;
    inactive_jobs?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type recruiterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    job_posted?: NullableIntFieldUpdateOperationsInput | number | null;
    job_filled?: NullableIntFieldUpdateOperationsInput | number | null;
    active_jobs?: NullableIntFieldUpdateOperationsInput | number | null;
    inactive_jobs?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    job_seeker?: job_seekerCreateNestedManyWithoutUserInput;
    organization?: organizationCreateNestedManyWithoutUserInput;
    recruiter?: recruiterCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    job_seeker?: job_seekerUncheckedCreateNestedManyWithoutUserInput;
    organization?: organizationUncheckedCreateNestedManyWithoutUserInput;
    recruiter?: recruiterUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_seeker?: job_seekerUpdateManyWithoutUserNestedInput;
    organization?: organizationUpdateManyWithoutUserNestedInput;
    recruiter?: recruiterUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_seeker?: job_seekerUncheckedUpdateManyWithoutUserNestedInput;
    organization?: organizationUncheckedUpdateManyWithoutUserNestedInput;
    recruiter?: recruiterUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type JobRelationFilter = {
    is?: jobWhereInput;
    isNot?: jobWhereInput;
  };

  export type Job_seekerRelationFilter = {
    is?: job_seekerWhereInput;
    isNot?: job_seekerWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type applicationCountOrderByAggregateInput = {
    id?: SortOrder;
    job_seeker_id?: SortOrder;
    job_id?: SortOrder;
    application_date?: SortOrder;
    status?: SortOrder;
    resume?: SortOrder;
    cover_letter?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type applicationMaxOrderByAggregateInput = {
    id?: SortOrder;
    job_seeker_id?: SortOrder;
    job_id?: SortOrder;
    application_date?: SortOrder;
    status?: SortOrder;
    resume?: SortOrder;
    cover_letter?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type applicationMinOrderByAggregateInput = {
    id?: SortOrder;
    job_seeker_id?: SortOrder;
    job_id?: SortOrder;
    application_date?: SortOrder;
    status?: SortOrder;
    resume?: SortOrder;
    cover_letter?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type ApplicationListRelationFilter = {
    every?: applicationWhereInput;
    some?: applicationWhereInput;
    none?: applicationWhereInput;
  };

  export type RecruiterRelationFilter = {
    is?: recruiterWhereInput;
    isNot?: recruiterWhereInput;
  };

  export type applicationOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type jobCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    recruiter_id?: SortOrder;
    location?: SortOrder;
    salary?: SortOrder;
    job_type?: SortOrder;
    posted_date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type jobAvgOrderByAggregateInput = {
    salary?: SortOrder;
  };

  export type jobMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    recruiter_id?: SortOrder;
    location?: SortOrder;
    salary?: SortOrder;
    job_type?: SortOrder;
    posted_date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type jobMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    recruiter_id?: SortOrder;
    location?: SortOrder;
    salary?: SortOrder;
    job_type?: SortOrder;
    posted_date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type jobSumOrderByAggregateInput = {
    salary?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type job_seekerCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    resume?: SortOrder;
    skills?: SortOrder;
    experience_years?: SortOrder;
    education_level?: SortOrder;
    preferred_job_type?: SortOrder;
    preferred_location?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type job_seekerAvgOrderByAggregateInput = {
    experience_years?: SortOrder;
  };

  export type job_seekerMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    resume?: SortOrder;
    skills?: SortOrder;
    experience_years?: SortOrder;
    education_level?: SortOrder;
    preferred_job_type?: SortOrder;
    preferred_location?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type job_seekerMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    resume?: SortOrder;
    skills?: SortOrder;
    experience_years?: SortOrder;
    education_level?: SortOrder;
    preferred_job_type?: SortOrder;
    preferred_location?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type job_seekerSumOrderByAggregateInput = {
    experience_years?: SortOrder;
  };

  export type RecruiterListRelationFilter = {
    every?: recruiterWhereInput;
    some?: recruiterWhereInput;
    none?: recruiterWhereInput;
  };

  export type recruiterOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type organizationCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    country?: SortOrder;
    postal_code?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type organizationMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    country?: SortOrder;
    postal_code?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type organizationMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    country?: SortOrder;
    postal_code?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type JobListRelationFilter = {
    every?: jobWhereInput;
    some?: jobWhereInput;
    none?: jobWhereInput;
  };

  export type OrganizationRelationFilter = {
    is?: organizationWhereInput;
    isNot?: organizationWhereInput;
  };

  export type jobOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type recruiterCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    job_posted?: SortOrder;
    job_filled?: SortOrder;
    active_jobs?: SortOrder;
    inactive_jobs?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type recruiterAvgOrderByAggregateInput = {
    job_posted?: SortOrder;
    job_filled?: SortOrder;
    active_jobs?: SortOrder;
    inactive_jobs?: SortOrder;
  };

  export type recruiterMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    job_posted?: SortOrder;
    job_filled?: SortOrder;
    active_jobs?: SortOrder;
    inactive_jobs?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type recruiterMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    job_posted?: SortOrder;
    job_filled?: SortOrder;
    active_jobs?: SortOrder;
    inactive_jobs?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type recruiterSumOrderByAggregateInput = {
    job_posted?: SortOrder;
    job_filled?: SortOrder;
    active_jobs?: SortOrder;
    inactive_jobs?: SortOrder;
  };

  export type Job_seekerListRelationFilter = {
    every?: job_seekerWhereInput;
    some?: job_seekerWhereInput;
    none?: job_seekerWhereInput;
  };

  export type OrganizationListRelationFilter = {
    every?: organizationWhereInput;
    some?: organizationWhereInput;
    none?: organizationWhereInput;
  };

  export type job_seekerOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type organizationOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type jobCreateNestedOneWithoutApplicationInput = {
    create?: XOR<jobCreateWithoutApplicationInput, jobUncheckedCreateWithoutApplicationInput>;
    connectOrCreate?: jobCreateOrConnectWithoutApplicationInput;
    connect?: jobWhereUniqueInput;
  };

  export type job_seekerCreateNestedOneWithoutApplicationInput = {
    create?: XOR<job_seekerCreateWithoutApplicationInput, job_seekerUncheckedCreateWithoutApplicationInput>;
    connectOrCreate?: job_seekerCreateOrConnectWithoutApplicationInput;
    connect?: job_seekerWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type jobUpdateOneRequiredWithoutApplicationNestedInput = {
    create?: XOR<jobCreateWithoutApplicationInput, jobUncheckedCreateWithoutApplicationInput>;
    connectOrCreate?: jobCreateOrConnectWithoutApplicationInput;
    upsert?: jobUpsertWithoutApplicationInput;
    connect?: jobWhereUniqueInput;
    update?: XOR<
      XOR<jobUpdateToOneWithWhereWithoutApplicationInput, jobUpdateWithoutApplicationInput>,
      jobUncheckedUpdateWithoutApplicationInput
    >;
  };

  export type job_seekerUpdateOneRequiredWithoutApplicationNestedInput = {
    create?: XOR<job_seekerCreateWithoutApplicationInput, job_seekerUncheckedCreateWithoutApplicationInput>;
    connectOrCreate?: job_seekerCreateOrConnectWithoutApplicationInput;
    upsert?: job_seekerUpsertWithoutApplicationInput;
    connect?: job_seekerWhereUniqueInput;
    update?: XOR<
      XOR<job_seekerUpdateToOneWithWhereWithoutApplicationInput, job_seekerUpdateWithoutApplicationInput>,
      job_seekerUncheckedUpdateWithoutApplicationInput
    >;
  };

  export type applicationCreateNestedManyWithoutJobInput = {
    create?:
      | XOR<applicationCreateWithoutJobInput, applicationUncheckedCreateWithoutJobInput>
      | applicationCreateWithoutJobInput[]
      | applicationUncheckedCreateWithoutJobInput[];
    connectOrCreate?: applicationCreateOrConnectWithoutJobInput | applicationCreateOrConnectWithoutJobInput[];
    createMany?: applicationCreateManyJobInputEnvelope;
    connect?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
  };

  export type recruiterCreateNestedOneWithoutJobInput = {
    create?: XOR<recruiterCreateWithoutJobInput, recruiterUncheckedCreateWithoutJobInput>;
    connectOrCreate?: recruiterCreateOrConnectWithoutJobInput;
    connect?: recruiterWhereUniqueInput;
  };

  export type applicationUncheckedCreateNestedManyWithoutJobInput = {
    create?:
      | XOR<applicationCreateWithoutJobInput, applicationUncheckedCreateWithoutJobInput>
      | applicationCreateWithoutJobInput[]
      | applicationUncheckedCreateWithoutJobInput[];
    connectOrCreate?: applicationCreateOrConnectWithoutJobInput | applicationCreateOrConnectWithoutJobInput[];
    createMany?: applicationCreateManyJobInputEnvelope;
    connect?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type applicationUpdateManyWithoutJobNestedInput = {
    create?:
      | XOR<applicationCreateWithoutJobInput, applicationUncheckedCreateWithoutJobInput>
      | applicationCreateWithoutJobInput[]
      | applicationUncheckedCreateWithoutJobInput[];
    connectOrCreate?: applicationCreateOrConnectWithoutJobInput | applicationCreateOrConnectWithoutJobInput[];
    upsert?: applicationUpsertWithWhereUniqueWithoutJobInput | applicationUpsertWithWhereUniqueWithoutJobInput[];
    createMany?: applicationCreateManyJobInputEnvelope;
    set?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
    disconnect?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
    delete?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
    connect?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
    update?: applicationUpdateWithWhereUniqueWithoutJobInput | applicationUpdateWithWhereUniqueWithoutJobInput[];
    updateMany?: applicationUpdateManyWithWhereWithoutJobInput | applicationUpdateManyWithWhereWithoutJobInput[];
    deleteMany?: applicationScalarWhereInput | applicationScalarWhereInput[];
  };

  export type recruiterUpdateOneRequiredWithoutJobNestedInput = {
    create?: XOR<recruiterCreateWithoutJobInput, recruiterUncheckedCreateWithoutJobInput>;
    connectOrCreate?: recruiterCreateOrConnectWithoutJobInput;
    upsert?: recruiterUpsertWithoutJobInput;
    connect?: recruiterWhereUniqueInput;
    update?: XOR<
      XOR<recruiterUpdateToOneWithWhereWithoutJobInput, recruiterUpdateWithoutJobInput>,
      recruiterUncheckedUpdateWithoutJobInput
    >;
  };

  export type applicationUncheckedUpdateManyWithoutJobNestedInput = {
    create?:
      | XOR<applicationCreateWithoutJobInput, applicationUncheckedCreateWithoutJobInput>
      | applicationCreateWithoutJobInput[]
      | applicationUncheckedCreateWithoutJobInput[];
    connectOrCreate?: applicationCreateOrConnectWithoutJobInput | applicationCreateOrConnectWithoutJobInput[];
    upsert?: applicationUpsertWithWhereUniqueWithoutJobInput | applicationUpsertWithWhereUniqueWithoutJobInput[];
    createMany?: applicationCreateManyJobInputEnvelope;
    set?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
    disconnect?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
    delete?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
    connect?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
    update?: applicationUpdateWithWhereUniqueWithoutJobInput | applicationUpdateWithWhereUniqueWithoutJobInput[];
    updateMany?: applicationUpdateManyWithWhereWithoutJobInput | applicationUpdateManyWithWhereWithoutJobInput[];
    deleteMany?: applicationScalarWhereInput | applicationScalarWhereInput[];
  };

  export type applicationCreateNestedManyWithoutJob_seekerInput = {
    create?:
      | XOR<applicationCreateWithoutJob_seekerInput, applicationUncheckedCreateWithoutJob_seekerInput>
      | applicationCreateWithoutJob_seekerInput[]
      | applicationUncheckedCreateWithoutJob_seekerInput[];
    connectOrCreate?:
      | applicationCreateOrConnectWithoutJob_seekerInput
      | applicationCreateOrConnectWithoutJob_seekerInput[];
    createMany?: applicationCreateManyJob_seekerInputEnvelope;
    connect?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
  };

  export type userCreateNestedOneWithoutJob_seekerInput = {
    create?: XOR<userCreateWithoutJob_seekerInput, userUncheckedCreateWithoutJob_seekerInput>;
    connectOrCreate?: userCreateOrConnectWithoutJob_seekerInput;
    connect?: userWhereUniqueInput;
  };

  export type applicationUncheckedCreateNestedManyWithoutJob_seekerInput = {
    create?:
      | XOR<applicationCreateWithoutJob_seekerInput, applicationUncheckedCreateWithoutJob_seekerInput>
      | applicationCreateWithoutJob_seekerInput[]
      | applicationUncheckedCreateWithoutJob_seekerInput[];
    connectOrCreate?:
      | applicationCreateOrConnectWithoutJob_seekerInput
      | applicationCreateOrConnectWithoutJob_seekerInput[];
    createMany?: applicationCreateManyJob_seekerInputEnvelope;
    connect?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
  };

  export type applicationUpdateManyWithoutJob_seekerNestedInput = {
    create?:
      | XOR<applicationCreateWithoutJob_seekerInput, applicationUncheckedCreateWithoutJob_seekerInput>
      | applicationCreateWithoutJob_seekerInput[]
      | applicationUncheckedCreateWithoutJob_seekerInput[];
    connectOrCreate?:
      | applicationCreateOrConnectWithoutJob_seekerInput
      | applicationCreateOrConnectWithoutJob_seekerInput[];
    upsert?:
      | applicationUpsertWithWhereUniqueWithoutJob_seekerInput
      | applicationUpsertWithWhereUniqueWithoutJob_seekerInput[];
    createMany?: applicationCreateManyJob_seekerInputEnvelope;
    set?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
    disconnect?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
    delete?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
    connect?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
    update?:
      | applicationUpdateWithWhereUniqueWithoutJob_seekerInput
      | applicationUpdateWithWhereUniqueWithoutJob_seekerInput[];
    updateMany?:
      | applicationUpdateManyWithWhereWithoutJob_seekerInput
      | applicationUpdateManyWithWhereWithoutJob_seekerInput[];
    deleteMany?: applicationScalarWhereInput | applicationScalarWhereInput[];
  };

  export type userUpdateOneRequiredWithoutJob_seekerNestedInput = {
    create?: XOR<userCreateWithoutJob_seekerInput, userUncheckedCreateWithoutJob_seekerInput>;
    connectOrCreate?: userCreateOrConnectWithoutJob_seekerInput;
    upsert?: userUpsertWithoutJob_seekerInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutJob_seekerInput, userUpdateWithoutJob_seekerInput>,
      userUncheckedUpdateWithoutJob_seekerInput
    >;
  };

  export type applicationUncheckedUpdateManyWithoutJob_seekerNestedInput = {
    create?:
      | XOR<applicationCreateWithoutJob_seekerInput, applicationUncheckedCreateWithoutJob_seekerInput>
      | applicationCreateWithoutJob_seekerInput[]
      | applicationUncheckedCreateWithoutJob_seekerInput[];
    connectOrCreate?:
      | applicationCreateOrConnectWithoutJob_seekerInput
      | applicationCreateOrConnectWithoutJob_seekerInput[];
    upsert?:
      | applicationUpsertWithWhereUniqueWithoutJob_seekerInput
      | applicationUpsertWithWhereUniqueWithoutJob_seekerInput[];
    createMany?: applicationCreateManyJob_seekerInputEnvelope;
    set?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
    disconnect?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
    delete?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
    connect?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
    update?:
      | applicationUpdateWithWhereUniqueWithoutJob_seekerInput
      | applicationUpdateWithWhereUniqueWithoutJob_seekerInput[];
    updateMany?:
      | applicationUpdateManyWithWhereWithoutJob_seekerInput
      | applicationUpdateManyWithWhereWithoutJob_seekerInput[];
    deleteMany?: applicationScalarWhereInput | applicationScalarWhereInput[];
  };

  export type userCreateNestedOneWithoutOrganizationInput = {
    create?: XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>;
    connectOrCreate?: userCreateOrConnectWithoutOrganizationInput;
    connect?: userWhereUniqueInput;
  };

  export type recruiterCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<recruiterCreateWithoutOrganizationInput, recruiterUncheckedCreateWithoutOrganizationInput>
      | recruiterCreateWithoutOrganizationInput[]
      | recruiterUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | recruiterCreateOrConnectWithoutOrganizationInput
      | recruiterCreateOrConnectWithoutOrganizationInput[];
    createMany?: recruiterCreateManyOrganizationInputEnvelope;
    connect?: recruiterWhereUniqueInput | recruiterWhereUniqueInput[];
  };

  export type recruiterUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<recruiterCreateWithoutOrganizationInput, recruiterUncheckedCreateWithoutOrganizationInput>
      | recruiterCreateWithoutOrganizationInput[]
      | recruiterUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | recruiterCreateOrConnectWithoutOrganizationInput
      | recruiterCreateOrConnectWithoutOrganizationInput[];
    createMany?: recruiterCreateManyOrganizationInputEnvelope;
    connect?: recruiterWhereUniqueInput | recruiterWhereUniqueInput[];
  };

  export type userUpdateOneRequiredWithoutOrganizationNestedInput = {
    create?: XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>;
    connectOrCreate?: userCreateOrConnectWithoutOrganizationInput;
    upsert?: userUpsertWithoutOrganizationInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutOrganizationInput, userUpdateWithoutOrganizationInput>,
      userUncheckedUpdateWithoutOrganizationInput
    >;
  };

  export type recruiterUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<recruiterCreateWithoutOrganizationInput, recruiterUncheckedCreateWithoutOrganizationInput>
      | recruiterCreateWithoutOrganizationInput[]
      | recruiterUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | recruiterCreateOrConnectWithoutOrganizationInput
      | recruiterCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | recruiterUpsertWithWhereUniqueWithoutOrganizationInput
      | recruiterUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: recruiterCreateManyOrganizationInputEnvelope;
    set?: recruiterWhereUniqueInput | recruiterWhereUniqueInput[];
    disconnect?: recruiterWhereUniqueInput | recruiterWhereUniqueInput[];
    delete?: recruiterWhereUniqueInput | recruiterWhereUniqueInput[];
    connect?: recruiterWhereUniqueInput | recruiterWhereUniqueInput[];
    update?:
      | recruiterUpdateWithWhereUniqueWithoutOrganizationInput
      | recruiterUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | recruiterUpdateManyWithWhereWithoutOrganizationInput
      | recruiterUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: recruiterScalarWhereInput | recruiterScalarWhereInput[];
  };

  export type recruiterUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<recruiterCreateWithoutOrganizationInput, recruiterUncheckedCreateWithoutOrganizationInput>
      | recruiterCreateWithoutOrganizationInput[]
      | recruiterUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | recruiterCreateOrConnectWithoutOrganizationInput
      | recruiterCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | recruiterUpsertWithWhereUniqueWithoutOrganizationInput
      | recruiterUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: recruiterCreateManyOrganizationInputEnvelope;
    set?: recruiterWhereUniqueInput | recruiterWhereUniqueInput[];
    disconnect?: recruiterWhereUniqueInput | recruiterWhereUniqueInput[];
    delete?: recruiterWhereUniqueInput | recruiterWhereUniqueInput[];
    connect?: recruiterWhereUniqueInput | recruiterWhereUniqueInput[];
    update?:
      | recruiterUpdateWithWhereUniqueWithoutOrganizationInput
      | recruiterUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | recruiterUpdateManyWithWhereWithoutOrganizationInput
      | recruiterUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: recruiterScalarWhereInput | recruiterScalarWhereInput[];
  };

  export type jobCreateNestedManyWithoutRecruiterInput = {
    create?:
      | XOR<jobCreateWithoutRecruiterInput, jobUncheckedCreateWithoutRecruiterInput>
      | jobCreateWithoutRecruiterInput[]
      | jobUncheckedCreateWithoutRecruiterInput[];
    connectOrCreate?: jobCreateOrConnectWithoutRecruiterInput | jobCreateOrConnectWithoutRecruiterInput[];
    createMany?: jobCreateManyRecruiterInputEnvelope;
    connect?: jobWhereUniqueInput | jobWhereUniqueInput[];
  };

  export type organizationCreateNestedOneWithoutRecruiterInput = {
    create?: XOR<organizationCreateWithoutRecruiterInput, organizationUncheckedCreateWithoutRecruiterInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutRecruiterInput;
    connect?: organizationWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutRecruiterInput = {
    create?: XOR<userCreateWithoutRecruiterInput, userUncheckedCreateWithoutRecruiterInput>;
    connectOrCreate?: userCreateOrConnectWithoutRecruiterInput;
    connect?: userWhereUniqueInput;
  };

  export type jobUncheckedCreateNestedManyWithoutRecruiterInput = {
    create?:
      | XOR<jobCreateWithoutRecruiterInput, jobUncheckedCreateWithoutRecruiterInput>
      | jobCreateWithoutRecruiterInput[]
      | jobUncheckedCreateWithoutRecruiterInput[];
    connectOrCreate?: jobCreateOrConnectWithoutRecruiterInput | jobCreateOrConnectWithoutRecruiterInput[];
    createMany?: jobCreateManyRecruiterInputEnvelope;
    connect?: jobWhereUniqueInput | jobWhereUniqueInput[];
  };

  export type jobUpdateManyWithoutRecruiterNestedInput = {
    create?:
      | XOR<jobCreateWithoutRecruiterInput, jobUncheckedCreateWithoutRecruiterInput>
      | jobCreateWithoutRecruiterInput[]
      | jobUncheckedCreateWithoutRecruiterInput[];
    connectOrCreate?: jobCreateOrConnectWithoutRecruiterInput | jobCreateOrConnectWithoutRecruiterInput[];
    upsert?: jobUpsertWithWhereUniqueWithoutRecruiterInput | jobUpsertWithWhereUniqueWithoutRecruiterInput[];
    createMany?: jobCreateManyRecruiterInputEnvelope;
    set?: jobWhereUniqueInput | jobWhereUniqueInput[];
    disconnect?: jobWhereUniqueInput | jobWhereUniqueInput[];
    delete?: jobWhereUniqueInput | jobWhereUniqueInput[];
    connect?: jobWhereUniqueInput | jobWhereUniqueInput[];
    update?: jobUpdateWithWhereUniqueWithoutRecruiterInput | jobUpdateWithWhereUniqueWithoutRecruiterInput[];
    updateMany?: jobUpdateManyWithWhereWithoutRecruiterInput | jobUpdateManyWithWhereWithoutRecruiterInput[];
    deleteMany?: jobScalarWhereInput | jobScalarWhereInput[];
  };

  export type organizationUpdateOneRequiredWithoutRecruiterNestedInput = {
    create?: XOR<organizationCreateWithoutRecruiterInput, organizationUncheckedCreateWithoutRecruiterInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutRecruiterInput;
    upsert?: organizationUpsertWithoutRecruiterInput;
    connect?: organizationWhereUniqueInput;
    update?: XOR<
      XOR<organizationUpdateToOneWithWhereWithoutRecruiterInput, organizationUpdateWithoutRecruiterInput>,
      organizationUncheckedUpdateWithoutRecruiterInput
    >;
  };

  export type userUpdateOneRequiredWithoutRecruiterNestedInput = {
    create?: XOR<userCreateWithoutRecruiterInput, userUncheckedCreateWithoutRecruiterInput>;
    connectOrCreate?: userCreateOrConnectWithoutRecruiterInput;
    upsert?: userUpsertWithoutRecruiterInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutRecruiterInput, userUpdateWithoutRecruiterInput>,
      userUncheckedUpdateWithoutRecruiterInput
    >;
  };

  export type jobUncheckedUpdateManyWithoutRecruiterNestedInput = {
    create?:
      | XOR<jobCreateWithoutRecruiterInput, jobUncheckedCreateWithoutRecruiterInput>
      | jobCreateWithoutRecruiterInput[]
      | jobUncheckedCreateWithoutRecruiterInput[];
    connectOrCreate?: jobCreateOrConnectWithoutRecruiterInput | jobCreateOrConnectWithoutRecruiterInput[];
    upsert?: jobUpsertWithWhereUniqueWithoutRecruiterInput | jobUpsertWithWhereUniqueWithoutRecruiterInput[];
    createMany?: jobCreateManyRecruiterInputEnvelope;
    set?: jobWhereUniqueInput | jobWhereUniqueInput[];
    disconnect?: jobWhereUniqueInput | jobWhereUniqueInput[];
    delete?: jobWhereUniqueInput | jobWhereUniqueInput[];
    connect?: jobWhereUniqueInput | jobWhereUniqueInput[];
    update?: jobUpdateWithWhereUniqueWithoutRecruiterInput | jobUpdateWithWhereUniqueWithoutRecruiterInput[];
    updateMany?: jobUpdateManyWithWhereWithoutRecruiterInput | jobUpdateManyWithWhereWithoutRecruiterInput[];
    deleteMany?: jobScalarWhereInput | jobScalarWhereInput[];
  };

  export type job_seekerCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<job_seekerCreateWithoutUserInput, job_seekerUncheckedCreateWithoutUserInput>
      | job_seekerCreateWithoutUserInput[]
      | job_seekerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: job_seekerCreateOrConnectWithoutUserInput | job_seekerCreateOrConnectWithoutUserInput[];
    createMany?: job_seekerCreateManyUserInputEnvelope;
    connect?: job_seekerWhereUniqueInput | job_seekerWhereUniqueInput[];
  };

  export type organizationCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>
      | organizationCreateWithoutUserInput[]
      | organizationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput | organizationCreateOrConnectWithoutUserInput[];
    createMany?: organizationCreateManyUserInputEnvelope;
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
  };

  export type recruiterCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<recruiterCreateWithoutUserInput, recruiterUncheckedCreateWithoutUserInput>
      | recruiterCreateWithoutUserInput[]
      | recruiterUncheckedCreateWithoutUserInput[];
    connectOrCreate?: recruiterCreateOrConnectWithoutUserInput | recruiterCreateOrConnectWithoutUserInput[];
    createMany?: recruiterCreateManyUserInputEnvelope;
    connect?: recruiterWhereUniqueInput | recruiterWhereUniqueInput[];
  };

  export type job_seekerUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<job_seekerCreateWithoutUserInput, job_seekerUncheckedCreateWithoutUserInput>
      | job_seekerCreateWithoutUserInput[]
      | job_seekerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: job_seekerCreateOrConnectWithoutUserInput | job_seekerCreateOrConnectWithoutUserInput[];
    createMany?: job_seekerCreateManyUserInputEnvelope;
    connect?: job_seekerWhereUniqueInput | job_seekerWhereUniqueInput[];
  };

  export type organizationUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>
      | organizationCreateWithoutUserInput[]
      | organizationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput | organizationCreateOrConnectWithoutUserInput[];
    createMany?: organizationCreateManyUserInputEnvelope;
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
  };

  export type recruiterUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<recruiterCreateWithoutUserInput, recruiterUncheckedCreateWithoutUserInput>
      | recruiterCreateWithoutUserInput[]
      | recruiterUncheckedCreateWithoutUserInput[];
    connectOrCreate?: recruiterCreateOrConnectWithoutUserInput | recruiterCreateOrConnectWithoutUserInput[];
    createMany?: recruiterCreateManyUserInputEnvelope;
    connect?: recruiterWhereUniqueInput | recruiterWhereUniqueInput[];
  };

  export type job_seekerUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<job_seekerCreateWithoutUserInput, job_seekerUncheckedCreateWithoutUserInput>
      | job_seekerCreateWithoutUserInput[]
      | job_seekerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: job_seekerCreateOrConnectWithoutUserInput | job_seekerCreateOrConnectWithoutUserInput[];
    upsert?: job_seekerUpsertWithWhereUniqueWithoutUserInput | job_seekerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: job_seekerCreateManyUserInputEnvelope;
    set?: job_seekerWhereUniqueInput | job_seekerWhereUniqueInput[];
    disconnect?: job_seekerWhereUniqueInput | job_seekerWhereUniqueInput[];
    delete?: job_seekerWhereUniqueInput | job_seekerWhereUniqueInput[];
    connect?: job_seekerWhereUniqueInput | job_seekerWhereUniqueInput[];
    update?: job_seekerUpdateWithWhereUniqueWithoutUserInput | job_seekerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: job_seekerUpdateManyWithWhereWithoutUserInput | job_seekerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: job_seekerScalarWhereInput | job_seekerScalarWhereInput[];
  };

  export type organizationUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>
      | organizationCreateWithoutUserInput[]
      | organizationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput | organizationCreateOrConnectWithoutUserInput[];
    upsert?: organizationUpsertWithWhereUniqueWithoutUserInput | organizationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: organizationCreateManyUserInputEnvelope;
    set?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    disconnect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    delete?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    update?: organizationUpdateWithWhereUniqueWithoutUserInput | organizationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: organizationUpdateManyWithWhereWithoutUserInput | organizationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: organizationScalarWhereInput | organizationScalarWhereInput[];
  };

  export type recruiterUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<recruiterCreateWithoutUserInput, recruiterUncheckedCreateWithoutUserInput>
      | recruiterCreateWithoutUserInput[]
      | recruiterUncheckedCreateWithoutUserInput[];
    connectOrCreate?: recruiterCreateOrConnectWithoutUserInput | recruiterCreateOrConnectWithoutUserInput[];
    upsert?: recruiterUpsertWithWhereUniqueWithoutUserInput | recruiterUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: recruiterCreateManyUserInputEnvelope;
    set?: recruiterWhereUniqueInput | recruiterWhereUniqueInput[];
    disconnect?: recruiterWhereUniqueInput | recruiterWhereUniqueInput[];
    delete?: recruiterWhereUniqueInput | recruiterWhereUniqueInput[];
    connect?: recruiterWhereUniqueInput | recruiterWhereUniqueInput[];
    update?: recruiterUpdateWithWhereUniqueWithoutUserInput | recruiterUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: recruiterUpdateManyWithWhereWithoutUserInput | recruiterUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: recruiterScalarWhereInput | recruiterScalarWhereInput[];
  };

  export type job_seekerUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<job_seekerCreateWithoutUserInput, job_seekerUncheckedCreateWithoutUserInput>
      | job_seekerCreateWithoutUserInput[]
      | job_seekerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: job_seekerCreateOrConnectWithoutUserInput | job_seekerCreateOrConnectWithoutUserInput[];
    upsert?: job_seekerUpsertWithWhereUniqueWithoutUserInput | job_seekerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: job_seekerCreateManyUserInputEnvelope;
    set?: job_seekerWhereUniqueInput | job_seekerWhereUniqueInput[];
    disconnect?: job_seekerWhereUniqueInput | job_seekerWhereUniqueInput[];
    delete?: job_seekerWhereUniqueInput | job_seekerWhereUniqueInput[];
    connect?: job_seekerWhereUniqueInput | job_seekerWhereUniqueInput[];
    update?: job_seekerUpdateWithWhereUniqueWithoutUserInput | job_seekerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: job_seekerUpdateManyWithWhereWithoutUserInput | job_seekerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: job_seekerScalarWhereInput | job_seekerScalarWhereInput[];
  };

  export type organizationUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>
      | organizationCreateWithoutUserInput[]
      | organizationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput | organizationCreateOrConnectWithoutUserInput[];
    upsert?: organizationUpsertWithWhereUniqueWithoutUserInput | organizationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: organizationCreateManyUserInputEnvelope;
    set?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    disconnect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    delete?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    update?: organizationUpdateWithWhereUniqueWithoutUserInput | organizationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: organizationUpdateManyWithWhereWithoutUserInput | organizationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: organizationScalarWhereInput | organizationScalarWhereInput[];
  };

  export type recruiterUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<recruiterCreateWithoutUserInput, recruiterUncheckedCreateWithoutUserInput>
      | recruiterCreateWithoutUserInput[]
      | recruiterUncheckedCreateWithoutUserInput[];
    connectOrCreate?: recruiterCreateOrConnectWithoutUserInput | recruiterCreateOrConnectWithoutUserInput[];
    upsert?: recruiterUpsertWithWhereUniqueWithoutUserInput | recruiterUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: recruiterCreateManyUserInputEnvelope;
    set?: recruiterWhereUniqueInput | recruiterWhereUniqueInput[];
    disconnect?: recruiterWhereUniqueInput | recruiterWhereUniqueInput[];
    delete?: recruiterWhereUniqueInput | recruiterWhereUniqueInput[];
    connect?: recruiterWhereUniqueInput | recruiterWhereUniqueInput[];
    update?: recruiterUpdateWithWhereUniqueWithoutUserInput | recruiterUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: recruiterUpdateManyWithWhereWithoutUserInput | recruiterUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: recruiterScalarWhereInput | recruiterScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type jobCreateWithoutApplicationInput = {
    id?: string;
    title: string;
    description?: string | null;
    location?: string | null;
    salary?: number | null;
    job_type?: string | null;
    posted_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    recruiter: recruiterCreateNestedOneWithoutJobInput;
  };

  export type jobUncheckedCreateWithoutApplicationInput = {
    id?: string;
    title: string;
    description?: string | null;
    recruiter_id: string;
    location?: string | null;
    salary?: number | null;
    job_type?: string | null;
    posted_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type jobCreateOrConnectWithoutApplicationInput = {
    where: jobWhereUniqueInput;
    create: XOR<jobCreateWithoutApplicationInput, jobUncheckedCreateWithoutApplicationInput>;
  };

  export type job_seekerCreateWithoutApplicationInput = {
    id?: string;
    resume?: string | null;
    skills?: string | null;
    experience_years?: number | null;
    education_level?: string | null;
    preferred_job_type?: string | null;
    preferred_location?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutJob_seekerInput;
  };

  export type job_seekerUncheckedCreateWithoutApplicationInput = {
    id?: string;
    user_id: string;
    resume?: string | null;
    skills?: string | null;
    experience_years?: number | null;
    education_level?: string | null;
    preferred_job_type?: string | null;
    preferred_location?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type job_seekerCreateOrConnectWithoutApplicationInput = {
    where: job_seekerWhereUniqueInput;
    create: XOR<job_seekerCreateWithoutApplicationInput, job_seekerUncheckedCreateWithoutApplicationInput>;
  };

  export type jobUpsertWithoutApplicationInput = {
    update: XOR<jobUpdateWithoutApplicationInput, jobUncheckedUpdateWithoutApplicationInput>;
    create: XOR<jobCreateWithoutApplicationInput, jobUncheckedCreateWithoutApplicationInput>;
    where?: jobWhereInput;
  };

  export type jobUpdateToOneWithWhereWithoutApplicationInput = {
    where?: jobWhereInput;
    data: XOR<jobUpdateWithoutApplicationInput, jobUncheckedUpdateWithoutApplicationInput>;
  };

  export type jobUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    salary?: NullableIntFieldUpdateOperationsInput | number | null;
    job_type?: NullableStringFieldUpdateOperationsInput | string | null;
    posted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    recruiter?: recruiterUpdateOneRequiredWithoutJobNestedInput;
  };

  export type jobUncheckedUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    recruiter_id?: StringFieldUpdateOperationsInput | string;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    salary?: NullableIntFieldUpdateOperationsInput | number | null;
    job_type?: NullableStringFieldUpdateOperationsInput | string | null;
    posted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type job_seekerUpsertWithoutApplicationInput = {
    update: XOR<job_seekerUpdateWithoutApplicationInput, job_seekerUncheckedUpdateWithoutApplicationInput>;
    create: XOR<job_seekerCreateWithoutApplicationInput, job_seekerUncheckedCreateWithoutApplicationInput>;
    where?: job_seekerWhereInput;
  };

  export type job_seekerUpdateToOneWithWhereWithoutApplicationInput = {
    where?: job_seekerWhereInput;
    data: XOR<job_seekerUpdateWithoutApplicationInput, job_seekerUncheckedUpdateWithoutApplicationInput>;
  };

  export type job_seekerUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    resume?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: NullableStringFieldUpdateOperationsInput | string | null;
    experience_years?: NullableIntFieldUpdateOperationsInput | number | null;
    education_level?: NullableStringFieldUpdateOperationsInput | string | null;
    preferred_job_type?: NullableStringFieldUpdateOperationsInput | string | null;
    preferred_location?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutJob_seekerNestedInput;
  };

  export type job_seekerUncheckedUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    resume?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: NullableStringFieldUpdateOperationsInput | string | null;
    experience_years?: NullableIntFieldUpdateOperationsInput | number | null;
    education_level?: NullableStringFieldUpdateOperationsInput | string | null;
    preferred_job_type?: NullableStringFieldUpdateOperationsInput | string | null;
    preferred_location?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type applicationCreateWithoutJobInput = {
    id?: string;
    application_date?: Date | string | null;
    status?: string | null;
    resume?: string | null;
    cover_letter?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    job_seeker: job_seekerCreateNestedOneWithoutApplicationInput;
  };

  export type applicationUncheckedCreateWithoutJobInput = {
    id?: string;
    job_seeker_id: string;
    application_date?: Date | string | null;
    status?: string | null;
    resume?: string | null;
    cover_letter?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type applicationCreateOrConnectWithoutJobInput = {
    where: applicationWhereUniqueInput;
    create: XOR<applicationCreateWithoutJobInput, applicationUncheckedCreateWithoutJobInput>;
  };

  export type applicationCreateManyJobInputEnvelope = {
    data: applicationCreateManyJobInput | applicationCreateManyJobInput[];
    skipDuplicates?: boolean;
  };

  export type recruiterCreateWithoutJobInput = {
    id?: string;
    job_posted?: number | null;
    job_filled?: number | null;
    active_jobs?: number | null;
    inactive_jobs?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization: organizationCreateNestedOneWithoutRecruiterInput;
    user: userCreateNestedOneWithoutRecruiterInput;
  };

  export type recruiterUncheckedCreateWithoutJobInput = {
    id?: string;
    user_id: string;
    organization_id: string;
    job_posted?: number | null;
    job_filled?: number | null;
    active_jobs?: number | null;
    inactive_jobs?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type recruiterCreateOrConnectWithoutJobInput = {
    where: recruiterWhereUniqueInput;
    create: XOR<recruiterCreateWithoutJobInput, recruiterUncheckedCreateWithoutJobInput>;
  };

  export type applicationUpsertWithWhereUniqueWithoutJobInput = {
    where: applicationWhereUniqueInput;
    update: XOR<applicationUpdateWithoutJobInput, applicationUncheckedUpdateWithoutJobInput>;
    create: XOR<applicationCreateWithoutJobInput, applicationUncheckedCreateWithoutJobInput>;
  };

  export type applicationUpdateWithWhereUniqueWithoutJobInput = {
    where: applicationWhereUniqueInput;
    data: XOR<applicationUpdateWithoutJobInput, applicationUncheckedUpdateWithoutJobInput>;
  };

  export type applicationUpdateManyWithWhereWithoutJobInput = {
    where: applicationScalarWhereInput;
    data: XOR<applicationUpdateManyMutationInput, applicationUncheckedUpdateManyWithoutJobInput>;
  };

  export type applicationScalarWhereInput = {
    AND?: applicationScalarWhereInput | applicationScalarWhereInput[];
    OR?: applicationScalarWhereInput[];
    NOT?: applicationScalarWhereInput | applicationScalarWhereInput[];
    id?: UuidFilter<'application'> | string;
    job_seeker_id?: UuidFilter<'application'> | string;
    job_id?: UuidFilter<'application'> | string;
    application_date?: DateTimeNullableFilter<'application'> | Date | string | null;
    status?: StringNullableFilter<'application'> | string | null;
    resume?: StringNullableFilter<'application'> | string | null;
    cover_letter?: StringNullableFilter<'application'> | string | null;
    created_at?: DateTimeFilter<'application'> | Date | string;
    updated_at?: DateTimeFilter<'application'> | Date | string;
  };

  export type recruiterUpsertWithoutJobInput = {
    update: XOR<recruiterUpdateWithoutJobInput, recruiterUncheckedUpdateWithoutJobInput>;
    create: XOR<recruiterCreateWithoutJobInput, recruiterUncheckedCreateWithoutJobInput>;
    where?: recruiterWhereInput;
  };

  export type recruiterUpdateToOneWithWhereWithoutJobInput = {
    where?: recruiterWhereInput;
    data: XOR<recruiterUpdateWithoutJobInput, recruiterUncheckedUpdateWithoutJobInput>;
  };

  export type recruiterUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string;
    job_posted?: NullableIntFieldUpdateOperationsInput | number | null;
    job_filled?: NullableIntFieldUpdateOperationsInput | number | null;
    active_jobs?: NullableIntFieldUpdateOperationsInput | number | null;
    inactive_jobs?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateOneRequiredWithoutRecruiterNestedInput;
    user?: userUpdateOneRequiredWithoutRecruiterNestedInput;
  };

  export type recruiterUncheckedUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    job_posted?: NullableIntFieldUpdateOperationsInput | number | null;
    job_filled?: NullableIntFieldUpdateOperationsInput | number | null;
    active_jobs?: NullableIntFieldUpdateOperationsInput | number | null;
    inactive_jobs?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type applicationCreateWithoutJob_seekerInput = {
    id?: string;
    application_date?: Date | string | null;
    status?: string | null;
    resume?: string | null;
    cover_letter?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    job: jobCreateNestedOneWithoutApplicationInput;
  };

  export type applicationUncheckedCreateWithoutJob_seekerInput = {
    id?: string;
    job_id: string;
    application_date?: Date | string | null;
    status?: string | null;
    resume?: string | null;
    cover_letter?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type applicationCreateOrConnectWithoutJob_seekerInput = {
    where: applicationWhereUniqueInput;
    create: XOR<applicationCreateWithoutJob_seekerInput, applicationUncheckedCreateWithoutJob_seekerInput>;
  };

  export type applicationCreateManyJob_seekerInputEnvelope = {
    data: applicationCreateManyJob_seekerInput | applicationCreateManyJob_seekerInput[];
    skipDuplicates?: boolean;
  };

  export type userCreateWithoutJob_seekerInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization?: organizationCreateNestedManyWithoutUserInput;
    recruiter?: recruiterCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutJob_seekerInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization?: organizationUncheckedCreateNestedManyWithoutUserInput;
    recruiter?: recruiterUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutJob_seekerInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutJob_seekerInput, userUncheckedCreateWithoutJob_seekerInput>;
  };

  export type applicationUpsertWithWhereUniqueWithoutJob_seekerInput = {
    where: applicationWhereUniqueInput;
    update: XOR<applicationUpdateWithoutJob_seekerInput, applicationUncheckedUpdateWithoutJob_seekerInput>;
    create: XOR<applicationCreateWithoutJob_seekerInput, applicationUncheckedCreateWithoutJob_seekerInput>;
  };

  export type applicationUpdateWithWhereUniqueWithoutJob_seekerInput = {
    where: applicationWhereUniqueInput;
    data: XOR<applicationUpdateWithoutJob_seekerInput, applicationUncheckedUpdateWithoutJob_seekerInput>;
  };

  export type applicationUpdateManyWithWhereWithoutJob_seekerInput = {
    where: applicationScalarWhereInput;
    data: XOR<applicationUpdateManyMutationInput, applicationUncheckedUpdateManyWithoutJob_seekerInput>;
  };

  export type userUpsertWithoutJob_seekerInput = {
    update: XOR<userUpdateWithoutJob_seekerInput, userUncheckedUpdateWithoutJob_seekerInput>;
    create: XOR<userCreateWithoutJob_seekerInput, userUncheckedCreateWithoutJob_seekerInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutJob_seekerInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutJob_seekerInput, userUncheckedUpdateWithoutJob_seekerInput>;
  };

  export type userUpdateWithoutJob_seekerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateManyWithoutUserNestedInput;
    recruiter?: recruiterUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutJob_seekerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUncheckedUpdateManyWithoutUserNestedInput;
    recruiter?: recruiterUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutOrganizationInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    job_seeker?: job_seekerCreateNestedManyWithoutUserInput;
    recruiter?: recruiterCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    job_seeker?: job_seekerUncheckedCreateNestedManyWithoutUserInput;
    recruiter?: recruiterUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutOrganizationInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>;
  };

  export type recruiterCreateWithoutOrganizationInput = {
    id?: string;
    job_posted?: number | null;
    job_filled?: number | null;
    active_jobs?: number | null;
    inactive_jobs?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    job?: jobCreateNestedManyWithoutRecruiterInput;
    user: userCreateNestedOneWithoutRecruiterInput;
  };

  export type recruiterUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    user_id: string;
    job_posted?: number | null;
    job_filled?: number | null;
    active_jobs?: number | null;
    inactive_jobs?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    job?: jobUncheckedCreateNestedManyWithoutRecruiterInput;
  };

  export type recruiterCreateOrConnectWithoutOrganizationInput = {
    where: recruiterWhereUniqueInput;
    create: XOR<recruiterCreateWithoutOrganizationInput, recruiterUncheckedCreateWithoutOrganizationInput>;
  };

  export type recruiterCreateManyOrganizationInputEnvelope = {
    data: recruiterCreateManyOrganizationInput | recruiterCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithoutOrganizationInput = {
    update: XOR<userUpdateWithoutOrganizationInput, userUncheckedUpdateWithoutOrganizationInput>;
    create: XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutOrganizationInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutOrganizationInput, userUncheckedUpdateWithoutOrganizationInput>;
  };

  export type userUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_seeker?: job_seekerUpdateManyWithoutUserNestedInput;
    recruiter?: recruiterUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_seeker?: job_seekerUncheckedUpdateManyWithoutUserNestedInput;
    recruiter?: recruiterUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type recruiterUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: recruiterWhereUniqueInput;
    update: XOR<recruiterUpdateWithoutOrganizationInput, recruiterUncheckedUpdateWithoutOrganizationInput>;
    create: XOR<recruiterCreateWithoutOrganizationInput, recruiterUncheckedCreateWithoutOrganizationInput>;
  };

  export type recruiterUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: recruiterWhereUniqueInput;
    data: XOR<recruiterUpdateWithoutOrganizationInput, recruiterUncheckedUpdateWithoutOrganizationInput>;
  };

  export type recruiterUpdateManyWithWhereWithoutOrganizationInput = {
    where: recruiterScalarWhereInput;
    data: XOR<recruiterUpdateManyMutationInput, recruiterUncheckedUpdateManyWithoutOrganizationInput>;
  };

  export type recruiterScalarWhereInput = {
    AND?: recruiterScalarWhereInput | recruiterScalarWhereInput[];
    OR?: recruiterScalarWhereInput[];
    NOT?: recruiterScalarWhereInput | recruiterScalarWhereInput[];
    id?: UuidFilter<'recruiter'> | string;
    user_id?: UuidFilter<'recruiter'> | string;
    organization_id?: UuidFilter<'recruiter'> | string;
    job_posted?: IntNullableFilter<'recruiter'> | number | null;
    job_filled?: IntNullableFilter<'recruiter'> | number | null;
    active_jobs?: IntNullableFilter<'recruiter'> | number | null;
    inactive_jobs?: IntNullableFilter<'recruiter'> | number | null;
    created_at?: DateTimeFilter<'recruiter'> | Date | string;
    updated_at?: DateTimeFilter<'recruiter'> | Date | string;
  };

  export type jobCreateWithoutRecruiterInput = {
    id?: string;
    title: string;
    description?: string | null;
    location?: string | null;
    salary?: number | null;
    job_type?: string | null;
    posted_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    application?: applicationCreateNestedManyWithoutJobInput;
  };

  export type jobUncheckedCreateWithoutRecruiterInput = {
    id?: string;
    title: string;
    description?: string | null;
    location?: string | null;
    salary?: number | null;
    job_type?: string | null;
    posted_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    application?: applicationUncheckedCreateNestedManyWithoutJobInput;
  };

  export type jobCreateOrConnectWithoutRecruiterInput = {
    where: jobWhereUniqueInput;
    create: XOR<jobCreateWithoutRecruiterInput, jobUncheckedCreateWithoutRecruiterInput>;
  };

  export type jobCreateManyRecruiterInputEnvelope = {
    data: jobCreateManyRecruiterInput | jobCreateManyRecruiterInput[];
    skipDuplicates?: boolean;
  };

  export type organizationCreateWithoutRecruiterInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    country?: string | null;
    postal_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutOrganizationInput;
  };

  export type organizationUncheckedCreateWithoutRecruiterInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    country?: string | null;
    postal_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type organizationCreateOrConnectWithoutRecruiterInput = {
    where: organizationWhereUniqueInput;
    create: XOR<organizationCreateWithoutRecruiterInput, organizationUncheckedCreateWithoutRecruiterInput>;
  };

  export type userCreateWithoutRecruiterInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    job_seeker?: job_seekerCreateNestedManyWithoutUserInput;
    organization?: organizationCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutRecruiterInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    job_seeker?: job_seekerUncheckedCreateNestedManyWithoutUserInput;
    organization?: organizationUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutRecruiterInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutRecruiterInput, userUncheckedCreateWithoutRecruiterInput>;
  };

  export type jobUpsertWithWhereUniqueWithoutRecruiterInput = {
    where: jobWhereUniqueInput;
    update: XOR<jobUpdateWithoutRecruiterInput, jobUncheckedUpdateWithoutRecruiterInput>;
    create: XOR<jobCreateWithoutRecruiterInput, jobUncheckedCreateWithoutRecruiterInput>;
  };

  export type jobUpdateWithWhereUniqueWithoutRecruiterInput = {
    where: jobWhereUniqueInput;
    data: XOR<jobUpdateWithoutRecruiterInput, jobUncheckedUpdateWithoutRecruiterInput>;
  };

  export type jobUpdateManyWithWhereWithoutRecruiterInput = {
    where: jobScalarWhereInput;
    data: XOR<jobUpdateManyMutationInput, jobUncheckedUpdateManyWithoutRecruiterInput>;
  };

  export type jobScalarWhereInput = {
    AND?: jobScalarWhereInput | jobScalarWhereInput[];
    OR?: jobScalarWhereInput[];
    NOT?: jobScalarWhereInput | jobScalarWhereInput[];
    id?: UuidFilter<'job'> | string;
    title?: StringFilter<'job'> | string;
    description?: StringNullableFilter<'job'> | string | null;
    recruiter_id?: UuidFilter<'job'> | string;
    location?: StringNullableFilter<'job'> | string | null;
    salary?: IntNullableFilter<'job'> | number | null;
    job_type?: StringNullableFilter<'job'> | string | null;
    posted_date?: DateTimeNullableFilter<'job'> | Date | string | null;
    created_at?: DateTimeFilter<'job'> | Date | string;
    updated_at?: DateTimeFilter<'job'> | Date | string;
  };

  export type organizationUpsertWithoutRecruiterInput = {
    update: XOR<organizationUpdateWithoutRecruiterInput, organizationUncheckedUpdateWithoutRecruiterInput>;
    create: XOR<organizationCreateWithoutRecruiterInput, organizationUncheckedCreateWithoutRecruiterInput>;
    where?: organizationWhereInput;
  };

  export type organizationUpdateToOneWithWhereWithoutRecruiterInput = {
    where?: organizationWhereInput;
    data: XOR<organizationUpdateWithoutRecruiterInput, organizationUncheckedUpdateWithoutRecruiterInput>;
  };

  export type organizationUpdateWithoutRecruiterInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateWithoutRecruiterInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type userUpsertWithoutRecruiterInput = {
    update: XOR<userUpdateWithoutRecruiterInput, userUncheckedUpdateWithoutRecruiterInput>;
    create: XOR<userCreateWithoutRecruiterInput, userUncheckedCreateWithoutRecruiterInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutRecruiterInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutRecruiterInput, userUncheckedUpdateWithoutRecruiterInput>;
  };

  export type userUpdateWithoutRecruiterInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_seeker?: job_seekerUpdateManyWithoutUserNestedInput;
    organization?: organizationUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutRecruiterInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_seeker?: job_seekerUncheckedUpdateManyWithoutUserNestedInput;
    organization?: organizationUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type job_seekerCreateWithoutUserInput = {
    id?: string;
    resume?: string | null;
    skills?: string | null;
    experience_years?: number | null;
    education_level?: string | null;
    preferred_job_type?: string | null;
    preferred_location?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    application?: applicationCreateNestedManyWithoutJob_seekerInput;
  };

  export type job_seekerUncheckedCreateWithoutUserInput = {
    id?: string;
    resume?: string | null;
    skills?: string | null;
    experience_years?: number | null;
    education_level?: string | null;
    preferred_job_type?: string | null;
    preferred_location?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    application?: applicationUncheckedCreateNestedManyWithoutJob_seekerInput;
  };

  export type job_seekerCreateOrConnectWithoutUserInput = {
    where: job_seekerWhereUniqueInput;
    create: XOR<job_seekerCreateWithoutUserInput, job_seekerUncheckedCreateWithoutUserInput>;
  };

  export type job_seekerCreateManyUserInputEnvelope = {
    data: job_seekerCreateManyUserInput | job_seekerCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type organizationCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    country?: string | null;
    postal_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    recruiter?: recruiterCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    country?: string | null;
    postal_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    recruiter?: recruiterUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationCreateOrConnectWithoutUserInput = {
    where: organizationWhereUniqueInput;
    create: XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>;
  };

  export type organizationCreateManyUserInputEnvelope = {
    data: organizationCreateManyUserInput | organizationCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type recruiterCreateWithoutUserInput = {
    id?: string;
    job_posted?: number | null;
    job_filled?: number | null;
    active_jobs?: number | null;
    inactive_jobs?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    job?: jobCreateNestedManyWithoutRecruiterInput;
    organization: organizationCreateNestedOneWithoutRecruiterInput;
  };

  export type recruiterUncheckedCreateWithoutUserInput = {
    id?: string;
    organization_id: string;
    job_posted?: number | null;
    job_filled?: number | null;
    active_jobs?: number | null;
    inactive_jobs?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    job?: jobUncheckedCreateNestedManyWithoutRecruiterInput;
  };

  export type recruiterCreateOrConnectWithoutUserInput = {
    where: recruiterWhereUniqueInput;
    create: XOR<recruiterCreateWithoutUserInput, recruiterUncheckedCreateWithoutUserInput>;
  };

  export type recruiterCreateManyUserInputEnvelope = {
    data: recruiterCreateManyUserInput | recruiterCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type job_seekerUpsertWithWhereUniqueWithoutUserInput = {
    where: job_seekerWhereUniqueInput;
    update: XOR<job_seekerUpdateWithoutUserInput, job_seekerUncheckedUpdateWithoutUserInput>;
    create: XOR<job_seekerCreateWithoutUserInput, job_seekerUncheckedCreateWithoutUserInput>;
  };

  export type job_seekerUpdateWithWhereUniqueWithoutUserInput = {
    where: job_seekerWhereUniqueInput;
    data: XOR<job_seekerUpdateWithoutUserInput, job_seekerUncheckedUpdateWithoutUserInput>;
  };

  export type job_seekerUpdateManyWithWhereWithoutUserInput = {
    where: job_seekerScalarWhereInput;
    data: XOR<job_seekerUpdateManyMutationInput, job_seekerUncheckedUpdateManyWithoutUserInput>;
  };

  export type job_seekerScalarWhereInput = {
    AND?: job_seekerScalarWhereInput | job_seekerScalarWhereInput[];
    OR?: job_seekerScalarWhereInput[];
    NOT?: job_seekerScalarWhereInput | job_seekerScalarWhereInput[];
    id?: UuidFilter<'job_seeker'> | string;
    user_id?: UuidFilter<'job_seeker'> | string;
    resume?: StringNullableFilter<'job_seeker'> | string | null;
    skills?: StringNullableFilter<'job_seeker'> | string | null;
    experience_years?: IntNullableFilter<'job_seeker'> | number | null;
    education_level?: StringNullableFilter<'job_seeker'> | string | null;
    preferred_job_type?: StringNullableFilter<'job_seeker'> | string | null;
    preferred_location?: StringNullableFilter<'job_seeker'> | string | null;
    created_at?: DateTimeFilter<'job_seeker'> | Date | string;
    updated_at?: DateTimeFilter<'job_seeker'> | Date | string;
  };

  export type organizationUpsertWithWhereUniqueWithoutUserInput = {
    where: organizationWhereUniqueInput;
    update: XOR<organizationUpdateWithoutUserInput, organizationUncheckedUpdateWithoutUserInput>;
    create: XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>;
  };

  export type organizationUpdateWithWhereUniqueWithoutUserInput = {
    where: organizationWhereUniqueInput;
    data: XOR<organizationUpdateWithoutUserInput, organizationUncheckedUpdateWithoutUserInput>;
  };

  export type organizationUpdateManyWithWhereWithoutUserInput = {
    where: organizationScalarWhereInput;
    data: XOR<organizationUpdateManyMutationInput, organizationUncheckedUpdateManyWithoutUserInput>;
  };

  export type organizationScalarWhereInput = {
    AND?: organizationScalarWhereInput | organizationScalarWhereInput[];
    OR?: organizationScalarWhereInput[];
    NOT?: organizationScalarWhereInput | organizationScalarWhereInput[];
    id?: UuidFilter<'organization'> | string;
    description?: StringNullableFilter<'organization'> | string | null;
    address?: StringNullableFilter<'organization'> | string | null;
    city?: StringNullableFilter<'organization'> | string | null;
    state?: StringNullableFilter<'organization'> | string | null;
    country?: StringNullableFilter<'organization'> | string | null;
    postal_code?: StringNullableFilter<'organization'> | string | null;
    name?: StringFilter<'organization'> | string;
    created_at?: DateTimeFilter<'organization'> | Date | string;
    updated_at?: DateTimeFilter<'organization'> | Date | string;
    user_id?: UuidFilter<'organization'> | string;
    tenant_id?: StringFilter<'organization'> | string;
  };

  export type recruiterUpsertWithWhereUniqueWithoutUserInput = {
    where: recruiterWhereUniqueInput;
    update: XOR<recruiterUpdateWithoutUserInput, recruiterUncheckedUpdateWithoutUserInput>;
    create: XOR<recruiterCreateWithoutUserInput, recruiterUncheckedCreateWithoutUserInput>;
  };

  export type recruiterUpdateWithWhereUniqueWithoutUserInput = {
    where: recruiterWhereUniqueInput;
    data: XOR<recruiterUpdateWithoutUserInput, recruiterUncheckedUpdateWithoutUserInput>;
  };

  export type recruiterUpdateManyWithWhereWithoutUserInput = {
    where: recruiterScalarWhereInput;
    data: XOR<recruiterUpdateManyMutationInput, recruiterUncheckedUpdateManyWithoutUserInput>;
  };

  export type applicationCreateManyJobInput = {
    id?: string;
    job_seeker_id: string;
    application_date?: Date | string | null;
    status?: string | null;
    resume?: string | null;
    cover_letter?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type applicationUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string;
    application_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    resume?: NullableStringFieldUpdateOperationsInput | string | null;
    cover_letter?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_seeker?: job_seekerUpdateOneRequiredWithoutApplicationNestedInput;
  };

  export type applicationUncheckedUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string;
    job_seeker_id?: StringFieldUpdateOperationsInput | string;
    application_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    resume?: NullableStringFieldUpdateOperationsInput | string | null;
    cover_letter?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type applicationUncheckedUpdateManyWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string;
    job_seeker_id?: StringFieldUpdateOperationsInput | string;
    application_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    resume?: NullableStringFieldUpdateOperationsInput | string | null;
    cover_letter?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type applicationCreateManyJob_seekerInput = {
    id?: string;
    job_id: string;
    application_date?: Date | string | null;
    status?: string | null;
    resume?: string | null;
    cover_letter?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type applicationUpdateWithoutJob_seekerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    application_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    resume?: NullableStringFieldUpdateOperationsInput | string | null;
    cover_letter?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    job?: jobUpdateOneRequiredWithoutApplicationNestedInput;
  };

  export type applicationUncheckedUpdateWithoutJob_seekerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    job_id?: StringFieldUpdateOperationsInput | string;
    application_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    resume?: NullableStringFieldUpdateOperationsInput | string | null;
    cover_letter?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type applicationUncheckedUpdateManyWithoutJob_seekerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    job_id?: StringFieldUpdateOperationsInput | string;
    application_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    resume?: NullableStringFieldUpdateOperationsInput | string | null;
    cover_letter?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type recruiterCreateManyOrganizationInput = {
    id?: string;
    user_id: string;
    job_posted?: number | null;
    job_filled?: number | null;
    active_jobs?: number | null;
    inactive_jobs?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type recruiterUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    job_posted?: NullableIntFieldUpdateOperationsInput | number | null;
    job_filled?: NullableIntFieldUpdateOperationsInput | number | null;
    active_jobs?: NullableIntFieldUpdateOperationsInput | number | null;
    inactive_jobs?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    job?: jobUpdateManyWithoutRecruiterNestedInput;
    user?: userUpdateOneRequiredWithoutRecruiterNestedInput;
  };

  export type recruiterUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    job_posted?: NullableIntFieldUpdateOperationsInput | number | null;
    job_filled?: NullableIntFieldUpdateOperationsInput | number | null;
    active_jobs?: NullableIntFieldUpdateOperationsInput | number | null;
    inactive_jobs?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    job?: jobUncheckedUpdateManyWithoutRecruiterNestedInput;
  };

  export type recruiterUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    job_posted?: NullableIntFieldUpdateOperationsInput | number | null;
    job_filled?: NullableIntFieldUpdateOperationsInput | number | null;
    active_jobs?: NullableIntFieldUpdateOperationsInput | number | null;
    inactive_jobs?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type jobCreateManyRecruiterInput = {
    id?: string;
    title: string;
    description?: string | null;
    location?: string | null;
    salary?: number | null;
    job_type?: string | null;
    posted_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type jobUpdateWithoutRecruiterInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    salary?: NullableIntFieldUpdateOperationsInput | number | null;
    job_type?: NullableStringFieldUpdateOperationsInput | string | null;
    posted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    application?: applicationUpdateManyWithoutJobNestedInput;
  };

  export type jobUncheckedUpdateWithoutRecruiterInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    salary?: NullableIntFieldUpdateOperationsInput | number | null;
    job_type?: NullableStringFieldUpdateOperationsInput | string | null;
    posted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    application?: applicationUncheckedUpdateManyWithoutJobNestedInput;
  };

  export type jobUncheckedUpdateManyWithoutRecruiterInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    salary?: NullableIntFieldUpdateOperationsInput | number | null;
    job_type?: NullableStringFieldUpdateOperationsInput | string | null;
    posted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type job_seekerCreateManyUserInput = {
    id?: string;
    resume?: string | null;
    skills?: string | null;
    experience_years?: number | null;
    education_level?: string | null;
    preferred_job_type?: string | null;
    preferred_location?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type organizationCreateManyUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    country?: string | null;
    postal_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type recruiterCreateManyUserInput = {
    id?: string;
    organization_id: string;
    job_posted?: number | null;
    job_filled?: number | null;
    active_jobs?: number | null;
    inactive_jobs?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type job_seekerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    resume?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: NullableStringFieldUpdateOperationsInput | string | null;
    experience_years?: NullableIntFieldUpdateOperationsInput | number | null;
    education_level?: NullableStringFieldUpdateOperationsInput | string | null;
    preferred_job_type?: NullableStringFieldUpdateOperationsInput | string | null;
    preferred_location?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    application?: applicationUpdateManyWithoutJob_seekerNestedInput;
  };

  export type job_seekerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    resume?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: NullableStringFieldUpdateOperationsInput | string | null;
    experience_years?: NullableIntFieldUpdateOperationsInput | number | null;
    education_level?: NullableStringFieldUpdateOperationsInput | string | null;
    preferred_job_type?: NullableStringFieldUpdateOperationsInput | string | null;
    preferred_location?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    application?: applicationUncheckedUpdateManyWithoutJob_seekerNestedInput;
  };

  export type job_seekerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    resume?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: NullableStringFieldUpdateOperationsInput | string | null;
    experience_years?: NullableIntFieldUpdateOperationsInput | number | null;
    education_level?: NullableStringFieldUpdateOperationsInput | string | null;
    preferred_job_type?: NullableStringFieldUpdateOperationsInput | string | null;
    preferred_location?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type organizationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    recruiter?: recruiterUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    recruiter?: recruiterUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type recruiterUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    job_posted?: NullableIntFieldUpdateOperationsInput | number | null;
    job_filled?: NullableIntFieldUpdateOperationsInput | number | null;
    active_jobs?: NullableIntFieldUpdateOperationsInput | number | null;
    inactive_jobs?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    job?: jobUpdateManyWithoutRecruiterNestedInput;
    organization?: organizationUpdateOneRequiredWithoutRecruiterNestedInput;
  };

  export type recruiterUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    job_posted?: NullableIntFieldUpdateOperationsInput | number | null;
    job_filled?: NullableIntFieldUpdateOperationsInput | number | null;
    active_jobs?: NullableIntFieldUpdateOperationsInput | number | null;
    inactive_jobs?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    job?: jobUncheckedUpdateManyWithoutRecruiterNestedInput;
  };

  export type recruiterUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    job_posted?: NullableIntFieldUpdateOperationsInput | number | null;
    job_filled?: NullableIntFieldUpdateOperationsInput | number | null;
    active_jobs?: NullableIntFieldUpdateOperationsInput | number | null;
    inactive_jobs?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use JobCountOutputTypeDefaultArgs instead
   */
  export type JobCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    JobCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use Job_seekerCountOutputTypeDefaultArgs instead
   */
  export type Job_seekerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Job_seekerCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use OrganizationCountOutputTypeDefaultArgs instead
   */
  export type OrganizationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use RecruiterCountOutputTypeDefaultArgs instead
   */
  export type RecruiterCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    RecruiterCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use applicationDefaultArgs instead
   */
  export type applicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    applicationDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use jobDefaultArgs instead
   */
  export type jobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = jobDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use job_seekerDefaultArgs instead
   */
  export type job_seekerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    job_seekerDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use organizationDefaultArgs instead
   */
  export type organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    organizationDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use recruiterDefaultArgs instead
   */
  export type recruiterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    recruiterDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
