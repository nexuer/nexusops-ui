import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace api. */
export namespace api {

    /** Namespace console. */
    namespace console {

        /** Namespace v1. */
        namespace v1 {

            /** Namespace schema. */
            namespace schema {

                /** Properties of a LoginRequest. */
                interface ILoginRequest {

                    /** LoginRequest username */
                    username?: (string|null);

                    /** LoginRequest password */
                    password?: (string|null);
                }

                /** Represents a LoginRequest. */
                class LoginRequest implements ILoginRequest {

                    /**
                     * Constructs a new LoginRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: api.console.v1.schema.ILoginRequest);

                    /** LoginRequest username. */
                    public username: string;

                    /** LoginRequest password. */
                    public password: string;

                    /**
                     * Creates a new LoginRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LoginRequest instance
                     */
                    public static create(properties?: api.console.v1.schema.ILoginRequest): api.console.v1.schema.LoginRequest;

                    /**
                     * Encodes the specified LoginRequest message. Does not implicitly {@link api.console.v1.schema.LoginRequest.verify|verify} messages.
                     * @param message LoginRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: api.console.v1.schema.ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link api.console.v1.schema.LoginRequest.verify|verify} messages.
                     * @param message LoginRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: api.console.v1.schema.ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LoginRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LoginRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.console.v1.schema.LoginRequest;

                    /**
                     * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LoginRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.console.v1.schema.LoginRequest;

                    /**
                     * Verifies a LoginRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LoginRequest
                     */
                    public static fromObject(object: { [k: string]: any }): api.console.v1.schema.LoginRequest;

                    /**
                     * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
                     * @param message LoginRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: api.console.v1.schema.LoginRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LoginRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for LoginRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GAPIRequest. */
                interface IGAPIRequest {

                    /** GAPIRequest service */
                    service?: (string|null);

                    /** GAPIRequest action */
                    action?: (string|null);

                    /** GAPIRequest version */
                    version?: (string|null);
                }

                /** Represents a GAPIRequest. */
                class GAPIRequest implements IGAPIRequest {

                    /**
                     * Constructs a new GAPIRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: api.console.v1.schema.IGAPIRequest);

                    /** GAPIRequest service. */
                    public service: string;

                    /** GAPIRequest action. */
                    public action: string;

                    /** GAPIRequest version. */
                    public version: string;

                    /**
                     * Creates a new GAPIRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GAPIRequest instance
                     */
                    public static create(properties?: api.console.v1.schema.IGAPIRequest): api.console.v1.schema.GAPIRequest;

                    /**
                     * Encodes the specified GAPIRequest message. Does not implicitly {@link api.console.v1.schema.GAPIRequest.verify|verify} messages.
                     * @param message GAPIRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: api.console.v1.schema.IGAPIRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GAPIRequest message, length delimited. Does not implicitly {@link api.console.v1.schema.GAPIRequest.verify|verify} messages.
                     * @param message GAPIRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: api.console.v1.schema.IGAPIRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GAPIRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GAPIRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.console.v1.schema.GAPIRequest;

                    /**
                     * Decodes a GAPIRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GAPIRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.console.v1.schema.GAPIRequest;

                    /**
                     * Verifies a GAPIRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GAPIRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GAPIRequest
                     */
                    public static fromObject(object: { [k: string]: any }): api.console.v1.schema.GAPIRequest;

                    /**
                     * Creates a plain object from a GAPIRequest message. Also converts values to other types if specified.
                     * @param message GAPIRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: api.console.v1.schema.GAPIRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GAPIRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GAPIRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GAPIReply. */
                interface IGAPIReply {

                    /** GAPIReply code */
                    code?: (number|null);

                    /** GAPIReply message */
                    message?: (string|null);

                    /** GAPIReply data */
                    data?: (google.protobuf.IAny|null);
                }

                /** Represents a GAPIReply. */
                class GAPIReply implements IGAPIReply {

                    /**
                     * Constructs a new GAPIReply.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: api.console.v1.schema.IGAPIReply);

                    /** GAPIReply code. */
                    public code: number;

                    /** GAPIReply message. */
                    public message: string;

                    /** GAPIReply data. */
                    public data?: (google.protobuf.IAny|null);

                    /**
                     * Creates a new GAPIReply instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GAPIReply instance
                     */
                    public static create(properties?: api.console.v1.schema.IGAPIReply): api.console.v1.schema.GAPIReply;

                    /**
                     * Encodes the specified GAPIReply message. Does not implicitly {@link api.console.v1.schema.GAPIReply.verify|verify} messages.
                     * @param message GAPIReply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: api.console.v1.schema.IGAPIReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GAPIReply message, length delimited. Does not implicitly {@link api.console.v1.schema.GAPIReply.verify|verify} messages.
                     * @param message GAPIReply message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: api.console.v1.schema.IGAPIReply, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GAPIReply message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GAPIReply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.console.v1.schema.GAPIReply;

                    /**
                     * Decodes a GAPIReply message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GAPIReply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.console.v1.schema.GAPIReply;

                    /**
                     * Verifies a GAPIReply message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GAPIReply message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GAPIReply
                     */
                    public static fromObject(object: { [k: string]: any }): api.console.v1.schema.GAPIReply;

                    /**
                     * Creates a plain object from a GAPIReply message. Also converts values to other types if specified.
                     * @param message GAPIReply
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: api.console.v1.schema.GAPIReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GAPIReply to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GAPIReply
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace GAPIReply {

                    /** Code enum. */
                    enum Code {
                        SUCCESS = 0,
                        FAILURE = -1
                    }
                }
            }

            /** Represents a Service */
            class Service extends $protobuf.rpc.Service {

                /**
                 * Constructs a new Service service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new Service service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Service;

                /**
                 * Calls GAPI.
                 * @param request GAPIRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and GAPIReply
                 */
                public gAPI(request: api.console.v1.schema.IGAPIRequest, callback: api.console.v1.Service.GAPICallback): void;

                /**
                 * Calls GAPI.
                 * @param request GAPIRequest message or plain object
                 * @returns Promise
                 */
                public gAPI(request: api.console.v1.schema.IGAPIRequest): Promise<api.console.v1.schema.GAPIReply>;

                /**
                 * Calls Login.
                 * @param request LoginRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and LoginRequest
                 */
                public login(request: api.console.v1.schema.ILoginRequest, callback: api.console.v1.Service.LoginCallback): void;

                /**
                 * Calls Login.
                 * @param request LoginRequest message or plain object
                 * @returns Promise
                 */
                public login(request: api.console.v1.schema.ILoginRequest): Promise<api.console.v1.schema.LoginRequest>;
            }

            namespace Service {

                /**
                 * Callback as used by {@link api.console.v1.Service#gAPI}.
                 * @param error Error, if any
                 * @param [response] GAPIReply
                 */
                type GAPICallback = (error: (Error|null), response?: api.console.v1.schema.GAPIReply) => void;

                /**
                 * Callback as used by {@link api.console.v1.Service#login}.
                 * @param error Error, if any
                 * @param [response] LoginRequest
                 */
                type LoginCallback = (error: (Error|null), response?: api.console.v1.schema.LoginRequest) => void;
            }
        }
    }

    /** Namespace core. */
    namespace core {

        /** Namespace v1. */
        namespace v1 {

            /** Namespace schema. */
            namespace schema {

                /** Properties of a Message. */
                interface IMessage {

                    /** Message subject */
                    subject?: (api.core.v1.schema.Message.Subject|null);

                    /** Message format */
                    format?: (api.core.v1.schema.Message.Format|null);

                    /** Message data */
                    data?: (Uint8Array|null);
                }

                /** Represents a Message. */
                class Message implements IMessage {

                    /**
                     * Constructs a new Message.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: api.core.v1.schema.IMessage);

                    /** Message subject. */
                    public subject: api.core.v1.schema.Message.Subject;

                    /** Message format. */
                    public format: api.core.v1.schema.Message.Format;

                    /** Message data. */
                    public data: Uint8Array;

                    /**
                     * Creates a new Message instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Message instance
                     */
                    public static create(properties?: api.core.v1.schema.IMessage): api.core.v1.schema.Message;

                    /**
                     * Encodes the specified Message message. Does not implicitly {@link api.core.v1.schema.Message.verify|verify} messages.
                     * @param message Message message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: api.core.v1.schema.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Message message, length delimited. Does not implicitly {@link api.core.v1.schema.Message.verify|verify} messages.
                     * @param message Message message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: api.core.v1.schema.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Message message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Message
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.core.v1.schema.Message;

                    /**
                     * Decodes a Message message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Message
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.core.v1.schema.Message;

                    /**
                     * Verifies a Message message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Message message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Message
                     */
                    public static fromObject(object: { [k: string]: any }): api.core.v1.schema.Message;

                    /**
                     * Creates a plain object from a Message message. Also converts values to other types if specified.
                     * @param message Message
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: api.core.v1.schema.Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Message to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Message
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Message {

                    /** Subject enum. */
                    enum Subject {
                        UNKNOWN_SUBJECT = 0,
                        NODE = 1,
                        SERVER = 2
                    }

                    /** Format enum. */
                    enum Format {
                        UNKNOWN_FORMAT = 0,
                        PLAINTEXT = 1,
                        GZIP = 2
                    }
                }

                /** Properties of a Metadata. */
                interface IMetadata {

                    /** Metadata version */
                    version?: (string|null);

                    /** Metadata revision */
                    revision?: (string|null);

                    /** Metadata gs */
                    gs?: (api.core.v1.schema.Metadata.IGs|null);
                }

                /** Represents a Metadata. */
                class Metadata implements IMetadata {

                    /**
                     * Constructs a new Metadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: api.core.v1.schema.IMetadata);

                    /** Metadata version. */
                    public version: string;

                    /** Metadata revision. */
                    public revision: string;

                    /** Metadata gs. */
                    public gs?: (api.core.v1.schema.Metadata.IGs|null);

                    /**
                     * Creates a new Metadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Metadata instance
                     */
                    public static create(properties?: api.core.v1.schema.IMetadata): api.core.v1.schema.Metadata;

                    /**
                     * Encodes the specified Metadata message. Does not implicitly {@link api.core.v1.schema.Metadata.verify|verify} messages.
                     * @param message Metadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: api.core.v1.schema.IMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Metadata message, length delimited. Does not implicitly {@link api.core.v1.schema.Metadata.verify|verify} messages.
                     * @param message Metadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: api.core.v1.schema.IMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Metadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Metadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.core.v1.schema.Metadata;

                    /**
                     * Decodes a Metadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Metadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.core.v1.schema.Metadata;

                    /**
                     * Verifies a Metadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Metadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Metadata
                     */
                    public static fromObject(object: { [k: string]: any }): api.core.v1.schema.Metadata;

                    /**
                     * Creates a plain object from a Metadata message. Also converts values to other types if specified.
                     * @param message Metadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: api.core.v1.schema.Metadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Metadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Metadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Metadata {

                    /** Properties of a Gs. */
                    interface IGs {

                        /** Gs enabled */
                        enabled?: (boolean|null);

                        /** Gs externalUrl */
                        externalUrl?: (string|null);
                    }

                    /** Represents a Gs. */
                    class Gs implements IGs {

                        /**
                         * Constructs a new Gs.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: api.core.v1.schema.Metadata.IGs);

                        /** Gs enabled. */
                        public enabled: boolean;

                        /** Gs externalUrl. */
                        public externalUrl: string;

                        /**
                         * Creates a new Gs instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Gs instance
                         */
                        public static create(properties?: api.core.v1.schema.Metadata.IGs): api.core.v1.schema.Metadata.Gs;

                        /**
                         * Encodes the specified Gs message. Does not implicitly {@link api.core.v1.schema.Metadata.Gs.verify|verify} messages.
                         * @param message Gs message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: api.core.v1.schema.Metadata.IGs, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Gs message, length delimited. Does not implicitly {@link api.core.v1.schema.Metadata.Gs.verify|verify} messages.
                         * @param message Gs message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: api.core.v1.schema.Metadata.IGs, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Gs message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Gs
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.core.v1.schema.Metadata.Gs;

                        /**
                         * Decodes a Gs message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Gs
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.core.v1.schema.Metadata.Gs;

                        /**
                         * Verifies a Gs message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Gs message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Gs
                         */
                        public static fromObject(object: { [k: string]: any }): api.core.v1.schema.Metadata.Gs;

                        /**
                         * Creates a plain object from a Gs message. Also converts values to other types if specified.
                         * @param message Gs
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: api.core.v1.schema.Metadata.Gs, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Gs to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Gs
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a CreateNodeRequest. */
                interface ICreateNodeRequest {

                    /** CreateNodeRequest hostname */
                    hostname?: (string|null);

                    /** CreateNodeRequest intranetIp */
                    intranetIp?: (string[]|null);

                    /** CreateNodeRequest internetIp */
                    internetIp?: (string|null);

                    /** CreateNodeRequest internetIpv6 */
                    internetIpv6?: (string|null);
                }

                /** Represents a CreateNodeRequest. */
                class CreateNodeRequest implements ICreateNodeRequest {

                    /**
                     * Constructs a new CreateNodeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: api.core.v1.schema.ICreateNodeRequest);

                    /** CreateNodeRequest hostname. */
                    public hostname: string;

                    /** CreateNodeRequest intranetIp. */
                    public intranetIp: string[];

                    /** CreateNodeRequest internetIp. */
                    public internetIp: string;

                    /** CreateNodeRequest internetIpv6. */
                    public internetIpv6: string;

                    /**
                     * Creates a new CreateNodeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateNodeRequest instance
                     */
                    public static create(properties?: api.core.v1.schema.ICreateNodeRequest): api.core.v1.schema.CreateNodeRequest;

                    /**
                     * Encodes the specified CreateNodeRequest message. Does not implicitly {@link api.core.v1.schema.CreateNodeRequest.verify|verify} messages.
                     * @param message CreateNodeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: api.core.v1.schema.ICreateNodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateNodeRequest message, length delimited. Does not implicitly {@link api.core.v1.schema.CreateNodeRequest.verify|verify} messages.
                     * @param message CreateNodeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: api.core.v1.schema.ICreateNodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateNodeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateNodeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.core.v1.schema.CreateNodeRequest;

                    /**
                     * Decodes a CreateNodeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateNodeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.core.v1.schema.CreateNodeRequest;

                    /**
                     * Verifies a CreateNodeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateNodeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateNodeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): api.core.v1.schema.CreateNodeRequest;

                    /**
                     * Creates a plain object from a CreateNodeRequest message. Also converts values to other types if specified.
                     * @param message CreateNodeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: api.core.v1.schema.CreateNodeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateNodeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateNodeRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetNodeRequest. */
                interface IGetNodeRequest {

                    /** GetNodeRequest id */
                    id?: (string|null);
                }

                /** Represents a GetNodeRequest. */
                class GetNodeRequest implements IGetNodeRequest {

                    /**
                     * Constructs a new GetNodeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: api.core.v1.schema.IGetNodeRequest);

                    /** GetNodeRequest id. */
                    public id: string;

                    /**
                     * Creates a new GetNodeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetNodeRequest instance
                     */
                    public static create(properties?: api.core.v1.schema.IGetNodeRequest): api.core.v1.schema.GetNodeRequest;

