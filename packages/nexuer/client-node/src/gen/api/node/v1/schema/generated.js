/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const api = $root.api = (() => {

    /**
     * Namespace api.
     * @exports api
     * @namespace
     */
    const api = {};

    api.node = (function() {

        /**
         * Namespace node.
         * @memberof api
         * @namespace
         */
        const node = {};

        node.v1 = (function() {

            /**
             * Namespace v1.
             * @memberof api.node
             * @namespace
             */
            const v1 = {};

            v1.schema = (function() {

                /**
                 * Namespace schema.
                 * @memberof api.node.v1
                 * @namespace
                 */
                const schema = {};

                schema.Node = (function() {

                    /**
                     * Properties of a Node.
                     * @memberof api.node.v1.schema
                     * @interface INode
                     * @property {string|null} [id] Node id
                     * @property {string|null} [name] Node name
                     * @property {string|null} [hostname] Node hostname
                     * @property {string|null} [createdAt] Node createdAt
                     * @property {api.node.v1.schema.Node.ISecret|null} [secret] Node secret
                     */

                    /**
                     * Constructs a new Node.
                     * @memberof api.node.v1.schema
                     * @classdesc Represents a Node.
                     * @implements INode
                     * @constructor
                     * @param {api.node.v1.schema.INode=} [properties] Properties to set
                     */
                    function Node(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Node id.
                     * @member {string} id
                     * @memberof api.node.v1.schema.Node
                     * @instance
                     */
                    Node.prototype.id = "";

                    /**
                     * Node name.
                     * @member {string} name
                     * @memberof api.node.v1.schema.Node
                     * @instance
                     */
                    Node.prototype.name = "";

                    /**
                     * Node hostname.
                     * @member {string} hostname
                     * @memberof api.node.v1.schema.Node
                     * @instance
                     */
                    Node.prototype.hostname = "";

                    /**
                     * Node createdAt.
                     * @member {string} createdAt
                     * @memberof api.node.v1.schema.Node
                     * @instance
                     */
                    Node.prototype.createdAt = "";

                    /**
                     * Node secret.
                     * @member {api.node.v1.schema.Node.ISecret|null|undefined} secret
                     * @memberof api.node.v1.schema.Node
                     * @instance
                     */
                    Node.prototype.secret = null;

                    /**
                     * Creates a new Node instance using the specified properties.
                     * @function create
                     * @memberof api.node.v1.schema.Node
                     * @static
                     * @param {api.node.v1.schema.INode=} [properties] Properties to set
                     * @returns {api.node.v1.schema.Node} Node instance
                     */
                    Node.create = function create(properties) {
                        return new Node(properties);
                    };

                    /**
                     * Encodes the specified Node message. Does not implicitly {@link api.node.v1.schema.Node.verify|verify} messages.
                     * @function encode
                     * @memberof api.node.v1.schema.Node
                     * @static
                     * @param {api.node.v1.schema.INode} message Node message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Node.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                        if (message.hostname != null && Object.hasOwnProperty.call(message, "hostname"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.hostname);
                        if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.createdAt);
                        if (message.secret != null && Object.hasOwnProperty.call(message, "secret"))
                            $root.api.node.v1.schema.Node.Secret.encode(message.secret, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified Node message, length delimited. Does not implicitly {@link api.node.v1.schema.Node.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof api.node.v1.schema.Node
                     * @static
                     * @param {api.node.v1.schema.INode} message Node message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Node.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Node message from the specified reader or buffer.
                     * @function decode
                     * @memberof api.node.v1.schema.Node
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {api.node.v1.schema.Node} Node
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Node.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.node.v1.schema.Node();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.id = reader.string();
                                    break;
                                }
                            case 2: {
                                    message.name = reader.string();
                                    break;
                                }
                            case 3: {
                                    message.hostname = reader.string();
                                    break;
                                }
                            case 4: {
                                    message.createdAt = reader.string();
                                    break;
                                }
                            case 10: {
                                    message.secret = $root.api.node.v1.schema.Node.Secret.decode(reader, reader.uint32());
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Node message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof api.node.v1.schema.Node
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {api.node.v1.schema.Node} Node
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Node.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Node message.
                     * @function verify
                     * @memberof api.node.v1.schema.Node
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Node.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (!$util.isString(message.id))
                                return "id: string expected";
                        if (message.name != null && message.hasOwnProperty("name"))
                            if (!$util.isString(message.name))
                                return "name: string expected";
                        if (message.hostname != null && message.hasOwnProperty("hostname"))
                            if (!$util.isString(message.hostname))
                                return "hostname: string expected";
                        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                            if (!$util.isString(message.createdAt))
                                return "createdAt: string expected";
                        if (message.secret != null && message.hasOwnProperty("secret")) {
                            let error = $root.api.node.v1.schema.Node.Secret.verify(message.secret);
                            if (error)
                                return "secret." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a Node message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof api.node.v1.schema.Node
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {api.node.v1.schema.Node} Node
                     */
                    Node.fromObject = function fromObject(object) {
                        if (object instanceof $root.api.node.v1.schema.Node)
                            return object;
                        let message = new $root.api.node.v1.schema.Node();
                        if (object.id != null)
                            message.id = String(object.id);
                        if (object.name != null)
                            message.name = String(object.name);
                        if (object.hostname != null)
                            message.hostname = String(object.hostname);
                        if (object.createdAt != null)
                            message.createdAt = String(object.createdAt);
                        if (object.secret != null) {
                            if (typeof object.secret !== "object")
                                throw TypeError(".api.node.v1.schema.Node.secret: object expected");
                            message.secret = $root.api.node.v1.schema.Node.Secret.fromObject(object.secret);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Node message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof api.node.v1.schema.Node
                     * @static
                     * @param {api.node.v1.schema.Node} message Node
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Node.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.defaults) {
                            object.id = "";
                            object.name = "";
                            object.hostname = "";
                            object.createdAt = "";
                            object.secret = null;
                        }
                        if (message.id != null && message.hasOwnProperty("id"))
                            object.id = message.id;
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        if (message.hostname != null && message.hasOwnProperty("hostname"))
                            object.hostname = message.hostname;
                        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                            object.createdAt = message.createdAt;
                        if (message.secret != null && message.hasOwnProperty("secret"))
                            object.secret = $root.api.node.v1.schema.Node.Secret.toObject(message.secret, options);
                        return object;
                    };

                    /**
                     * Converts this Node to JSON.
                     * @function toJSON
                     * @memberof api.node.v1.schema.Node
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Node.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for Node
                     * @function getTypeUrl
                     * @memberof api.node.v1.schema.Node
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Node.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/api.node.v1.schema.Node";
                    };

                    Node.Secret = (function() {

                        /**
                         * Properties of a Secret.
                         * @memberof api.node.v1.schema.Node
                         * @interface ISecret
                         * @property {string|null} [accessToken] Secret accessToken
                         */

                        /**
                         * Constructs a new Secret.
                         * @memberof api.node.v1.schema.Node
                         * @classdesc Represents a Secret.
                         * @implements ISecret
                         * @constructor
                         * @param {api.node.v1.schema.Node.ISecret=} [properties] Properties to set
                         */
                        function Secret(properties) {
                            if (properties)
                                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Secret accessToken.
                         * @member {string} accessToken
                         * @memberof api.node.v1.schema.Node.Secret
                         * @instance
                         */
                        Secret.prototype.accessToken = "";

                        /**
                         * Creates a new Secret instance using the specified properties.
                         * @function create
                         * @memberof api.node.v1.schema.Node.Secret
                         * @static
                         * @param {api.node.v1.schema.Node.ISecret=} [properties] Properties to set
                         * @returns {api.node.v1.schema.Node.Secret} Secret instance
                         */
                        Secret.create = function create(properties) {
                            return new Secret(properties);
                        };

                        /**
                         * Encodes the specified Secret message. Does not implicitly {@link api.node.v1.schema.Node.Secret.verify|verify} messages.
                         * @function encode
                         * @memberof api.node.v1.schema.Node.Secret
                         * @static
                         * @param {api.node.v1.schema.Node.ISecret} message Secret message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Secret.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.accessToken != null && Object.hasOwnProperty.call(message, "accessToken"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.accessToken);
                            return writer;
                        };

                        /**
                         * Encodes the specified Secret message, length delimited. Does not implicitly {@link api.node.v1.schema.Node.Secret.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof api.node.v1.schema.Node.Secret
                         * @static
                         * @param {api.node.v1.schema.Node.ISecret} message Secret message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Secret.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a Secret message from the specified reader or buffer.
                         * @function decode
                         * @memberof api.node.v1.schema.Node.Secret
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {api.node.v1.schema.Node.Secret} Secret
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Secret.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.node.v1.schema.Node.Secret();
                            while (reader.pos < end) {
                                let tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.accessToken = reader.string();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a Secret message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof api.node.v1.schema.Node.Secret
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {api.node.v1.schema.Node.Secret} Secret
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Secret.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a Secret message.
                         * @function verify
                         * @memberof api.node.v1.schema.Node.Secret
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Secret.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.accessToken != null && message.hasOwnProperty("accessToken"))
                                if (!$util.isString(message.accessToken))
                                    return "accessToken: string expected";
                            return null;
                        };

                        /**
                         * Creates a Secret message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof api.node.v1.schema.Node.Secret
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {api.node.v1.schema.Node.Secret} Secret
                         */
                        Secret.fromObject = function fromObject(object) {
                            if (object instanceof $root.api.node.v1.schema.Node.Secret)
                                return object;
                            let message = new $root.api.node.v1.schema.Node.Secret();
                            if (object.accessToken != null)
                                message.accessToken = String(object.accessToken);
                            return message;
                        };

                        /**
                         * Creates a plain object from a Secret message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof api.node.v1.schema.Node.Secret
                         * @static
                         * @param {api.node.v1.schema.Node.Secret} message Secret
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Secret.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            let object = {};
                            if (options.defaults)
                                object.accessToken = "";
                            if (message.accessToken != null && message.hasOwnProperty("accessToken"))
                                object.accessToken = message.accessToken;
                            return object;
                        };

                        /**
                         * Converts this Secret to JSON.
                         * @function toJSON
                         * @memberof api.node.v1.schema.Node.Secret
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Secret.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for Secret
                         * @function getTypeUrl
                         * @memberof api.node.v1.schema.Node.Secret
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        Secret.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/api.node.v1.schema.Node.Secret";
                        };

                        return Secret;
                    })();

                    return Node;
                })();

                return schema;
            })();

            return v1;
        })();

        return node;
    })();

    return api;
})();

export { $root as default };