                    /**
                     * Encodes the specified GetNodeRequest message. Does not implicitly {@link api.core.v1.schema.GetNodeRequest.verify|verify} messages.
                     * @param message GetNodeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: api.core.v1.schema.IGetNodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetNodeRequest message, length delimited. Does not implicitly {@link api.core.v1.schema.GetNodeRequest.verify|verify} messages.
                     * @param message GetNodeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: api.core.v1.schema.IGetNodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetNodeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetNodeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.core.v1.schema.GetNodeRequest;

                    /**
                     * Decodes a GetNodeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetNodeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.core.v1.schema.GetNodeRequest;

                    /**
                     * Verifies a GetNodeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetNodeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetNodeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): api.core.v1.schema.GetNodeRequest;

                    /**
                     * Creates a plain object from a GetNodeRequest message. Also converts values to other types if specified.
                     * @param message GetNodeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: api.core.v1.schema.GetNodeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetNodeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetNodeRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Represents a Service */
            class Service extends $protobuf.rpc.Service {

                /**
                 * Constructs a new Service service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new Service service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Service;

                /**
                 * Calls GRtc.
                 * @param request Message message or plain object
                 * @param callback Node-style callback called with the error, if any, and Message
                 */
                public gRtc(request: api.core.v1.schema.IMessage, callback: api.core.v1.Service.GRtcCallback): void;

                /**
                 * Calls GRtc.
                 * @param request Message message or plain object
                 * @returns Promise
                 */
                public gRtc(request: api.core.v1.schema.IMessage): Promise<api.core.v1.schema.Message>;

                /**
                 * Calls Metadata.
                 * @param request Empty message or plain object
                 * @param callback Node-style callback called with the error, if any, and Metadata
                 */
                public metadata(request: google.protobuf.IEmpty, callback: api.core.v1.Service.MetadataCallback): void;

                /**
                 * Calls Metadata.
                 * @param request Empty message or plain object
                 * @returns Promise
                 */
                public metadata(request: google.protobuf.IEmpty): Promise<api.core.v1.schema.Metadata>;

                /**
                 * Calls GetNode.
                 * @param request GetNodeRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Node
                 */
                public getNode(request: api.core.v1.schema.IGetNodeRequest, callback: api.core.v1.Service.GetNodeCallback): void;

                /**
                 * Calls GetNode.
                 * @param request GetNodeRequest message or plain object
                 * @returns Promise
                 */
                public getNode(request: api.core.v1.schema.IGetNodeRequest): Promise<api.node.v1.schema.Node>;

                /**
                 * Calls CreateNode.
                 * @param request CreateNodeRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Node
                 */
                public createNode(request: api.core.v1.schema.ICreateNodeRequest, callback: api.core.v1.Service.CreateNodeCallback): void;

                /**
                 * Calls CreateNode.
                 * @param request CreateNodeRequest message or plain object
                 * @returns Promise
                 */
                public createNode(request: api.core.v1.schema.ICreateNodeRequest): Promise<api.node.v1.schema.Node>;
            }

            namespace Service {

                /**
                 * Callback as used by {@link api.core.v1.Service#gRtc}.
                 * @param error Error, if any
                 * @param [response] Message
                 */
                type GRtcCallback = (error: (Error|null), response?: api.core.v1.schema.Message) => void;

                /**
                 * Callback as used by {@link api.core.v1.Service#metadata}.
                 * @param error Error, if any
                 * @param [response] Metadata
                 */
                type MetadataCallback = (error: (Error|null), response?: api.core.v1.schema.Metadata) => void;

                /**
                 * Callback as used by {@link api.core.v1.Service#getNode}.
                 * @param error Error, if any
                 * @param [response] Node
                 */
                type GetNodeCallback = (error: (Error|null), response?: api.node.v1.schema.Node) => void;

                /**
                 * Callback as used by {@link api.core.v1.Service#createNode}.
                 * @param error Error, if any
                 * @param [response] Node
                 */
                type CreateNodeCallback = (error: (Error|null), response?: api.node.v1.schema.Node) => void;
            }
        }
    }

    /** Namespace node. */
    namespace node {

        /** Namespace v1. */
        namespace v1 {

            /** Namespace schema. */
            namespace schema {

                /** Properties of a Node. */
                interface INode {

                    /** Node id */
                    id?: (string|null);

                    /** Node name */
                    name?: (string|null);

                    /** Node hostname */
                    hostname?: (string|null);

                    /** Node createdAt */
                    createdAt?: (string|null);

                    /** Node secret */
                    secret?: (api.node.v1.schema.Node.ISecret|null);
                }

                /** Represents a Node. */
                class Node implements INode {

                    /**
                     * Constructs a new Node.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: api.node.v1.schema.INode);

                    /** Node id. */
                    public id: string;

                    /** Node name. */
                    public name: string;

                    /** Node hostname. */
                    public hostname: string;

                    /** Node createdAt. */
                    public createdAt: string;

                    /** Node secret. */
                    public secret?: (api.node.v1.schema.Node.ISecret|null);

                    /**
                     * Creates a new Node instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Node instance
                     */
                    public static create(properties?: api.node.v1.schema.INode): api.node.v1.schema.Node;

                    /**
                     * Encodes the specified Node message. Does not implicitly {@link api.node.v1.schema.Node.verify|verify} messages.
                     * @param message Node message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: api.node.v1.schema.INode, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Node message, length delimited. Does not implicitly {@link api.node.v1.schema.Node.verify|verify} messages.
                     * @param message Node message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: api.node.v1.schema.INode, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Node message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Node
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.node.v1.schema.Node;

                    /**
                     * Decodes a Node message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Node
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.node.v1.schema.Node;

                    /**
                     * Verifies a Node message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Node message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Node
                     */
                    public static fromObject(object: { [k: string]: any }): api.node.v1.schema.Node;

                    /**
                     * Creates a plain object from a Node message. Also converts values to other types if specified.
                     * @param message Node
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: api.node.v1.schema.Node, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Node to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Node
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Node {

                    /** Properties of a Secret. */
                    interface ISecret {

                        /** Secret accessToken */
                        accessToken?: (string|null);
                    }

                    /** Represents a Secret. */
                    class Secret implements ISecret {

                        /**
                         * Constructs a new Secret.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: api.node.v1.schema.Node.ISecret);

                        /** Secret accessToken. */
                        public accessToken: string;

                        /**
                         * Creates a new Secret instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Secret instance
                         */
                        public static create(properties?: api.node.v1.schema.Node.ISecret): api.node.v1.schema.Node.Secret;

                        /**
                         * Encodes the specified Secret message. Does not implicitly {@link api.node.v1.schema.Node.Secret.verify|verify} messages.
                         * @param message Secret message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: api.node.v1.schema.Node.ISecret, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Secret message, length delimited. Does not implicitly {@link api.node.v1.schema.Node.Secret.verify|verify} messages.
                         * @param message Secret message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: api.node.v1.schema.Node.ISecret, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Secret message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Secret
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.node.v1.schema.Node.Secret;

                        /**
                         * Decodes a Secret message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Secret
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.node.v1.schema.Node.Secret;

                        /**
                         * Verifies a Secret message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Secret message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Secret
                         */
                        public static fromObject(object: { [k: string]: any }): api.node.v1.schema.Node.Secret;

                        /**
                         * Creates a plain object from a Secret message. Also converts values to other types if specified.
                         * @param message Secret
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: api.node.v1.schema.Node.Secret, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Secret to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Secret
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }
            }
        }
    }
}

/** Namespace buf. */
export namespace buf {

    /** Namespace validate. */
    namespace validate {

        /** Properties of a MessageConstraints. */
        interface IMessageConstraints {

            /** MessageConstraints disabled */
            disabled?: (boolean|null);

            /** MessageConstraints cel */
            cel?: (buf.validate.IConstraint[]|null);
        }

        /** Represents a MessageConstraints. */
        class MessageConstraints implements IMessageConstraints {

            /**
             * Constructs a new MessageConstraints.
             * @param [properties] Properties to set
             */
            constructor(properties?: buf.validate.IMessageConstraints);

            /** MessageConstraints disabled. */
            public disabled?: (boolean|null);

            /** MessageConstraints cel. */
            public cel: buf.validate.IConstraint[];

            /** MessageConstraints _disabled. */
            public _disabled?: "disabled";

            /**
             * Creates a new MessageConstraints instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageConstraints instance
             */
            public static create(properties?: buf.validate.IMessageConstraints): buf.validate.MessageConstraints;

            /**
             * Encodes the specified MessageConstraints message. Does not implicitly {@link buf.validate.MessageConstraints.verify|verify} messages.
             * @param message MessageConstraints message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: buf.validate.IMessageConstraints, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageConstraints message, length delimited. Does not implicitly {@link buf.validate.MessageConstraints.verify|verify} messages.
             * @param message MessageConstraints message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: buf.validate.IMessageConstraints, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageConstraints message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageConstraints
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): buf.validate.MessageConstraints;

            /**
             * Decodes a MessageConstraints message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageConstraints
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): buf.validate.MessageConstraints;

            /**
             * Verifies a MessageConstraints message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageConstraints message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageConstraints
             */
            public static fromObject(object: { [k: string]: any }): buf.validate.MessageConstraints;

            /**
             * Creates a plain object from a MessageConstraints message. Also converts values to other types if specified.
             * @param message MessageConstraints
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: buf.validate.MessageConstraints, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageConstraints to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MessageConstraints
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an OneofConstraints. */
        interface IOneofConstraints {

            /** OneofConstraints required */
            required?: (boolean|null);
        }

        /** Represents an OneofConstraints. */
        class OneofConstraints implements IOneofConstraints {

            /**
             * Constructs a new OneofConstraints.
             * @param [properties] Properties to set
             */
            constructor(properties?: buf.validate.IOneofConstraints);

            /** OneofConstraints required. */
            public required?: (boolean|null);

            /** OneofConstraints _required. */
            public _required?: "required";

            /**
             * Creates a new OneofConstraints instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofConstraints instance
             */
            public static create(properties?: buf.validate.IOneofConstraints): buf.validate.OneofConstraints;

            /**
             * Encodes the specified OneofConstraints message. Does not implicitly {@link buf.validate.OneofConstraints.verify|verify} messages.
             * @param message OneofConstraints message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: buf.validate.IOneofConstraints, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofConstraints message, length delimited. Does not implicitly {@link buf.validate.OneofConstraints.verify|verify} messages.
             * @param message OneofConstraints message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: buf.validate.IOneofConstraints, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofConstraints message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofConstraints
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): buf.validate.OneofConstraints;

            /**
             * Decodes an OneofConstraints message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofConstraints
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): buf.validate.OneofConstraints;

            /**
             * Verifies an OneofConstraints message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofConstraints message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofConstraints
             */
            public static fromObject(object: { [k: string]: any }): buf.validate.OneofConstraints;

            /**
             * Creates a plain object from an OneofConstraints message. Also converts values to other types if specified.
             * @param message OneofConstraints
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: buf.validate.OneofConstraints, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofConstraints to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OneofConstraints
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FieldConstraints. */
        interface IFieldConstraints {

            /** FieldConstraints cel */
            cel?: (buf.validate.IConstraint[]|null);

            /** FieldConstraints required */
            required?: (boolean|null);

            /** FieldConstraints ignore */
            ignore?: (buf.validate.Ignore|null);

            /** FieldConstraints float */
            float?: (buf.validate.IFloatRules|null);

            /** FieldConstraints double */
            double?: (buf.validate.IDoubleRules|null);

            /** FieldConstraints int32 */
            int32?: (buf.validate.IInt32Rules|null);

            /** FieldConstraints int64 */
            int64?: (buf.validate.IInt64Rules|null);

            /** FieldConstraints uint32 */
            uint32?: (buf.validate.IUInt32Rules|null);

            /** FieldConstraints uint64 */
            uint64?: (buf.validate.IUInt64Rules|null);

            /** FieldConstraints sint32 */
            sint32?: (buf.validate.ISInt32Rules|null);

            /** FieldConstraints sint64 */
            sint64?: (buf.validate.ISInt64Rules|null);

            /** FieldConstraints fixed32 */
            fixed32?: (buf.validate.IFixed32Rules|null);

            /** FieldConstraints fixed64 */
            fixed64?: (buf.validate.IFixed64Rules|null);

            /** FieldConstraints sfixed32 */
            sfixed32?: (buf.validate.ISFixed32Rules|null);

            /** FieldConstraints sfixed64 */
            sfixed64?: (buf.validate.ISFixed64Rules|null);

            /** FieldConstraints bool */
            bool?: (buf.validate.IBoolRules|null);

            /** FieldConstraints string */
            string?: (buf.validate.IStringRules|null);

            /** FieldConstraints bytes */
            bytes?: (buf.validate.IBytesRules|null);

            /** FieldConstraints enum */
            "enum"?: (buf.validate.IEnumRules|null);

            /** FieldConstraints repeated */
            repeated?: (buf.validate.IRepeatedRules|null);

            /** FieldConstraints map */
            map?: (buf.validate.IMapRules|null);

            /** FieldConstraints any */
            any?: (buf.validate.IAnyRules|null);

            /** FieldConstraints duration */
            duration?: (buf.validate.IDurationRules|null);

            /** FieldConstraints timestamp */
            timestamp?: (buf.validate.ITimestampRules|null);

            /** FieldConstraints skipped */
            skipped?: (boolean|null);

            /** FieldConstraints ignoreEmpty */
            ignoreEmpty?: (boolean|null);
        }

        /** Represents a FieldConstraints. */
        class FieldConstraints implements IFieldConstraints {

            /**
             * Constructs a new FieldConstraints.
             * @param [properties] Properties to set
             */
            constructor(properties?: buf.validate.IFieldConstraints);

            /** FieldConstraints cel. */
            public cel: buf.validate.IConstraint[];

            /** FieldConstraints required. */
            public required: boolean;

            /** FieldConstraints ignore. */
            public ignore: buf.validate.Ignore;

            /** FieldConstraints float. */
            public float?: (buf.validate.IFloatRules|null);

            /** FieldConstraints double. */
            public double?: (buf.validate.IDoubleRules|null);

            /** FieldConstraints int32. */
            public int32?: (buf.validate.IInt32Rules|null);

            /** FieldConstraints int64. */
            public int64?: (buf.validate.IInt64Rules|null);

            /** FieldConstraints uint32. */
            public uint32?: (buf.validate.IUInt32Rules|null);

            /** FieldConstraints uint64. */
            public uint64?: (buf.validate.IUInt64Rules|null);

            /** FieldConstraints sint32. */
            public sint32?: (buf.validate.ISInt32Rules|null);

            /** FieldConstraints sint64. */
            public sint64?: (buf.validate.ISInt64Rules|null);

            /** FieldConstraints fixed32. */
            public fixed32?: (buf.validate.IFixed32Rules|null);

            /** FieldConstraints fixed64. */
            public fixed64?: (buf.validate.IFixed64Rules|null);

            /** FieldConstraints sfixed32. */
            public sfixed32?: (buf.validate.ISFixed32Rules|null);

            /** FieldConstraints sfixed64. */
            public sfixed64?: (buf.validate.ISFixed64Rules|null);

            /** FieldConstraints bool. */
            public bool?: (buf.validate.IBoolRules|null);

            /** FieldConstraints string. */
            public string?: (buf.validate.IStringRules|null);

            /** FieldConstraints bytes. */
            public bytes?: (buf.validate.IBytesRules|null);

            /** FieldConstraints enum. */
            public enum?: (buf.validate.IEnumRules|null);

            /** FieldConstraints repeated. */
            public repeated?: (buf.validate.IRepeatedRules|null);

            /** FieldConstraints map. */
            public map?: (buf.validate.IMapRules|null);

            /** FieldConstraints any. */
            public any?: (buf.validate.IAnyRules|null);

            /** FieldConstraints duration. */
            public duration?: (buf.validate.IDurationRules|null);

            /** FieldConstraints timestamp. */
            public timestamp?: (buf.validate.ITimestampRules|null);

            /** FieldConstraints skipped. */
            public skipped: boolean;

            /** FieldConstraints ignoreEmpty. */
            public ignoreEmpty: boolean;

            /** FieldConstraints type. */
            public type?: ("float"|"double"|"int32"|"int64"|"uint32"|"uint64"|"sint32"|"sint64"|"fixed32"|"fixed64"|"sfixed32"|"sfixed64"|"bool"|"string"|"bytes"|"enum"|"repeated"|"map"|"any"|"duration"|"timestamp");

            /**
             * Creates a new FieldConstraints instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldConstraints instance
             */
            public static create(properties?: buf.validate.IFieldConstraints): buf.validate.FieldConstraints;

            /**
             * Encodes the specified FieldConstraints message. Does not implicitly {@link buf.validate.FieldConstraints.verify|verify} messages.
             * @param message FieldConstraints message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: buf.validate.IFieldConstraints, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldConstraints message, length delimited. Does not implicitly {@link buf.validate.FieldConstraints.verify|verify} messages.
             * @param message FieldConstraints message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: buf.validate.IFieldConstraints, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldConstraints message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldConstraints
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): buf.validate.FieldConstraints;

            /**
             * Decodes a FieldConstraints message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldConstraints
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): buf.validate.FieldConstraints;

            /**
             * Verifies a FieldConstraints message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldConstraints message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldConstraints
             */
            public static fromObject(object: { [k: string]: any }): buf.validate.FieldConstraints;

            /**
             * Creates a plain object from a FieldConstraints message. Also converts values to other types if specified.
             * @param message FieldConstraints
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: buf.validate.FieldConstraints, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldConstraints to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FieldConstraints
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Ignore enum. */
        enum Ignore {
            IGNORE_UNSPECIFIED = 0,
            IGNORE_IF_UNPOPULATED = 1,
            IGNORE_IF_DEFAULT_VALUE = 2,
            IGNORE_ALWAYS = 3,
            IGNORE_EMPTY = 1,
            IGNORE_DEFAULT = 2
        }

        /** Properties of a FloatRules. */
        interface IFloatRules {

            /** FloatRules const */
            "const"?: (number|null);

            /** FloatRules lt */
            lt?: (number|null);

            /** FloatRules lte */
            lte?: (number|null);

            /** FloatRules gt */
            gt?: (number|null);

            /** FloatRules gte */
            gte?: (number|null);

            /** FloatRules in */
            "in"?: (number[]|null);

            /** FloatRules notIn */
            notIn?: (number[]|null);

            /** FloatRules finite */
            finite?: (boolean|null);
        }

        /** Represents a FloatRules. */
        class FloatRules implements IFloatRules {

            /**
             * Constructs a new FloatRules.
             * @param [properties] Properties to set
             */
            constructor(properties?: buf.validate.IFloatRules);

            /** FloatRules const. */
            public const?: (number|null);

            /** FloatRules lt. */
            public lt?: (number|null);

            /** FloatRules lte. */
            public lte?: (number|null);

            /** FloatRules gt. */
            public gt?: (number|null);

            /** FloatRules gte. */
            public gte?: (number|null);

            /** FloatRules in. */
            public in: number[];

            /** FloatRules notIn. */
            public notIn: number[];

            /** FloatRules finite. */
            public finite: boolean;

            /** FloatRules _const. */
            public _const?: "const";

            /** FloatRules lessThan. */
            public lessThan?: ("lt"|"lte");

            /** FloatRules greaterThan. */
            public greaterThan?: ("gt"|"gte");

            /**
             * Creates a new FloatRules instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FloatRules instance
             */
            public static create(properties?: buf.validate.IFloatRules): buf.validate.FloatRules;

            /**
             * Encodes the specified FloatRules message. Does not implicitly {@link buf.validate.FloatRules.verify|verify} messages.
             * @param message FloatRules message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: buf.validate.IFloatRules, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FloatRules message, length delimited. Does not implicitly {@link buf.validate.FloatRules.verify|verify} messages.
             * @param message FloatRules message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: buf.validate.IFloatRules, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FloatRules message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FloatRules
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): buf.validate.FloatRules;

            /**
             * Decodes a FloatRules message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FloatRules
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): buf.validate.FloatRules;

            /**
             * Verifies a FloatRules message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FloatRules message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FloatRules
             */
            public static fromObject(object: { [k: string]: any }): buf.validate.FloatRules;

            /**
             * Creates a plain object from a FloatRules message. Also converts values to other types if specified.
             * @param message FloatRules
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: buf.validate.FloatRules, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FloatRules to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FloatRules
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DoubleRules. */
        interface IDoubleRules {

            /** DoubleRules const */
            "const"?: (number|null);

            /** DoubleRules lt */
            lt?: (number|null);

            /** DoubleRules lte */
            lte?: (number|null);

            /** DoubleRules gt */
            gt?: (number|null);

            /** DoubleRules gte */
            gte?: (number|null);

            /** DoubleRules in */
            "in"?: (number[]|null);

            /** DoubleRules notIn */
            notIn?: (number[]|null);

            /** DoubleRules finite */
            finite?: (boolean|null);
        }

        /** Represents a DoubleRules. */
        class DoubleRules implements IDoubleRules {

            /**
             * Constructs a new DoubleRules.
             * @param [properties] Properties to set
             */
            constructor(properties?: buf.validate.IDoubleRules);

            /** DoubleRules const. */
            public const?: (number|null);

            /** DoubleRules lt. */
            public lt?: (number|null);

            /** DoubleRules lte. */
            public lte?: (number|null);

            /** DoubleRules gt. */
            public gt?: (number|null);

            /** DoubleRules gte. */
            public gte?: (number|null);

            /** DoubleRules in. */
            public in: number[];

            /** DoubleRules notIn. */
            public notIn: number[];

            /** DoubleRules finite. */
            public finite: boolean;

            /** DoubleRules _const. */
            public _const?: "const";

            /** DoubleRules lessThan. */
            public lessThan?: ("lt"|"lte");

            /** DoubleRules greaterThan. */
            public greaterThan?: ("gt"|"gte");

            /**
             * Creates a new DoubleRules instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DoubleRules instance
             */
            public static create(properties?: buf.validate.IDoubleRules): buf.validate.DoubleRules;

            /**
             * Encodes the specified DoubleRules message. Does not implicitly {@link buf.validate.DoubleRules.verify|verify} messages.
             * @param message DoubleRules message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: buf.validate.IDoubleRules, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DoubleRules message, length delimited. Does not implicitly {@link buf.validate.DoubleRules.verify|verify} messages.
             * @param message DoubleRules message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: buf.validate.IDoubleRules, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DoubleRules message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DoubleRules
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): buf.validate.DoubleRules;

            /**
             * Decodes a DoubleRules message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DoubleRules
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): buf.validate.DoubleRules;

            /**
             * Verifies a DoubleRules message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DoubleRules message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DoubleRules
             */
            public static fromObject(object: { [k: string]: any }): buf.validate.DoubleRules;

            /**
             * Creates a plain object from a DoubleRules message. Also converts values to other types if specified.
             * @param message DoubleRules
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: buf.validate.DoubleRules, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DoubleRules to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DoubleRules
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Int32Rules. */
        interface IInt32Rules {

            /** Int32Rules const */
            "const"?: (number|null);

            /** Int32Rules lt */
            lt?: (number|null);

            /** Int32Rules lte */
            lte?: (number|null);

            /** Int32Rules gt */
            gt?: (number|null);

            /** Int32Rules gte */
            gte?: (number|null);

            /** Int32Rules in */
            "in"?: (number[]|null);

            /** Int32Rules notIn */
            notIn?: (number[]|null);
        }

        /** Represents an Int32Rules. */
        class Int32Rules implements IInt32Rules {

            /**
             * Constructs a new Int32Rules.
             * @param [properties] Properties to set
             */
            constructor(properties?: buf.validate.IInt32Rules);

            /** Int32Rules const. */
            public const?: (number|null);

            /** Int32Rules lt. */
            public lt?: (number|null);

            /** Int32Rules lte. */
            public lte?: (number|null);

            /** Int32Rules gt. */
            public gt?: (number|null);

            /** Int32Rules gte. */
            public gte?: (number|null);

            /** Int32Rules in. */
            public in: number[];

            /** Int32Rules notIn. */
            public notIn: number[];

            /** Int32Rules _const. */
            public _const?: "const";

            /** Int32Rules lessThan. */
            public lessThan?: ("lt"|"lte");

            /** Int32Rules greaterThan. */
            public greaterThan?: ("gt"|"gte");

            /**
             * Creates a new Int32Rules instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Int32Rules instance
             */
            public static create(properties?: buf.validate.IInt32Rules): buf.validate.Int32Rules;

            /**
             * Encodes the specified Int32Rules message. Does not implicitly {@link buf.validate.Int32Rules.verify|verify} messages.
             * @param message Int32Rules message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: buf.validate.IInt32Rules, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Int32Rules message, length delimited. Does not implicitly {@link buf.validate.Int32Rules.verify|verify} messages.
             * @param message Int32Rules message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: buf.validate.IInt32Rules, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Int32Rules message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Int32Rules
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): buf.validate.Int32Rules;

            /**
             * Decodes an Int32Rules message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Int32Rules
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): buf.validate.Int32Rules;

            /**
             * Verifies an Int32Rules message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Int32Rules message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Int32Rules
             */
            public static fromObject(object: { [k: string]: any }): buf.validate.Int32Rules;

            /**
             * Creates a plain object from an Int32Rules message. Also converts values to other types if specified.
             * @param message Int32Rules
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: buf.validate.Int32Rules, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Int32Rules to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Int32Rules
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Int64Rules. */
        interface IInt64Rules {

            /** Int64Rules const */
            "const"?: (number|Long|null);

            /** Int64Rules lt */
            lt?: (number|Long|null);

            /** Int64Rules lte */
            lte?: (number|Long|null);

            /** Int64Rules gt */
            gt?: (number|Long|null);

            /** Int64Rules gte */
            gte?: (number|Long|null);

            /** Int64Rules in */
            "in"?: ((number|Long)[]|null);

            /** Int64Rules notIn */
            notIn?: ((number|Long)[]|null);
        }

        /** Represents an Int64Rules. */
        class Int64Rules implements IInt64Rules {

            /**
             * Constructs a new Int64Rules.
             * @param [properties] Properties to set
             */
            constructor(properties?: buf.validate.IInt64Rules);

            /** Int64Rules const. */
            public const?: (number|Long|null);

            /** Int64Rules lt. */
            public lt?: (number|Long|null);

            /** Int64Rules lte. */
            public lte?: (number|Long|null);

            /** Int64Rules gt. */
            public gt?: (number|Long|null);

            /** Int64Rules gte. */
            public gte?: (number|Long|null);

            /** Int64Rules in. */
            public in: (number|Long)[];

            /** Int64Rules notIn. */
            public notIn: (number|Long)[];

            /** Int64Rules _const. */
            public _const?: "const";

            /** Int64Rules lessThan. */
            public lessThan?: ("lt"|"lte");

            /** Int64Rules greaterThan. */
            public greaterThan?: ("gt"|"gte");

            /**
             * Creates a new Int64Rules instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Int64Rules instance
             */
            public static create(properties?: buf.validate.IInt64Rules): buf.validate.Int64Rules;

            /**
             * Encodes the specified Int64Rules message. Does not implicitly {@link buf.validate.Int64Rules.verify|verify} messages.
             * @param message Int64Rules message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: buf.validate.IInt64Rules, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Int64Rules message, length delimited. Does not implicitly {@link buf.validate.Int64Rules.verify|verify} messages.
             * @param message Int64Rules message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: buf.validate.IInt64Rules, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Int64Rules message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Int64Rules
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): buf.validate.Int64Rules;

            /**
             * Decodes an Int64Rules message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Int64Rules
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): buf.validate.Int64Rules;

            /**
             * Verifies an Int64Rules message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Int64Rules message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Int64Rules
             */
            public static fromObject(object: { [k: string]: any }): buf.validate.Int64Rules;

            /**
             * Creates a plain object from an Int64Rules message. Also converts values to other types if specified.
             * @param message Int64Rules
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: buf.validate.Int64Rules, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Int64Rules to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Int64Rules
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a UInt32Rules. */
        interface IUInt32Rules {

            /** UInt32Rules const */
            "const"?: (number|null);

            /** UInt32Rules lt */
            lt?: (number|null);

            /** UInt32Rules lte */
            lte?: (number|null);

            /** UInt32Rules gt */
            gt?: (number|null);

            /** UInt32Rules gte */
            gte?: (number|null);

            /** UInt32Rules in */
            "in"?: (number[]|null);

            /** UInt32Rules notIn */
            notIn?: (number[]|null);
        }

        /** Represents a UInt32Rules. */
        class UInt32Rules implements IUInt32Rules {

            /**
             * Constructs a new UInt32Rules.
             * @param [properties] Properties to set
             */
            constructor(properties?: buf.validate.IUInt32Rules);

            /** UInt32Rules const. */
            public const?: (number|null);

            /** UInt32Rules lt. */
            public lt?: (number|null);

            /** UInt32Rules lte. */
            public lte?: (number|null);

            /** UInt32Rules gt. */
            public gt?: (number|null);

            /** UInt32Rules gte. */
            public gte?: (number|null);

            /** UInt32Rules in. */
            public in: number[];

            /** UInt32Rules notIn. */
            public notIn: number[];

            /** UInt32Rules _const. */
            public _const?: "const";

            /** UInt32Rules lessThan. */
            public lessThan?: ("lt"|"lte");

            /** UInt32Rules greaterThan. */
            public greaterThan?: ("gt"|"gte");

            /**
             * Creates a new UInt32Rules instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UInt32Rules instance
             */
            public static create(properties?: buf.validate.IUInt32Rules): buf.validate.UInt32Rules;

            /**
             * Encodes the specified UInt32Rules message. Does not implicitly {@link buf.validate.UInt32Rules.verify|verify} messages.
             * @param message UInt32Rules message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: buf.validate.IUInt32Rules, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UInt32Rules message, length delimited. Does not implicitly {@link buf.validate.UInt32Rules.verify|verify} messages.
             * @param message UInt32Rules message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: buf.validate.IUInt32Rules, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UInt32Rules message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UInt32Rules
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): buf.validate.UInt32Rules;

            /**
             * Decodes a UInt32Rules message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UInt32Rules
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): buf.validate.UInt32Rules;

            /**
             * Verifies a UInt32Rules message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UInt32Rules message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UInt32Rules
             */
            public static fromObject(object: { [k: string]: any }): buf.validate.UInt32Rules;

            /**
             * Creates a plain object from a UInt32Rules message. Also converts values to other types if specified.
             * @param message UInt32Rules
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: buf.validate.UInt32Rules, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UInt32Rules to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UInt32Rules
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a UInt64Rules. */
        interface IUInt64Rules {

            /** UInt64Rules const */
            "const"?: (number|Long|null);

            /** UInt64Rules lt */
            lt?: (number|Long|null);

            /** UInt64Rules lte */
            lte?: (number|Long|null);

            /** UInt64Rules gt */
            gt?: (number|Long|null);

            /** UInt64Rules gte */
            gte?: (number|Long|null);

            /** UInt64Rules in */
            "in"?: ((number|Long)[]|null);

            /** UInt64Rules notIn */
            notIn?: ((number|Long)[]|null);
        }

        /** Represents a UInt64Rules. */
        class UInt64Rules implements IUInt64Rules {

            /**
             * Constructs a new UInt64Rules.
             * @param [properties] Properties to set
             */
            constructor(properties?: buf.validate.IUInt64Rules);

            /** UInt64Rules const. */
            public const?: (number|Long|null);

            /** UInt64Rules lt. */
            public lt?: (number|Long|null);

            /** UInt64Rules lte. */
            public lte?: (number|Long|null);

            /** UInt64Rules gt. */
            public gt?: (number|Long|null);

            /** UInt64Rules gte. */
            public gte?: (number|Long|null);

            /** UInt64Rules in. */
            public in: (number|Long)[];

            /** UInt64Rules notIn. */
            public notIn: (number|Long)[];

            /** UInt64Rules _const. */
            public _const?: "const";

            /** UInt64Rules lessThan. */
            public lessThan?: ("lt"|"lte");

            /** UInt64Rules greaterThan. */
            public greaterThan?: ("gt"|"gte");

            /**
             * Creates a new UInt64Rules instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UInt64Rules instance
             */
            public static create(properties?: buf.validate.IUInt64Rules): buf.validate.UInt64Rules;

            /**
             * Encodes the specified UInt64Rules message. Does not implicitly {@link buf.validate.UInt64Rules.verify|verify} messages.
             * @param message UInt64Rules message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: buf.validate.IUInt64Rules, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UInt64Rules message, length delimited. Does not implicitly {@link buf.validate.UInt64Rules.verify|verify} messages.
             * @param message UInt64Rules message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: buf.validate.IUInt64Rules, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UInt64Rules message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UInt64Rules
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): buf.validate.UInt64Rules;

            /**
             * Decodes a UInt64Rules message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UInt64Rules
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): buf.validate.UInt64Rules;

            /**
             * Verifies a UInt64Rules message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UInt64Rules message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UInt64Rules
             */
            public static fromObject(object: { [k: string]: any }): buf.validate.UInt64Rules;

            /**
             * Creates a plain object from a UInt64Rules message. Also converts values to other types if specified.
             * @param message UInt64Rules
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: buf.validate.UInt64Rules, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UInt64Rules to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UInt64Rules
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SInt32Rules. */
        interface ISInt32Rules {

            /** SInt32Rules const */
            "const"?: (number|null);

            /** SInt32Rules lt */
            lt?: (number|null);

            /** SInt32Rules lte */
            lte?: (number|null);

            /** SInt32Rules gt */
            gt?: (number|null);

            /** SInt32Rules gte */
            gte?: (number|null);

            /** SInt32Rules in */
            "in"?: (number[]|null);

            /** SInt32Rules notIn */
            notIn?: (number[]|null);
        }

        /** Represents a SInt32Rules. */
        class SInt32Rules implements ISInt32Rules {

            /**
             * Constructs a new SInt32Rules.
             * @param [properties] Properties to set
             */
            constructor(properties?: buf.validate.ISInt32Rules);

            /** SInt32Rules const. */
            public const?: (number|null);

            /** SInt32Rules lt. */
            public lt?: (number|null);

            /** SInt32Rules lte. */
            public lte?: (number|null);

            /** SInt32Rules gt. */
            public gt?: (number|null);

            /** SInt32Rules gte. */
            public gte?: (number|null);

            /** SInt32Rules in. */
            public in: number[];

            /** SInt32Rules notIn. */
            public notIn: number[];

            /** SInt32Rules _const. */
            public _const?: "const";

            /** SInt32Rules lessThan. */
            public lessThan?: ("lt"|"lte");

            /** SInt32Rules greaterThan. */
            public greaterThan?: ("gt"|"gte");

            /**
             * Creates a new SInt32Rules instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SInt32Rules instance
             */
            public static create(properties?: buf.validate.ISInt32Rules): buf.validate.SInt32Rules;

            /**
             * Encodes the specified SInt32Rules message. Does not implicitly {@link buf.validate.SInt32Rules.verify|verify} messages.
             * @param message SInt32Rules message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: buf.validate.ISInt32Rules, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SInt32Rules message, length delimited. Does not implicitly {@link buf.validate.SInt32Rules.verify|verify} messages.
             * @param message SInt32Rules message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: buf.validate.ISInt32Rules, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SInt32Rules message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SInt32Rules
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): buf.validate.SInt32Rules;

            /**
             * Decodes a SInt32Rules message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SInt32Rules
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): buf.validate.SInt32Rules;

            /**
             * Verifies a SInt32Rules message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SInt32Rules message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SInt32Rules
             */
            public static fromObject(object: { [k: string]: any }): buf.validate.SInt32Rules;

            /**
             * Creates a plain object from a SInt32Rules message. Also converts values to other types if specified.
             * @param message SInt32Rules
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: buf.validate.SInt32Rules, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SInt32Rules to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SInt32Rules
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SInt64Rules. */
        interface ISInt64Rules {

            /** SInt64Rules const */
            "const"?: (number|Long|null);

            /** SInt64Rules lt */
            lt?: (number|Long|null);

            /** SInt64Rules lte */
            lte?: (number|Long|null);

            /** SInt64Rules gt */
            gt?: (number|Long|null);

            /** SInt64Rules gte */
            gte?: (number|Long|null);

            /** SInt64Rules in */
            "in"?: ((number|Long)[]|null);

            /** SInt64Rules notIn */
            notIn?: ((number|Long)[]|null);
        }

        /** Represents a SInt64Rules. */
        class SInt64Rules implements ISInt64Rules {

            /**
             * Constructs a new SInt64Rules.
             * @param [properties] Properties to set
             */
            constructor(properties?: buf.validate.ISInt64Rules);

            /** SInt64Rules const. */
            public const?: (number|Long|null);

            /** SInt64Rules lt. */
            public lt?: (number|Long|null);

            /** SInt64Rules lte. */
            public lte?: (number|Long|null);

            /** SInt64Rules gt. */
            public gt?: (number|Long|null);

            /** SInt64Rules gte. */
            public gte?: (number|Long|null);

            /** SInt64Rules in. */
            public in: (number|Long)[];

            /** SInt64Rules notIn. */
            public notIn: (number|Long)[];

            /** SInt64Rules _const. */
            public _const?: "const";

            /** SInt64Rules lessThan. */
            public lessThan?: ("lt"|"lte");

            /** SInt64Rules greaterThan. */
            public greaterThan?: ("gt"|"gte");

            /**
             * Creates a new SInt64Rules instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SInt64Rules instance
             */
            public static create(properties?: buf.validate.ISInt64Rules): buf.validate.SInt64Rules;

            /**
             * Encodes the specified SInt64Rules message. Does not implicitly {@link buf.validate.SInt64Rules.verify|verify} messages.
             * @param message SInt64Rules message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: buf.validate.ISInt64Rules, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SInt64Rules message, length delimited. Does not implicitly {@link buf.validate.SInt64Rules.verify|verify} messages.
             * @param message SInt64Rules message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: buf.validate.ISInt64Rules, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SInt64Rules message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SInt64Rules
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): buf.validate.SInt64Rules;

            /**
             * Decodes a SInt64Rules message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SInt64Rules
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): buf.validate.SInt64Rules;

            /**
             * Verifies a SInt64Rules message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SInt64Rules message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SInt64Rules
             */
            public static fromObject(object: { [k: string]: any }): buf.validate.SInt64Rules;

            /**
             * Creates a plain object from a SInt64Rules message. Also converts values to other types if specified.
             * @param message SInt64Rules
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: buf.validate.SInt64Rules, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SInt64Rules to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SInt64Rules
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Fixed32Rules. */
        interface IFixed32Rules {

            /** Fixed32Rules const */
            "const"?: (number|null);

            /** Fixed32Rules lt */
            lt?: (number|null);

            /** Fixed32Rules lte */
            lte?: (number|null);

            /** Fixed32Rules gt */
            gt?: (number|null);

            /** Fixed32Rules gte */
            gte?: (number|null);

            /** Fixed32Rules in */
            "in"?: (number[]|null);

            /** Fixed32Rules notIn */
            notIn?: (number[]|null);
        }

        /** Represents a Fixed32Rules. */
        class Fixed32Rules implements IFixed32Rules {

            /**
             * Constructs a new Fixed32Rules.
             * @param [properties] Properties to set
             */
            constructor(properties?: buf.validate.IFixed32Rules);

            /** Fixed32Rules const. */
            public const?: (number|null);

            /** Fixed32Rules lt. */
            public lt?: (number|null);

            /** Fixed32Rules lte. */
            public lte?: (number|null);

            /** Fixed32Rules gt. */
            public gt?: (number|null);

            /** Fixed32Rules gte. */
            public gte?: (number|null);

            /** Fixed32Rules in. */
            public in: number[];

            /** Fixed32Rules notIn. */
            public notIn: number[];

            /** Fixed32Rules _const. */
            public _const?: "const";

            /** Fixed32Rules lessThan. */
            public lessThan?: ("lt"|"lte");

            /** Fixed32Rules greaterThan. */
            public greaterThan?: ("gt"|"gte");

            /**
             * Creates a new Fixed32Rules instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Fixed32Rules instance
             */
            public static create(properties?: buf.validate.IFixed32Rules): buf.validate.Fixed32Rules;

            /**
             * Encodes the specified Fixed32Rules message. Does not implicitly {@link buf.validate.Fixed32Rules.verify|verify} messages.
             * @param message Fixed32Rules message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: buf.validate.IFixed32Rules, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Fixed32Rules message, length delimited. Does not implicitly {@link buf.validate.Fixed32Rules.verify|verify} messages.
             * @param message Fixed32Rules message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: buf.validate.IFixed32Rules, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Fixed32Rules message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Fixed32Rules
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): buf.validate.Fixed32Rules;

            /**
             * Decodes a Fixed32Rules message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Fixed32Rules
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): buf.validate.Fixed32Rules;

            /**
             * Verifies a Fixed32Rules message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Fixed32Rules message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Fixed32Rules
             */
            public static fromObject(object: { [k: string]: any }): buf.validate.Fixed32Rules;

            /**
             * Creates a plain object from a Fixed32Rules message. Also converts values to other types if specified.
             * @param message Fixed32Rules
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: buf.validate.Fixed32Rules, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Fixed32Rules to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Fixed32Rules
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Fixed64Rules. */
        interface IFixed64Rules {

            /** Fixed64Rules const */
            "const"?: (number|Long|null);

            /** Fixed64Rules lt */
            lt?: (number|Long|null);

            /** Fixed64Rules lte */
            lte?: (number|Long|null);

            /** Fixed64Rules gt */
            gt?: (number|Long|null);

            /** Fixed64Rules gte */
            gte?: (number|Long|null);

            /** Fixed64Rules in */
            "in"?: ((number|Long)[]|null);

            /** Fixed64Rules notIn */
            notIn?: ((number|Long)[]|null);
        }

        /** Represents a Fixed64Rules. */
        class Fixed64Rules implements IFixed64Rules {

            /**
             * Constructs a new Fixed64Rules.
             * @param [properties] Properties to set
             */
            constructor(properties?: buf.validate.IFixed64Rules);

            /** Fixed64Rules const. */
            public const?: (number|Long|null);

            /** Fixed64Rules lt. */
            public lt?: (number|Long|null);

            /** Fixed64Rules lte. */
            public lte?: (number|Long|null);

            /** Fixed64Rules gt. */
            public gt?: (number|Long|null);

            /** Fixed64Rules gte. */
            public gte?: (number|Long|null);

            /** Fixed64Rules in. */
            public in: (number|Long)[];

            /** Fixed64Rules notIn. */
            public notIn: (number|Long)[];

            /** Fixed64Rules _const. */
            public _const?: "const";

            /** Fixed64Rules lessThan. */
            public lessThan?: ("lt"|"lte");

            /** Fixed64Rules greaterThan. */
            public greaterThan?: ("gt"|"gte");

            /**
             * Creates a new Fixed64Rules instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Fixed64Rules instance
             */
            public static create(properties?: buf.validate.IFixed64Rules): buf.validate.Fixed64Rules;

            /**
             * Encodes the specified Fixed64Rules message. Does not implicitly {@link buf.validate.Fixed64Rules.verify|verify} messages.
             * @param message Fixed64Rules message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: buf.validate.IFixed64Rules, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Fixed64Rules message, length delimited. Does not implicitly {@link buf.validate.Fixed64Rules.verify|verify} messages.
             * @param message Fixed64Rules message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: buf.validate.IFixed64Rules, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Fixed64Rules message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Fixed64Rules
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): buf.validate.Fixed64Rules;

            /**
             * Decodes a Fixed64Rules message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Fixed64Rules
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): buf.validate.Fixed64Rules;

            /**
             * Verifies a Fixed64Rules message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Fixed64Rules message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Fixed64Rules
             */
            public static fromObject(object: { [k: string]: any }): buf.validate.Fixed64Rules;

            /**
             * Creates a plain object from a Fixed64Rules message. Also converts values to other types if specified.
             * @param message Fixed64Rules
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: buf.validate.Fixed64Rules, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Fixed64Rules to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Fixed64Rules
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SFixed32Rules. */
        interface ISFixed32Rules {

            /** SFixed32Rules const */
            "const"?: (number|null);

            /** SFixed32Rules lt */
            lt?: (number|null);

            /** SFixed32Rules lte */
            lte?: (number|null);

            /** SFixed32Rules gt */
            gt?: (number|null);

            /** SFixed32Rules gte */
            gte?: (number|null);

            /** SFixed32Rules in */
            "in"?: (number[]|null);

            /** SFixed32Rules notIn */
            notIn?: (number[]|null);
        }

        /** Represents a SFixed32Rules. */
        class SFixed32Rules implements ISFixed32Rules {

            /**
             * Constructs a new SFixed32Rules.
             * @param [properties] Properties to set
             */
            constructor(properties?: buf.validate.ISFixed32Rules);

            /** SFixed32Rules const. */
            public const?: (number|null);

            /** SFixed32Rules lt. */
            public lt?: (number|null);

            /** SFixed32Rules lte. */
            public lte?: (number|null);

            /** SFixed32Rules gt. */
            public gt?: (number|null);

            /** SFixed32Rules gte. */
            public gte?: (number|null);

            /** SFixed32Rules in. */
            public in: number[];

            /** SFixed32Rules notIn. */
            public notIn: number[];

            /** SFixed32Rules _const. */
            public _const?: "const";

            /** SFixed32Rules lessThan. */
            public lessThan?: ("lt"|"lte");

            /** SFixed32Rules greaterThan. */
            public greaterThan?: ("gt"|"gte");

            /**
             * Creates a new SFixed32Rules instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SFixed32Rules instance
             */
            public static create(properties?: buf.validate.ISFixed32Rules): buf.validate.SFixed32Rules;

            /**
             * Encodes the specified SFixed32Rules message. Does not implicitly {@link buf.validate.SFixed32Rules.verify|verify} messages.
             * @param message SFixed32Rules message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: buf.validate.ISFixed32Rules, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SFixed32Rules message, length delimited. Does not implicitly {@link buf.validate.SFixed32Rules.verify|verify} messages.
             * @param message SFixed32Rules message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: buf.validate.ISFixed32Rules, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SFixed32Rules message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SFixed32Rules
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): buf.validate.SFixed32Rules;

            /**
             * Decodes a SFixed32Rules message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SFixed32Rules
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): buf.validate.SFixed32Rules;

            /**
             * Verifies a SFixed32Rules message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SFixed32Rules message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SFixed32Rules
             */
            public static fromObject(object: { [k: string]: any }): buf.validate.SFixed32Rules;

            /**
             * Creates a plain object from a SFixed32Rules message. Also converts values to other types if specified.
             * @param message SFixed32Rules
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: buf.validate.SFixed32Rules, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SFixed32Rules to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SFixed32Rules
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SFixed64Rules. */
        interface ISFixed64Rules {

            /** SFixed64Rules const */
            "const"?: (number|Long|null);

            /** SFixed64Rules lt */
            lt?: (number|Long|null);

            /** SFixed64Rules lte */
            lte?: (number|Long|null);

            /** SFixed64Rules gt */
            gt?: (number|Long|null);

            /** SFixed64Rules gte */
            gte?: (number|Long|null);

            /** SFixed64Rules in */
            "in"?: ((number|Long)[]|null);

            /** SFixed64Rules notIn */
            notIn?: ((number|Long)[]|null);
        }

        /** Represents a SFixed64Rules. */
        class SFixed64Rules implements ISFixed64Rules {

            /**
             * Constructs a new SFixed64Rules.
             * @param [properties] Properties to set
             */
            constructor(properties?: buf.validate.ISFixed64Rules);

            /** SFixed64Rules const. */
            public const?: (number|Long|null);

            /** SFixed64Rules lt. */
            public lt?: (number|Long|null);

            /** SFixed64Rules lte. */
            public lte?: (number|Long|null);

            /** SFixed64Rules gt. */
            public gt?: (number|Long|null);

            /** SFixed64Rules gte. */
            public gte?: (number|Long|null);

            /** SFixed64Rules in. */
            public in: (number|Long)[];

            /** SFixed64Rules notIn. */
            public notIn: (number|Long)[];

            /** SFixed64Rules _const. */
            public _const?: "const";

            /** SFixed64Rules lessThan. */
            public lessThan?: ("lt"|"lte");

            /** SFixed64Rules greaterThan. */
            public greaterThan?: ("gt"|"gte");

            /**
             * Creates a new SFixed64Rules instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SFixed64Rules instance
             */
            public static create(properties?: buf.validate.ISFixed64Rules): buf.validate.SFixed64Rules;

            /**
             * Encodes the specified SFixed64Rules message. Does not implicitly {@link buf.validate.SFixed64Rules.verify|verify} messages.
             * @param message SFixed64Rules message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: buf.validate.ISFixed64Rules, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SFixed64Rules message, length delimited. Does not implicitly {@link buf.validate.SFixed64Rules.verify|verify} messages.
             * @param message SFixed64Rules message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: buf.validate.ISFixed64Rules, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SFixed64Rules message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SFixed64Rules
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): buf.validate.SFixed64Rules;

            /**
             * Decodes a SFixed64Rules message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SFixed64Rules
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): buf.validate.SFixed64Rules;

            /**
             * Verifies a SFixed64Rules message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SFixed64Rules message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SFixed64Rules
             */
            public static fromObject(object: { [k: string]: any }): buf.validate.SFixed64Rules;

            /**
             * Creates a plain object from a SFixed64Rules message. Also converts values to other types if specified.
             * @param message SFixed64Rules
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: buf.validate.SFixed64Rules, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SFixed64Rules to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SFixed64Rules
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BoolRules. */
        interface IBoolRules {

            /** BoolRules const */
            "const"?: (boolean|null);
        }

        /** Represents a BoolRules. */
        class BoolRules implements IBoolRules {

            /**
             * Constructs a new BoolRules.
             * @param [properties] Properties to set
             */
            constructor(properties?: buf.validate.IBoolRules);

            /** BoolRules const. */
            public const?: (boolean|null);

            /** BoolRules _const. */
            public _const?: "const";

            /**
             * Creates a new BoolRules instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BoolRules instance
             */
            public static create(properties?: buf.validate.IBoolRules): buf.validate.BoolRules;

            /**
             * Encodes the specified BoolRules message. Does not implicitly {@link buf.validate.BoolRules.verify|verify} messages.
             * @param message BoolRules message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: buf.validate.IBoolRules, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BoolRules message, length delimited. Does not implicitly {@link buf.validate.BoolRules.verify|verify} messages.
             * @param message BoolRules message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: buf.validate.IBoolRules, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BoolRules message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BoolRules
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): buf.validate.BoolRules;

            /**
             * Decodes a BoolRules message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BoolRules
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): buf.validate.BoolRules;

            /**
             * Verifies a BoolRules message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BoolRules message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BoolRules
             */
            public static fromObject(object: { [k: string]: any }): buf.validate.BoolRules;

            /**
             * Creates a plain object from a BoolRules message. Also converts values to other types if specified.
             * @param message BoolRules
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: buf.validate.BoolRules, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BoolRules to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BoolRules
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a StringRules. */
        interface IStringRules {

            /** StringRules const */
            "const"?: (string|null);

            /** StringRules len */
            len?: (number|Long|null);

            /** StringRules minLen */
            minLen?: (number|Long|null);

            /** StringRules maxLen */
            maxLen?: (number|Long|null);

            /** StringRules lenBytes */
            lenBytes?: (number|Long|null);

            /** StringRules minBytes */
            minBytes?: (number|Long|null);

            /** StringRules maxBytes */
            maxBytes?: (number|Long|null);

            /** StringRules pattern */
            pattern?: (string|null);

            /** StringRules prefix */
            prefix?: (string|null);

            /** StringRules suffix */
            suffix?: (string|null);

            /** StringRules contains */
            contains?: (string|null);

            /** StringRules notContains */
            notContains?: (string|null);

            /** StringRules in */
            "in"?: (string[]|null);

            /** StringRules notIn */
            notIn?: (string[]|null);

            /** StringRules email */
            email?: (boolean|null);

            /** StringRules hostname */
            hostname?: (boolean|null);

            /** StringRules ip */
            ip?: (boolean|null);

            /** StringRules ipv4 */
            ipv4?: (boolean|null);

            /** StringRules ipv6 */
            ipv6?: (boolean|null);

            /** StringRules uri */
            uri?: (boolean|null);

            /** StringRules uriRef */
            uriRef?: (boolean|null);

            /** StringRules address */
            address?: (boolean|null);

            /** StringRules uuid */
            uuid?: (boolean|null);

            /** StringRules tuuid */
            tuuid?: (boolean|null);

            /** StringRules ipWithPrefixlen */
            ipWithPrefixlen?: (boolean|null);

            /** StringRules ipv4WithPrefixlen */
            ipv4WithPrefixlen?: (boolean|null);

            /** StringRules ipv6WithPrefixlen */
            ipv6WithPrefixlen?: (boolean|null);

            /** StringRules ipPrefix */
            ipPrefix?: (boolean|null);

            /** StringRules ipv4Prefix */
            ipv4Prefix?: (boolean|null);

            /** StringRules ipv6Prefix */
            ipv6Prefix?: (boolean|null);

            /** StringRules hostAndPort */
            hostAndPort?: (boolean|null);

            /** StringRules wellKnownRegex */
            wellKnownRegex?: (buf.validate.KnownRegex|null);

            /** StringRules strict */
            strict?: (boolean|null);
        }

        /** Represents a StringRules. */
        class StringRules implements IStringRules {

            /**
             * Constructs a new StringRules.
             * @param [properties] Properties to set
             */
            constructor(properties?: buf.validate.IStringRules);

            /** StringRules const. */
            public const?: (string|null);

            /** StringRules len. */
            public len?: (number|Long|null);

            /** StringRules minLen. */
            public minLen?: (number|Long|null);

            /** StringRules maxLen. */
            public maxLen?: (number|Long|null);

            /** StringRules lenBytes. */
            public lenBytes?: (number|Long|null);

            /** StringRules minBytes. */
            public minBytes?: (number|Long|null);

            /** StringRules maxBytes. */
            public maxBytes?: (number|Long|null);

            /** StringRules pattern. */
            public pattern?: (string|null);

            /** StringRules prefix. */
            public prefix?: (string|null);

            /** StringRules suffix. */
            public suffix?: (string|null);

            /** StringRules contains. */
            public contains?: (string|null);

            /** StringRules notContains. */
            public notContains?: (string|null);

            /** StringRules in. */
            public in: string[];

            /** StringRules notIn. */
            public notIn: string[];

            /** StringRules email. */
            public email?: (boolean|null);

            /** StringRules hostname. */
            public hostname?: (boolean|null);

            /** StringRules ip. */
            public ip?: (boolean|null);

            /** StringRules ipv4. */
            public ipv4?: (boolean|null);

            /** StringRules ipv6. */
            public ipv6?: (boolean|null);

            /** StringRules uri. */
            public uri?: (boolean|null);

            /** StringRules uriRef. */
            public uriRef?: (boolean|null);

            /** StringRules address. */
            public address?: (boolean|null);

            /** StringRules uuid. */
            public uuid?: (boolean|null);

            /** StringRules tuuid. */
            public tuuid?: (boolean|null);

            /** StringRules ipWithPrefixlen. */
            public ipWithPrefixlen?: (boolean|null);

            /** StringRules ipv4WithPrefixlen. */
            public ipv4WithPrefixlen?: (boolean|null);

            /** StringRules ipv6WithPrefixlen. */
            public ipv6WithPrefixlen?: (boolean|null);

            /** StringRules ipPrefix. */
            public ipPrefix?: (boolean|null);

            /** StringRules ipv4Prefix. */
            public ipv4Prefix?: (boolean|null);

            /** StringRules ipv6Prefix. */
            public ipv6Prefix?: (boolean|null);

            /** StringRules hostAndPort. */
            public hostAndPort?: (boolean|null);

            /** StringRules wellKnownRegex. */
            public wellKnownRegex?: (buf.validate.KnownRegex|null);

            /** StringRules strict. */
            public strict?: (boolean|null);

            /** StringRules _const. */
            public _const?: "const";

            /** StringRules _len. */
            public _len?: "len";

            /** StringRules _minLen. */
            public _minLen?: "minLen";

            /** StringRules _maxLen. */
            public _maxLen?: "maxLen";

            /** StringRules _lenBytes. */
            public _lenBytes?: "lenBytes";

            /** StringRules _minBytes. */
            public _minBytes?: "minBytes";

            /** StringRules _maxBytes. */
            public _maxBytes?: "maxBytes";

            /** StringRules _pattern. */
            public _pattern?: "pattern";

            /** StringRules _prefix. */
            public _prefix?: "prefix";

            /** StringRules _suffix. */
            public _suffix?: "suffix";

            /** StringRules _contains. */
            public _contains?: "contains";

            /** StringRules _notContains. */
            public _notContains?: "notContains";

            /** StringRules wellKnown. */
            public wellKnown?: ("email"|"hostname"|"ip"|"ipv4"|"ipv6"|"uri"|"uriRef"|"address"|"uuid"|"tuuid"|"ipWithPrefixlen"|"ipv4WithPrefixlen"|"ipv6WithPrefixlen"|"ipPrefix"|"ipv4Prefix"|"ipv6Prefix"|"hostAndPort"|"wellKnownRegex");

            /** StringRules _strict. */
            public _strict?: "strict";

            /**
             * Creates a new StringRules instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StringRules instance
             */
            public static create(properties?: buf.validate.IStringRules): buf.validate.StringRules;

            /**
             * Encodes the specified StringRules message. Does not implicitly {@link buf.validate.StringRules.verify|verify} messages.
             * @param message StringRules message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: buf.validate.IStringRules, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StringRules message, length delimited. Does not implicitly {@link buf.validate.StringRules.verify|verify} messages.
             * @param message StringRules message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: buf.validate.IStringRules, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StringRules message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StringRules
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): buf.validate.StringRules;

            /**
             * Decodes a StringRules message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StringRules
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): buf.validate.StringRules;

            /**
             * Verifies a StringRules message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StringRules message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StringRules
             */
            public static fromObject(object: { [k: string]: any }): buf.validate.StringRules;

            /**
             * Creates a plain object from a StringRules message. Also converts values to other types if specified.
             * @param message StringRules
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: buf.validate.StringRules, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StringRules to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for StringRules
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** KnownRegex enum. */
        enum KnownRegex {
            KNOWN_REGEX_UNSPECIFIED = 0,
            KNOWN_REGEX_HTTP_HEADER_NAME = 1,
            KNOWN_REGEX_HTTP_HEADER_VALUE = 2
        }

        /** Properties of a BytesRules. */
        interface IBytesRules {

            /** BytesRules const */
            "const"?: (Uint8Array|null);

            /** BytesRules len */
            len?: (number|Long|null);

            /** BytesRules minLen */
            minLen?: (number|Long|null);

            /** BytesRules maxLen */
            maxLen?: (number|Long|null);

            /** BytesRules pattern */
            pattern?: (string|null);

            /** BytesRules prefix */
            prefix?: (Uint8Array|null);

            /** BytesRules suffix */
            suffix?: (Uint8Array|null);

            /** BytesRules contains */
            contains?: (Uint8Array|null);

            /** BytesRules in */
            "in"?: (Uint8Array[]|null);

            /** BytesRules notIn */
            notIn?: (Uint8Array[]|null);

            /** BytesRules ip */
            ip?: (boolean|null);

            /** BytesRules ipv4 */
            ipv4?: (boolean|null);

            /** BytesRules ipv6 */
            ipv6?: (boolean|null);
        }

        /** Represents a BytesRules. */
        class BytesRules implements IBytesRules {

            /**
             * Constructs a new BytesRules.
             * @param [properties] Properties to set
             */
            constructor(properties?: buf.validate.IBytesRules);

            /** BytesRules const. */
            public const?: (Uint8Array|null);

            /** BytesRules len. */
            public len?: (number|Long|null);

            /** BytesRules minLen. */
            public minLen?: (number|Long|null);

            /** BytesRules maxLen. */
            public maxLen?: (number|Long|null);

            /** BytesRules pattern. */
            public pattern?: (string|null);

            /** BytesRules prefix. */
            public prefix?: (Uint8Array|null);

            /** BytesRules suffix. */
            public suffix?: (Uint8Array|null);

            /** BytesRules contains. */
            public contains?: (Uint8Array|null);

            /** BytesRules in. */
            public in: Uint8Array[];

            /** BytesRules notIn. */
            public notIn: Uint8Array[];

            /** BytesRules ip. */
            public ip?: (boolean|null);

            /** BytesRules ipv4. */
            public ipv4?: (boolean|null);

            /** BytesRules ipv6. */
            public ipv6?: (boolean|null);

            /** BytesRules _const. */
            public _const?: "const";

            /** BytesRules _len. */
            public _len?: "len";

            /** BytesRules _minLen. */
            public _minLen?: "minLen";

            /** BytesRules _maxLen. */
            public _maxLen?: "maxLen";

            /** BytesRules _pattern. */
            public _pattern?: "pattern";

            /** BytesRules _prefix. */
            public _prefix?: "prefix";

            /** BytesRules _suffix. */
            public _suffix?: "suffix";

            /** BytesRules _contains. */
            public _contains?: "contains";

            /** BytesRules wellKnown. */
            public wellKnown?: ("ip"|"ipv4"|"ipv6");

            /**
             * Creates a new BytesRules instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BytesRules instance
             */
            public static create(properties?: buf.validate.IBytesRules): buf.validate.BytesRules;

            /**
             * Encodes the specified BytesRules message. Does not implicitly {@link buf.validate.BytesRules.verify|verify} messages.
             * @param message BytesRules message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: buf.validate.IBytesRules, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BytesRules message, length delimited. Does not implicitly {@link buf.validate.BytesRules.verify|verify} messages.
             * @param message BytesRules message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: buf.validate.IBytesRules, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BytesRules message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BytesRules
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): buf.validate.BytesRules;

            /**
             * Decodes a BytesRules message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BytesRules
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): buf.validate.BytesRules;

            /**
             * Verifies a BytesRules message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BytesRules message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BytesRules
             */
            public static fromObject(object: { [k: string]: any }): buf.validate.BytesRules;

            /**
             * Creates a plain object from a BytesRules message. Also converts values to other types if specified.
             * @param message BytesRules
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: buf.validate.BytesRules, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BytesRules to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BytesRules
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumRules. */
        interface IEnumRules {

            /** EnumRules const */
            "const"?: (number|null);

            /** EnumRules definedOnly */
            definedOnly?: (boolean|null);

            /** EnumRules in */
            "in"?: (number[]|null);

            /** EnumRules notIn */
            notIn?: (number[]|null);
        }

        /** Represents an EnumRules. */
        class EnumRules implements IEnumRules {

            /**
             * Constructs a new EnumRules.
             * @param [properties] Properties to set
             */
            constructor(properties?: buf.validate.IEnumRules);

            /** EnumRules const. */
            public const?: (number|null);

            /** EnumRules definedOnly. */
            public definedOnly?: (boolean|null);

            /** EnumRules in. */
            public in: number[];

            /** EnumRules notIn. */
            public notIn: number[];

            /** EnumRules _const. */
            public _const?: "const";

            /** EnumRules _definedOnly. */
            public _definedOnly?: "definedOnly";

            /**
             * Creates a new EnumRules instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumRules instance
             */
            public static create(properties?: buf.validate.IEnumRules): buf.validate.EnumRules;

            /**
             * Encodes the specified EnumRules message. Does not implicitly {@link buf.validate.EnumRules.verify|verify} messages.
             * @param message EnumRules message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: buf.validate.IEnumRules, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumRules message, length delimited. Does not implicitly {@link buf.validate.EnumRules.verify|verify} messages.
             * @param message EnumRules message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: buf.validate.IEnumRules, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumRules message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumRules
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): buf.validate.EnumRules;

            /**
             * Decodes an EnumRules message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumRules
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): buf.validate.EnumRules;

            /**
             * Verifies an EnumRules message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumRules message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumRules
             */
            public static fromObject(object: { [k: string]: any }): buf.validate.EnumRules;

            /**
             * Creates a plain object from an EnumRules message. Also converts values to other types if specified.
             * @param message EnumRules
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: buf.validate.EnumRules, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumRules to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumRules
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a RepeatedRules. */
        interface IRepeatedRules {

            /** RepeatedRules minItems */
            minItems?: (number|Long|null);

            /** RepeatedRules maxItems */
            maxItems?: (number|Long|null);

            /** RepeatedRules unique */
            unique?: (boolean|null);

            /** RepeatedRules items */
            items?: (buf.validate.IFieldConstraints|null);
        }

        /** Represents a RepeatedRules. */
        class RepeatedRules implements IRepeatedRules {

            /**
             * Constructs a new RepeatedRules.
             * @param [properties] Properties to set
             */
            constructor(properties?: buf.validate.IRepeatedRules);

            /** RepeatedRules minItems. */
            public minItems?: (number|Long|null);

            /** RepeatedRules maxItems. */
            public maxItems?: (number|Long|null);

            /** RepeatedRules unique. */
            public unique?: (boolean|null);

            /** RepeatedRules items. */
            public items?: (buf.validate.IFieldConstraints|null);

            /** RepeatedRules _minItems. */
            public _minItems?: "minItems";

            /** RepeatedRules _maxItems. */
            public _maxItems?: "maxItems";

            /** RepeatedRules _unique. */
            public _unique?: "unique";

            /** RepeatedRules _items. */
            public _items?: "items";

            /**
             * Creates a new RepeatedRules instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RepeatedRules instance
             */
            public static create(properties?: buf.validate.IRepeatedRules): buf.validate.RepeatedRules;

            /**
             * Encodes the specified RepeatedRules message. Does not implicitly {@link buf.validate.RepeatedRules.verify|verify} messages.
             * @param message RepeatedRules message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: buf.validate.IRepeatedRules, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RepeatedRules message, length delimited. Does not implicitly {@link buf.validate.RepeatedRules.verify|verify} messages.
             * @param message RepeatedRules message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: buf.validate.IRepeatedRules, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RepeatedRules message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RepeatedRules
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): buf.validate.RepeatedRules;

            /**
             * Decodes a RepeatedRules message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RepeatedRules
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): buf.validate.RepeatedRules;

            /**
             * Verifies a RepeatedRules message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RepeatedRules message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RepeatedRules
             */
            public static fromObject(object: { [k: string]: any }): buf.validate.RepeatedRules;

            /**
             * Creates a plain object from a RepeatedRules message. Also converts values to other types if specified.
             * @param message RepeatedRules
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: buf.validate.RepeatedRules, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RepeatedRules to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RepeatedRules
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MapRules. */
        interface IMapRules {

            /** MapRules minPairs */
            minPairs?: (number|Long|null);

            /** MapRules maxPairs */
            maxPairs?: (number|Long|null);

            /** MapRules keys */
            keys?: (buf.validate.IFieldConstraints|null);

            /** MapRules values */
            values?: (buf.validate.IFieldConstraints|null);
        }

        /** Represents a MapRules. */
        class MapRules implements IMapRules {

            /**
             * Constructs a new MapRules.
             * @param [properties] Properties to set
             */
            constructor(properties?: buf.validate.IMapRules);

            /** MapRules minPairs. */
            public minPairs?: (number|Long|null);

            /** MapRules maxPairs. */
            public maxPairs?: (number|Long|null);

            /** MapRules keys. */
            public keys?: (buf.validate.IFieldConstraints|null);

            /** MapRules values. */
            public values?: (buf.validate.IFieldConstraints|null);

            /** MapRules _minPairs. */
            public _minPairs?: "minPairs";

            /** MapRules _maxPairs. */
            public _maxPairs?: "maxPairs";

            /** MapRules _keys. */
            public _keys?: "keys";

            /** MapRules _values. */
            public _values?: "values";

            /**
             * Creates a new MapRules instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MapRules instance
             */
            public static create(properties?: buf.validate.IMapRules): buf.validate.MapRules;

            /**
             * Encodes the specified MapRules message. Does not implicitly {@link buf.validate.MapRules.verify|verify} messages.
             * @param message MapRules message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: buf.validate.IMapRules, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MapRules message, length delimited. Does not implicitly {@link buf.validate.MapRules.verify|verify} messages.
             * @param message MapRules message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: buf.validate.IMapRules, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MapRules message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MapRules
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): buf.validate.MapRules;

            /**
             * Decodes a MapRules message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MapRules
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): buf.validate.MapRules;

            /**
             * Verifies a MapRules message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MapRules message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MapRules
             */
            public static fromObject(object: { [k: string]: any }): buf.validate.MapRules;

            /**
             * Creates a plain object from a MapRules message. Also converts values to other types if specified.
             * @param message MapRules
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: buf.validate.MapRules, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MapRules to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MapRules
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an AnyRules. */
        interface IAnyRules {

            /** AnyRules in */
            "in"?: (string[]|null);

            /** AnyRules notIn */
            notIn?: (string[]|null);
        }

        /** Represents an AnyRules. */
        class AnyRules implements IAnyRules {

            /**
             * Constructs a new AnyRules.
             * @param [properties] Properties to set
             */
            constructor(properties?: buf.validate.IAnyRules);

            /** AnyRules in. */
            public in: string[];

            /** AnyRules notIn. */
            public notIn: string[];

            /**
             * Creates a new AnyRules instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AnyRules instance
             */
            public static create(properties?: buf.validate.IAnyRules): buf.validate.AnyRules;

            /**
             * Encodes the specified AnyRules message. Does not implicitly {@link buf.validate.AnyRules.verify|verify} messages.
             * @param message AnyRules message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: buf.validate.IAnyRules, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AnyRules message, length delimited. Does not implicitly {@link buf.validate.AnyRules.verify|verify} messages.
             * @param message AnyRules message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: buf.validate.IAnyRules, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AnyRules message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AnyRules
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): buf.validate.AnyRules;

            /**
             * Decodes an AnyRules message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AnyRules
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): buf.validate.AnyRules;

            /**
             * Verifies an AnyRules message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AnyRules message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AnyRules
             */
            public static fromObject(object: { [k: string]: any }): buf.validate.AnyRules;

            /**
             * Creates a plain object from an AnyRules message. Also converts values to other types if specified.
             * @param message AnyRules
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: buf.validate.AnyRules, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AnyRules to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AnyRules
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DurationRules. */
        interface IDurationRules {

            /** DurationRules const */
            "const"?: (google.protobuf.IDuration|null);

            /** DurationRules lt */
            lt?: (google.protobuf.IDuration|null);

            /** DurationRules lte */
            lte?: (google.protobuf.IDuration|null);

            /** DurationRules gt */
            gt?: (google.protobuf.IDuration|null);

            /** DurationRules gte */
            gte?: (google.protobuf.IDuration|null);

            /** DurationRules in */
            "in"?: (google.protobuf.IDuration[]|null);

            /** DurationRules notIn */
            notIn?: (google.protobuf.IDuration[]|null);
        }

        /** Represents a DurationRules. */
        class DurationRules implements IDurationRules {

            /**
             * Constructs a new DurationRules.
             * @param [properties] Properties to set
             */
            constructor(properties?: buf.validate.IDurationRules);

            /** DurationRules const. */
            public const?: (google.protobuf.IDuration|null);

            /** DurationRules lt. */
            public lt?: (google.protobuf.IDuration|null);

            /** DurationRules lte. */
            public lte?: (google.protobuf.IDuration|null);

            /** DurationRules gt. */
            public gt?: (google.protobuf.IDuration|null);

            /** DurationRules gte. */
            public gte?: (google.protobuf.IDuration|null);

            /** DurationRules in. */
            public in: google.protobuf.IDuration[];

            /** DurationRules notIn. */
            public notIn: google.protobuf.IDuration[];

            /** DurationRules _const. */
            public _const?: "const";

            /** DurationRules lessThan. */
            public lessThan?: ("lt"|"lte");

            /** DurationRules greaterThan. */
            public greaterThan?: ("gt"|"gte");

            /**
             * Creates a new DurationRules instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DurationRules instance
             */
            public static create(properties?: buf.validate.IDurationRules): buf.validate.DurationRules;

            /**
             * Encodes the specified DurationRules message. Does not implicitly {@link buf.validate.DurationRules.verify|verify} messages.
             * @param message DurationRules message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: buf.validate.IDurationRules, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DurationRules message, length delimited. Does not implicitly {@link buf.validate.DurationRules.verify|verify} messages.
             * @param message DurationRules message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: buf.validate.IDurationRules, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DurationRules message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DurationRules
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): buf.validate.DurationRules;

            /**
             * Decodes a DurationRules message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DurationRules
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): buf.validate.DurationRules;

            /**
             * Verifies a DurationRules message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DurationRules message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DurationRules
             */
            public static fromObject(object: { [k: string]: any }): buf.validate.DurationRules;

            /**
             * Creates a plain object from a DurationRules message. Also converts values to other types if specified.
             * @param message DurationRules
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: buf.validate.DurationRules, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DurationRules to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DurationRules
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a TimestampRules. */
        interface ITimestampRules {

            /** TimestampRules const */
            "const"?: (google.protobuf.ITimestamp|null);

            /** TimestampRules lt */
            lt?: (google.protobuf.ITimestamp|null);

            /** TimestampRules lte */
            lte?: (google.protobuf.ITimestamp|null);

            /** TimestampRules ltNow */
            ltNow?: (boolean|null);

            /** TimestampRules gt */
            gt?: (google.protobuf.ITimestamp|null);

            /** TimestampRules gte */
            gte?: (google.protobuf.ITimestamp|null);

            /** TimestampRules gtNow */
            gtNow?: (boolean|null);

            /** TimestampRules within */
            within?: (google.protobuf.IDuration|null);
        }

        /** Represents a TimestampRules. */
        class TimestampRules implements ITimestampRules {

            /**
             * Constructs a new TimestampRules.
             * @param [properties] Properties to set
             */
            constructor(properties?: buf.validate.ITimestampRules);

            /** TimestampRules const. */
            public const?: (google.protobuf.ITimestamp|null);

            /** TimestampRules lt. */
            public lt?: (google.protobuf.ITimestamp|null);

            /** TimestampRules lte. */
            public lte?: (google.protobuf.ITimestamp|null);

            /** TimestampRules ltNow. */
            public ltNow?: (boolean|null);

            /** TimestampRules gt. */
            public gt?: (google.protobuf.ITimestamp|null);

            /** TimestampRules gte. */
            public gte?: (google.protobuf.ITimestamp|null);

            /** TimestampRules gtNow. */
            public gtNow?: (boolean|null);

            /** TimestampRules within. */
            public within?: (google.protobuf.IDuration|null);

            /** TimestampRules _const. */
            public _const?: "const";

            /** TimestampRules lessThan. */
            public lessThan?: ("lt"|"lte"|"ltNow");

            /** TimestampRules greaterThan. */
            public greaterThan?: ("gt"|"gte"|"gtNow");

            /** TimestampRules _within. */
            public _within?: "within";

            /**
             * Creates a new TimestampRules instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TimestampRules instance
             */
            public static create(properties?: buf.validate.ITimestampRules): buf.validate.TimestampRules;

            /**
             * Encodes the specified TimestampRules message. Does not implicitly {@link buf.validate.TimestampRules.verify|verify} messages.
             * @param message TimestampRules message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: buf.validate.ITimestampRules, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TimestampRules message, length delimited. Does not implicitly {@link buf.validate.TimestampRules.verify|verify} messages.
             * @param message TimestampRules message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: buf.validate.ITimestampRules, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TimestampRules message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TimestampRules
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): buf.validate.TimestampRules;

            /**
             * Decodes a TimestampRules message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TimestampRules
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): buf.validate.TimestampRules;

            /**
             * Verifies a TimestampRules message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TimestampRules message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TimestampRules
             */
            public static fromObject(object: { [k: string]: any }): buf.validate.TimestampRules;

            /**
             * Creates a plain object from a TimestampRules message. Also converts values to other types if specified.
             * @param message TimestampRules
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: buf.validate.TimestampRules, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TimestampRules to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TimestampRules
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Constraint. */
        interface IConstraint {

            /** Constraint id */
            id?: (string|null);

            /** Constraint message */
            message?: (string|null);

            /** Constraint expression */
            expression?: (string|null);
        }

        /** Represents a Constraint. */
        class Constraint implements IConstraint {

            /**
             * Constructs a new Constraint.
             * @param [properties] Properties to set
             */
            constructor(properties?: buf.validate.IConstraint);

            /** Constraint id. */
            public id: string;

            /** Constraint message. */
            public message: string;

            /** Constraint expression. */
            public expression: string;

            /**
             * Creates a new Constraint instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Constraint instance
             */
            public static create(properties?: buf.validate.IConstraint): buf.validate.Constraint;

            /**
             * Encodes the specified Constraint message. Does not implicitly {@link buf.validate.Constraint.verify|verify} messages.
             * @param message Constraint message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: buf.validate.IConstraint, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Constraint message, length delimited. Does not implicitly {@link buf.validate.Constraint.verify|verify} messages.
             * @param message Constraint message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: buf.validate.IConstraint, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Constraint message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Constraint
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): buf.validate.Constraint;

            /**
             * Decodes a Constraint message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Constraint
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): buf.validate.Constraint;

            /**
             * Verifies a Constraint message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Constraint message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Constraint
             */
            public static fromObject(object: { [k: string]: any }): buf.validate.Constraint;

            /**
             * Creates a plain object from a Constraint message. Also converts values to other types if specified.
             * @param message Constraint
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: buf.validate.Constraint, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Constraint to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Constraint
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Violations. */
        interface IViolations {

            /** Violations violations */
            violations?: (buf.validate.IViolation[]|null);
        }

        /** Represents a Violations. */
        class Violations implements IViolations {

            /**
             * Constructs a new Violations.
             * @param [properties] Properties to set
             */
            constructor(properties?: buf.validate.IViolations);

            /** Violations violations. */
            public violations: buf.validate.IViolation[];

            /**
             * Creates a new Violations instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Violations instance
             */
            public static create(properties?: buf.validate.IViolations): buf.validate.Violations;

            /**
             * Encodes the specified Violations message. Does not implicitly {@link buf.validate.Violations.verify|verify} messages.
             * @param message Violations message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: buf.validate.IViolations, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Violations message, length delimited. Does not implicitly {@link buf.validate.Violations.verify|verify} messages.
             * @param message Violations message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: buf.validate.IViolations, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Violations message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Violations
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): buf.validate.Violations;

            /**
             * Decodes a Violations message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Violations
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): buf.validate.Violations;

            /**
             * Verifies a Violations message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Violations message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Violations
             */
            public static fromObject(object: { [k: string]: any }): buf.validate.Violations;

            /**
             * Creates a plain object from a Violations message. Also converts values to other types if specified.
             * @param message Violations
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: buf.validate.Violations, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Violations to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Violations
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Violation. */
        interface IViolation {

            /** Violation fieldPath */
            fieldPath?: (string|null);

            /** Violation constraintId */
            constraintId?: (string|null);

            /** Violation message */
            message?: (string|null);

            /** Violation forKey */
            forKey?: (boolean|null);
        }

        /** Represents a Violation. */
        class Violation implements IViolation {

            /**
             * Constructs a new Violation.
             * @param [properties] Properties to set
             */
            constructor(properties?: buf.validate.IViolation);

            /** Violation fieldPath. */
            public fieldPath: string;

            /** Violation constraintId. */
            public constraintId: string;

            /** Violation message. */
            public message: string;

            /** Violation forKey. */
            public forKey: boolean;

            /**
             * Creates a new Violation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Violation instance
             */
            public static create(properties?: buf.validate.IViolation): buf.validate.Violation;

            /**
             * Encodes the specified Violation message. Does not implicitly {@link buf.validate.Violation.verify|verify} messages.
             * @param message Violation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: buf.validate.IViolation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Violation message, length delimited. Does not implicitly {@link buf.validate.Violation.verify|verify} messages.
             * @param message Violation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: buf.validate.IViolation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Violation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Violation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): buf.validate.Violation;

            /**
             * Decodes a Violation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Violation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): buf.validate.Violation;

            /**
             * Verifies a Violation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Violation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Violation
             */
            public static fromObject(object: { [k: string]: any }): buf.validate.Violation;

            /**
             * Creates a plain object from a Violation message. Also converts values to other types if specified.
             * @param message Violation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: buf.validate.Violation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Violation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Violation
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Namespace priv. */
        namespace priv {

            /** Properties of a FieldConstraints. */
            interface IFieldConstraints {

                /** FieldConstraints cel */
                cel?: (buf.validate.priv.IConstraint[]|null);
            }

            /** Represents a FieldConstraints. */
            class FieldConstraints implements IFieldConstraints {

                /**
                 * Constructs a new FieldConstraints.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: buf.validate.priv.IFieldConstraints);

                /** FieldConstraints cel. */
                public cel: buf.validate.priv.IConstraint[];

                /**
                 * Creates a new FieldConstraints instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FieldConstraints instance
                 */
                public static create(properties?: buf.validate.priv.IFieldConstraints): buf.validate.priv.FieldConstraints;

                /**
                 * Encodes the specified FieldConstraints message. Does not implicitly {@link buf.validate.priv.FieldConstraints.verify|verify} messages.
                 * @param message FieldConstraints message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: buf.validate.priv.IFieldConstraints, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FieldConstraints message, length delimited. Does not implicitly {@link buf.validate.priv.FieldConstraints.verify|verify} messages.
                 * @param message FieldConstraints message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: buf.validate.priv.IFieldConstraints, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FieldConstraints message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FieldConstraints
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): buf.validate.priv.FieldConstraints;

                /**
                 * Decodes a FieldConstraints message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns FieldConstraints
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): buf.validate.priv.FieldConstraints;

                /**
                 * Verifies a FieldConstraints message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FieldConstraints message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FieldConstraints
                 */
                public static fromObject(object: { [k: string]: any }): buf.validate.priv.FieldConstraints;

                /**
                 * Creates a plain object from a FieldConstraints message. Also converts values to other types if specified.
                 * @param message FieldConstraints
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: buf.validate.priv.FieldConstraints, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FieldConstraints to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for FieldConstraints
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Constraint. */
            interface IConstraint {

                /** Constraint id */
                id?: (string|null);

                /** Constraint message */
                message?: (string|null);

                /** Constraint expression */
                expression?: (string|null);
            }

            /** Represents a Constraint. */
            class Constraint implements IConstraint {

                /**
                 * Constructs a new Constraint.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: buf.validate.priv.IConstraint);

                /** Constraint id. */
                public id: string;

                /** Constraint message. */
                public message: string;

                /** Constraint expression. */
                public expression: string;

                /**
                 * Creates a new Constraint instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Constraint instance
                 */
                public static create(properties?: buf.validate.priv.IConstraint): buf.validate.priv.Constraint;

                /**
                 * Encodes the specified Constraint message. Does not implicitly {@link buf.validate.priv.Constraint.verify|verify} messages.
                 * @param message Constraint message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: buf.validate.priv.IConstraint, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Constraint message, length delimited. Does not implicitly {@link buf.validate.priv.Constraint.verify|verify} messages.
                 * @param message Constraint message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: buf.validate.priv.IConstraint, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Constraint message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Constraint
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): buf.validate.priv.Constraint;

                /**
                 * Decodes a Constraint message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Constraint
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): buf.validate.priv.Constraint;

                /**
                 * Verifies a Constraint message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Constraint message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Constraint
                 */
                public static fromObject(object: { [k: string]: any }): buf.validate.priv.Constraint;

                /**
                 * Creates a plain object from a Constraint message. Also converts values to other types if specified.
                 * @param message Constraint
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: buf.validate.priv.Constraint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Constraint to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Constraint
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of an Any. */
        interface IAny {

            /** Any type_url */
            type_url?: (string|null);

            /** Any value */
            value?: (Uint8Array|null);
        }

        /** Represents an Any. */
        class Any implements IAny {

            /**
             * Constructs a new Any.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IAny);

            /** Any type_url. */
            public type_url: string;

            /** Any value. */
            public value: Uint8Array;

            /**
             * Creates a new Any instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Any instance
             */
            public static create(properties?: google.protobuf.IAny): google.protobuf.Any;

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Any;

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Any;

            /**
             * Verifies an Any message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Any
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Any;

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @param message Any
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Any, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Any to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Any
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorSet instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorSet): google.protobuf.FileDescriptorSet;

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorSet;

            /**
             * Verifies a FileDescriptorSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param message FileDescriptorSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileDescriptorSet
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto publicDependency */
            publicDependency?: (number[]|null);

            /** FileDescriptorProto weakDependency */
            weakDependency?: (number[]|null);

            /** FileDescriptorProto messageType */
            messageType?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo */
            sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto publicDependency. */
            public publicDependency: number[];

            /** FileDescriptorProto weakDependency. */
            public weakDependency: number[];

            /** FileDescriptorProto messageType. */
            public messageType: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo. */
            public sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorProto): google.protobuf.FileDescriptorProto;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorProto;

            /**
             * Verifies a FileDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param message FileDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nestedType */
            nestedType?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extensionRange */
            extensionRange?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneofDecl */
            oneofDecl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange */
            reservedRange?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nestedType. */
            public nestedType: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extensionRange. */
            public extensionRange: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneofDecl. */
            public oneofDecl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange. */
            public reservedRange: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescriptorProto instance
             */
            public static create(properties?: google.protobuf.IDescriptorProto): google.protobuf.DescriptorProto;

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto;

            /**
             * Verifies a DescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param message DescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);

                /** ExtensionRange options */
                options?: (google.protobuf.IExtensionRangeOptions|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /** ExtensionRange options. */
                public options?: (google.protobuf.IExtensionRangeOptions|null);

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExtensionRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IExtensionRange): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Verifies an ExtensionRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtensionRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param message ExtensionRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ExtensionRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReservedRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IReservedRange): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Verifies a ReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param message ReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ReservedRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an ExtensionRangeOptions. */
        interface IExtensionRangeOptions {

            /** ExtensionRangeOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an ExtensionRangeOptions. */
        class ExtensionRangeOptions implements IExtensionRangeOptions {

            /**
             * Constructs a new ExtensionRangeOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IExtensionRangeOptions);

            /** ExtensionRangeOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ExtensionRangeOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExtensionRangeOptions instance
             */
            public static create(properties?: google.protobuf.IExtensionRangeOptions): google.protobuf.ExtensionRangeOptions;

            /**
             * Encodes the specified ExtensionRangeOptions message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExtensionRangeOptions message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ExtensionRangeOptions;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ExtensionRangeOptions;

            /**
             * Verifies an ExtensionRangeOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExtensionRangeOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExtensionRangeOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ExtensionRangeOptions;

            /**
             * Creates a plain object from an ExtensionRangeOptions message. Also converts values to other types if specified.
             * @param message ExtensionRangeOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ExtensionRangeOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExtensionRangeOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ExtensionRangeOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto typeName */
            typeName?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto defaultValue */
            defaultValue?: (string|null);

            /** FieldDescriptorProto oneofIndex */
            oneofIndex?: (number|null);

            /** FieldDescriptorProto jsonName */
            jsonName?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);

            /** FieldDescriptorProto proto3Optional */
            proto3Optional?: (boolean|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: google.protobuf.FieldDescriptorProto.Label;

            /** FieldDescriptorProto type. */
            public type: google.protobuf.FieldDescriptorProto.Type;

            /** FieldDescriptorProto typeName. */
            public typeName: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto defaultValue. */
            public defaultValue: string;

            /** FieldDescriptorProto oneofIndex. */
            public oneofIndex: number;

            /** FieldDescriptorProto jsonName. */
            public jsonName: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /** FieldDescriptorProto proto3Optional. */
            public proto3Optional: boolean;

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFieldDescriptorProto): google.protobuf.FieldDescriptorProto;

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldDescriptorProto;

            /**
             * Verifies a FieldDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param message FieldDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FieldDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REQUIRED = 2,
                LABEL_REPEATED = 3
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IOneofDescriptorProto): google.protobuf.OneofDescriptorProto;

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofDescriptorProto;

            /**
             * Verifies an OneofDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @param message OneofDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OneofDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange */
            reservedRange?: (google.protobuf.EnumDescriptorProto.IEnumReservedRange[]|null);

            /** EnumDescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange. */
            public reservedRange: google.protobuf.EnumDescriptorProto.IEnumReservedRange[];

            /** EnumDescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumDescriptorProto): google.protobuf.EnumDescriptorProto;

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto;

            /**
             * Verifies an EnumDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace EnumDescriptorProto {

            /** Properties of an EnumReservedRange. */
            interface IEnumReservedRange {

                /** EnumReservedRange start */
                start?: (number|null);

                /** EnumReservedRange end */
                end?: (number|null);
            }

            /** Represents an EnumReservedRange. */
            class EnumReservedRange implements IEnumReservedRange {

                /**
                 * Constructs a new EnumReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange);

                /** EnumReservedRange start. */
                public start: number;

                /** EnumReservedRange end. */
                public end: number;

                /**
                 * Creates a new EnumReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EnumReservedRange instance
                 */
                public static create(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Encodes the specified EnumReservedRange message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EnumReservedRange message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Verifies an EnumReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EnumReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EnumReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Creates a plain object from an EnumReservedRange message. Also converts values to other types if specified.
                 * @param message EnumReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.EnumDescriptorProto.EnumReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EnumReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for EnumReservedRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumValueDescriptorProto): google.protobuf.EnumValueDescriptorProto;

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueDescriptorProto;

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumValueDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumValueDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IServiceDescriptorProto): google.protobuf.ServiceDescriptorProto;

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceDescriptorProto;

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param message ServiceDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ServiceDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto inputType */
            inputType?: (string|null);

            /** MethodDescriptorProto outputType */
            outputType?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming */
            clientStreaming?: (boolean|null);

            /** MethodDescriptorProto serverStreaming */
            serverStreaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto inputType. */
            public inputType: string;

            /** MethodDescriptorProto outputType. */
            public outputType: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming. */
            public clientStreaming: boolean;

            /** MethodDescriptorProto serverStreaming. */
            public serverStreaming: boolean;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IMethodDescriptorProto): google.protobuf.MethodDescriptorProto;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodDescriptorProto;

            /**
             * Verifies a MethodDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param message MethodDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MethodDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions javaPackage */
            javaPackage?: (string|null);

            /** FileOptions javaOuterClassname */
            javaOuterClassname?: (string|null);

            /** FileOptions javaMultipleFiles */
            javaMultipleFiles?: (boolean|null);

            /** FileOptions javaGenerateEqualsAndHash */
            javaGenerateEqualsAndHash?: (boolean|null);

            /** FileOptions javaStringCheckUtf8 */
            javaStringCheckUtf8?: (boolean|null);

            /** FileOptions optimizeFor */
            optimizeFor?: (google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions goPackage */
            goPackage?: (string|null);

            /** FileOptions ccGenericServices */
            ccGenericServices?: (boolean|null);

            /** FileOptions javaGenericServices */
            javaGenericServices?: (boolean|null);

            /** FileOptions pyGenericServices */
            pyGenericServices?: (boolean|null);

            /** FileOptions phpGenericServices */
            phpGenericServices?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions ccEnableArenas */
            ccEnableArenas?: (boolean|null);

            /** FileOptions objcClassPrefix */
            objcClassPrefix?: (string|null);

            /** FileOptions csharpNamespace */
            csharpNamespace?: (string|null);

            /** FileOptions swiftPrefix */
            swiftPrefix?: (string|null);

            /** FileOptions phpClassPrefix */
            phpClassPrefix?: (string|null);

            /** FileOptions phpNamespace */
            phpNamespace?: (string|null);

            /** FileOptions phpMetadataNamespace */
            phpMetadataNamespace?: (string|null);

            /** FileOptions rubyPackage */
            rubyPackage?: (string|null);

            /** FileOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions javaPackage. */
            public javaPackage: string;

            /** FileOptions javaOuterClassname. */
            public javaOuterClassname: string;

            /** FileOptions javaMultipleFiles. */
            public javaMultipleFiles: boolean;

            /** FileOptions javaGenerateEqualsAndHash. */
            public javaGenerateEqualsAndHash: boolean;

            /** FileOptions javaStringCheckUtf8. */
            public javaStringCheckUtf8: boolean;

            /** FileOptions optimizeFor. */
            public optimizeFor: google.protobuf.FileOptions.OptimizeMode;

            /** FileOptions goPackage. */
            public goPackage: string;

            /** FileOptions ccGenericServices. */
            public ccGenericServices: boolean;

            /** FileOptions javaGenericServices. */
            public javaGenericServices: boolean;

            /** FileOptions pyGenericServices. */
            public pyGenericServices: boolean;

            /** FileOptions phpGenericServices. */
            public phpGenericServices: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions ccEnableArenas. */
            public ccEnableArenas: boolean;

            /** FileOptions objcClassPrefix. */
            public objcClassPrefix: string;

            /** FileOptions csharpNamespace. */
            public csharpNamespace: string;

            /** FileOptions swiftPrefix. */
            public swiftPrefix: string;

            /** FileOptions phpClassPrefix. */
            public phpClassPrefix: string;

            /** FileOptions phpNamespace. */
            public phpNamespace: string;

            /** FileOptions phpMetadataNamespace. */
            public phpMetadataNamespace: string;

            /** FileOptions rubyPackage. */
            public rubyPackage: string;

            /** FileOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileOptions instance
             */
            public static create(properties?: google.protobuf.IFileOptions): google.protobuf.FileOptions;

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileOptions;

            /**
             * Verifies a FileOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param message FileOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions messageSetWireFormat */
            messageSetWireFormat?: (boolean|null);

            /** MessageOptions noStandardDescriptorAccessor */
            noStandardDescriptorAccessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions mapEntry */
            mapEntry?: (boolean|null);

            /** MessageOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MessageOptions .buf.validate.message */
            ".buf.validate.message"?: (buf.validate.IMessageConstraints|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions messageSetWireFormat. */
            public messageSetWireFormat: boolean;

            /** MessageOptions noStandardDescriptorAccessor. */
            public noStandardDescriptorAccessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions mapEntry. */
            public mapEntry: boolean;

            /** MessageOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageOptions instance
             */
            public static create(properties?: google.protobuf.IMessageOptions): google.protobuf.MessageOptions;

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MessageOptions;

            /**
             * Verifies a MessageOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param message MessageOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MessageOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions unverifiedLazy */
            unverifiedLazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FieldOptions .buf.validate.field */
            ".buf.validate.field"?: (buf.validate.IFieldConstraints|null);

            /** FieldOptions .buf.validate.priv.field */
            ".buf.validate.priv.field"?: (buf.validate.priv.IFieldConstraints|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: google.protobuf.FieldOptions.CType;

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: google.protobuf.FieldOptions.JSType;

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions unverifiedLazy. */
            public unverifiedLazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldOptions instance
             */
            public static create(properties?: google.protobuf.IFieldOptions): google.protobuf.FieldOptions;

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions;

            /**
             * Verifies a FieldOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param message FieldOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FieldOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** OneofOptions .buf.validate.oneof */
            ".buf.validate.oneof"?: (buf.validate.IOneofConstraints|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofOptions instance
             */
            public static create(properties?: google.protobuf.IOneofOptions): google.protobuf.OneofOptions;

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofOptions;

            /**
             * Verifies an OneofOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @param message OneofOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OneofOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allowAlias */
            allowAlias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allowAlias. */
            public allowAlias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumOptions instance
             */
            public static create(properties?: google.protobuf.IEnumOptions): google.protobuf.EnumOptions;

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumOptions;

            /**
             * Verifies an EnumOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param message EnumOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueOptions instance
             */
            public static create(properties?: google.protobuf.IEnumValueOptions): google.protobuf.EnumValueOptions;

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueOptions;

            /**
             * Verifies an EnumValueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param message EnumValueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumValueOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceOptions instance
             */
            public static create(properties?: google.protobuf.IServiceOptions): google.protobuf.ServiceOptions;

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceOptions;

            /**
             * Verifies a ServiceOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param message ServiceOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ServiceOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions idempotencyLevel */
            idempotencyLevel?: (google.protobuf.MethodOptions.IdempotencyLevel|null);

            /** MethodOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions idempotencyLevel. */
            public idempotencyLevel: google.protobuf.MethodOptions.IdempotencyLevel;

            /** MethodOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodOptions instance
             */
            public static create(properties?: google.protobuf.IMethodOptions): google.protobuf.MethodOptions;

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodOptions;

            /**
             * Verifies a MethodOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param message MethodOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MethodOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace MethodOptions {

            /** IdempotencyLevel enum. */
            enum IdempotencyLevel {
                IDEMPOTENCY_UNKNOWN = 0,
                NO_SIDE_EFFECTS = 1,
                IDEMPOTENT = 2
            }
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifierValue */
            identifierValue?: (string|null);

            /** UninterpretedOption positiveIntValue */
            positiveIntValue?: (number|Long|null);

            /** UninterpretedOption negativeIntValue */
            negativeIntValue?: (number|Long|null);

            /** UninterpretedOption doubleValue */
            doubleValue?: (number|null);

            /** UninterpretedOption stringValue */
            stringValue?: (Uint8Array|null);

            /** UninterpretedOption aggregateValue */
            aggregateValue?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifierValue. */
            public identifierValue: string;

            /** UninterpretedOption positiveIntValue. */
            public positiveIntValue: (number|Long);

            /** UninterpretedOption negativeIntValue. */
            public negativeIntValue: (number|Long);

            /** UninterpretedOption doubleValue. */
            public doubleValue: number;

            /** UninterpretedOption stringValue. */
            public stringValue: Uint8Array;

            /** UninterpretedOption aggregateValue. */
            public aggregateValue: string;

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UninterpretedOption instance
             */
            public static create(properties?: google.protobuf.IUninterpretedOption): google.protobuf.UninterpretedOption;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption;

            /**
             * Verifies an UninterpretedOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UninterpretedOption
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param message UninterpretedOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UninterpretedOption
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart namePart */
                namePart: string;

                /** NamePart isExtension */
                isExtension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart namePart. */
                public namePart: string;

                /** NamePart isExtension. */
                public isExtension: boolean;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NamePart instance
                 */
                public static create(properties?: google.protobuf.UninterpretedOption.INamePart): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Verifies a NamePart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NamePart
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param message NamePart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NamePart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for NamePart
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SourceCodeInfo instance
             */
            public static create(properties?: google.protobuf.ISourceCodeInfo): google.protobuf.SourceCodeInfo;

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo;

            /**
             * Verifies a SourceCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param message SourceCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SourceCodeInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leadingComments */
                leadingComments?: (string|null);

                /** Location trailingComments */
                trailingComments?: (string|null);

                /** Location leadingDetachedComments */
                leadingDetachedComments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leadingComments. */
                public leadingComments: string;

                /** Location trailingComments. */
                public trailingComments: string;

                /** Location leadingDetachedComments. */
                public leadingDetachedComments: string[];

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Location instance
                 */
                public static create(properties?: google.protobuf.SourceCodeInfo.ILocation): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Verifies a Location message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Location
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Location to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Location
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GeneratedCodeInfo instance
             */
            public static create(properties?: google.protobuf.IGeneratedCodeInfo): google.protobuf.GeneratedCodeInfo;

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo;

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeneratedCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param message GeneratedCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.GeneratedCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GeneratedCodeInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation sourceFile */
                sourceFile?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation sourceFile. */
                public sourceFile: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Annotation instance
                 */
                public static create(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Verifies an Annotation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Annotation
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param message Annotation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Annotation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Annotation
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a Duration. */
        interface IDuration {

            /** Duration seconds */
            seconds?: (number|Long|null);

            /** Duration nanos */
            nanos?: (number|null);
        }

        /** Represents a Duration. */
        class Duration implements IDuration {

            /**
             * Constructs a new Duration.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDuration);

            /** Duration seconds. */
            public seconds: (number|Long);

            /** Duration nanos. */
            public nanos: number;

            /**
             * Creates a new Duration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Duration instance
             */
            public static create(properties?: google.protobuf.IDuration): google.protobuf.Duration;

            /**
             * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Duration message, length delimited. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Duration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Duration;

            /**
             * Decodes a Duration message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Duration;

            /**
             * Verifies a Duration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Duration message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Duration
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Duration;

            /**
             * Creates a plain object from a Duration message. Also converts values to other types if specified.
             * @param message Duration
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Duration, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Duration to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Duration
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Timestamp
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Empty. */
        interface IEmpty {
        }

        /** Represents an Empty. */
        class Empty implements IEmpty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEmpty);

            /**
             * Creates a new Empty instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Empty instance
             */
            public static create(properties?: google.protobuf.IEmpty): google.protobuf.Empty;

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Empty;

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Empty;

            /**
             * Verifies an Empty message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Empty
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Empty;

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @param message Empty
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Empty to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Empty
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Namespace api. */
    namespace api {

        /** Properties of a Http. */
        interface IHttp {

            /** Http rules */
            rules?: (google.api.IHttpRule[]|null);

            /** Http fullyDecodeReservedExpansion */
            fullyDecodeReservedExpansion?: (boolean|null);
        }

        /** Represents a Http. */
        class Http implements IHttp {

            /**
             * Constructs a new Http.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttp);

            /** Http rules. */
            public rules: google.api.IHttpRule[];

            /** Http fullyDecodeReservedExpansion. */
            public fullyDecodeReservedExpansion: boolean;

            /**
             * Creates a new Http instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Http instance
             */
            public static create(properties?: google.api.IHttp): google.api.Http;

            /**
             * Encodes the specified Http message. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Http message, length delimited. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Http message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Http;

            /**
             * Decodes a Http message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Http;

            /**
             * Verifies a Http message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Http message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Http
             */
            public static fromObject(object: { [k: string]: any }): google.api.Http;

            /**
             * Creates a plain object from a Http message. Also converts values to other types if specified.
             * @param message Http
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Http, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Http to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Http
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a HttpRule. */
        interface IHttpRule {

            /** HttpRule selector */
            selector?: (string|null);

            /** HttpRule get */
            get?: (string|null);

            /** HttpRule put */
            put?: (string|null);

            /** HttpRule post */
            post?: (string|null);

            /** HttpRule delete */
            "delete"?: (string|null);

            /** HttpRule patch */
            patch?: (string|null);

            /** HttpRule custom */
            custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body */
            body?: (string|null);

            /** HttpRule responseBody */
            responseBody?: (string|null);

            /** HttpRule additionalBindings */
            additionalBindings?: (google.api.IHttpRule[]|null);
        }

        /** Represents a HttpRule. */
        class HttpRule implements IHttpRule {

            /**
             * Constructs a new HttpRule.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttpRule);

            /** HttpRule selector. */
            public selector: string;

            /** HttpRule get. */
            public get?: (string|null);

            /** HttpRule put. */
            public put?: (string|null);

            /** HttpRule post. */
            public post?: (string|null);

            /** HttpRule delete. */
            public delete?: (string|null);

            /** HttpRule patch. */
            public patch?: (string|null);

            /** HttpRule custom. */
            public custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body. */
            public body: string;

            /** HttpRule responseBody. */
            public responseBody: string;

            /** HttpRule additionalBindings. */
            public additionalBindings: google.api.IHttpRule[];

            /** HttpRule pattern. */
            public pattern?: ("get"|"put"|"post"|"delete"|"patch"|"custom");

            /**
             * Creates a new HttpRule instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HttpRule instance
             */
            public static create(properties?: google.api.IHttpRule): google.api.HttpRule;

            /**
             * Encodes the specified HttpRule message. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HttpRule message, length delimited. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HttpRule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.HttpRule;

            /**
             * Decodes a HttpRule message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.HttpRule;

            /**
             * Verifies a HttpRule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HttpRule message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HttpRule
             */
            public static fromObject(object: { [k: string]: any }): google.api.HttpRule;

            /**
             * Creates a plain object from a HttpRule message. Also converts values to other types if specified.
             * @param message HttpRule
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.HttpRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HttpRule to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for HttpRule
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CustomHttpPattern. */
        interface ICustomHttpPattern {

            /** CustomHttpPattern kind */
            kind?: (string|null);

            /** CustomHttpPattern path */
            path?: (string|null);
        }

        /** Represents a CustomHttpPattern. */
        class CustomHttpPattern implements ICustomHttpPattern {

            /**
             * Constructs a new CustomHttpPattern.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICustomHttpPattern);

            /** CustomHttpPattern kind. */
            public kind: string;

            /** CustomHttpPattern path. */
            public path: string;

            /**
             * Creates a new CustomHttpPattern instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CustomHttpPattern instance
             */
            public static create(properties?: google.api.ICustomHttpPattern): google.api.CustomHttpPattern;

            /**
             * Encodes the specified CustomHttpPattern message. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CustomHttpPattern message, length delimited. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CustomHttpPattern;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CustomHttpPattern;

            /**
             * Verifies a CustomHttpPattern message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CustomHttpPattern message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CustomHttpPattern
             */
            public static fromObject(object: { [k: string]: any }): google.api.CustomHttpPattern;

            /**
             * Creates a plain object from a CustomHttpPattern message. Also converts values to other types if specified.
             * @param message CustomHttpPattern
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CustomHttpPattern, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CustomHttpPattern to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CustomHttpPattern
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
