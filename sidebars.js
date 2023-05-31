/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
	mySidebar: [
		{
			type: "doc",
			id: "home",
			label: "WELCOME",
		},
		{
			type: "category",
			collapsible: false,
			label: "Get Started",
			items: [
				{
					type: "doc",
					id: "tutorials/quickstart",
					label: "Quickstart",
				},
				{
					type: "category",
					label: "Introduction",
					items: [
						{
							type: "doc",
							id: "tutorials/introduction/what-is-permit",
							label: "What is Permit?",
						},
					],
				},
				{
					type: "category",
					label: "Onboarding",
					items: [
						{
							type: "doc",
							id: "tutorials/onboarding/lets-begin",
							label: "Let's begin!",
						},
						{
							type: "doc",
							id: "tutorials/onboarding/your-workspace",
							label: "Your Workspace",
						},
						{
							type: "doc",
							id: "tutorials/onboarding/policy-and-resources",
							label: "Policy & Resources",
						},
						{
							type: "doc",
							id: "tutorials/onboarding/roles-and-permissions",
							label: "Roles & Permissions",
						},
						{
							type: "doc",
							id: "tutorials/onboarding/connect-your-app",
							label: "Connect Your App",
						},
						{
							type: "doc",
							id: "tutorials/onboarding/deploying-to-production",
							label: "Deploying To Production",
						},
					],
				},
				{
					type: "category",
					label: "Deploying",
					items: [
						{
							type: "doc",
							id: "tutorials/deploying/overview",
							label: "Deploying Permit",
						},
					],
				},
			],
		},
		{
			type: "category",
			label: "Features",
			collapsible: false,
			collapsed: false,
			items: [
				{
					type: "doc",
					id: "features/projects-and-env",
					label: "Projects & Environments",
				},
				{
					type: "category",
					label: "Policy Editor",
					collapsed: false,
					items: [
						{
							type: "doc",
							id: "features/policy-editor/editor-overview",
							label: "Editor Overview",
						},
						{
							type: "category",
							collapsible: true,
							collapsed: true,
							label: "RBAC",
							items: [
								{
									type: "doc",
									id: "features/policy-editor/rbac/overview",
									label: "Overview",
								},
								{
									type: "doc",
									id: "features/policy-editor/rbac/components",
									label: "Components",
								},
								{
									type: "doc",
									id: "features/policy-editor/rbac/building-rbac-policy",
									label: "Building an RBAC Policy",
								},
							],
						},
						{
							type: "category",
							collapsible: true,
							collapsed: true,
							label: "ABAC",
							items: [
								{
									type: "doc",
									id: "features/policy-editor/abac/overview",
									label: "Overview",
								},
								{
									type: "doc",
									id: "features/policy-editor/abac/components",
									label: "Components",
								},
								{
									type: "doc",
									id: "features/policy-editor/abac/building-abac-policy",
									label: "Building an ABAC Policy",
								},
								{
									type: "doc",
									id: "features/policy-editor/abac/defining-attributes",
									label: "Defining Attributes",
								},
								{
									type: "doc",
									id: "features/policy-editor/abac/patterns",
									label: "Design Patterns",
								},
							],
						},
					],
				},
				{
					type: "doc",
					id: "features/user-management",
					label: "User Management",
				},
				{
					type: "category",
					collapsible: true,
					collapsed: true,
					label: "Audit Logs",
					items: [
						{
							type: "autogenerated",
							dirName: "features/audit-logs",
						},
					],
				},
				{
					type: "doc",
					id: "features/multitenancy",
					label: "Multitenancy",
				},
				{
					type: "category",
					collapsible: true,
					collapsed: true,
					label: "Loading Data",
					items: [
						{
							type: "doc",
							id: "features/loading-data/via-opal",
							label: "via OPAL",
						},
						{
							type: "doc",
							id: "features/loading-data/via-api",
							label: "via API",
						},
					],
				},
				{
					type: "category",
					collapsible: true,
					collapsed: true,
					label: "Permit Elements",
					items: [
						{
							type: "doc",
							id: "features/permit-elements/overview",
							label: "Overview",
						},
						{
							type: "category",
							collapsible: true,
							collapsed: true,
							label: "Elements",
							items: [
								{
									type: "doc",
									id: "features/permit-elements/element/user-management",
									label: "User Management",
								},
								{
									type: "doc",
									id: "features/permit-elements/element/audit-logs",
									label: "Audit Logs",
								},
								{
									type: "doc",
									id: "features/permit-elements/element/approval-flows",
									label: "Approval Flows",
								},
							],
						},
						{
							type: "doc",
							id: "features/permit-elements/permission-levels",
							label: "Permission Levels",
						},
						{
							type: "doc",
							id: "features/permit-elements/user-preview",
							label: "User Preview",
						},
					],
				},
				{
					type: "category",
					collapsible: true,
					collapsed: true,
					label: "Settings",
					items: [
						{
							type: "autogenerated",
							dirName: "features/settings",
						},
					],
				},
				{
					type: "doc",
					id: "features/coming-soon",
					label: "Coming Soon",
				},
			],
		},
		{
			type: "category",
			collapsible: true,
			collapsed: false,
			label: "FoAz",
			items: [
				{
					type: "doc",
					id: "frontend-only-authz/overview",
					label: "Frontend-only Authz (FoAz)",
				},
				{
					type: "doc",
					id: "frontend-only-authz/using-permit-overview",
					label: "Getting Started",
				},
				{
					type: "doc",
					id: "frontend-only-authz/fetching-jwks",
					label: "Fetching JWKs",
				},
				{
					type: "doc",
					id: "frontend-only-authz/configuring-jwks",
					label: "Configuring JWKs",
				},
				{
					type: "doc",
					id: "frontend-only-authz/detailed-guide",
					label: "Detailed Guide",
				},
				{
					type: "doc",
					id: "frontend-only-authz/foaz-examples",
					label: "FoAz Examples",
				},
				{
					type: "doc",
					id: "frontend-only-authz/foaz-standard",
					label: "Internet Standard",
				},
			],
		},
		{
			type: "category",
			collapsible: true,
			collapsed: false,
			label: "Integrations",
			items: [
				{
					type: "category",
					collapsible: true,
					collapsed: false,
					label: "Authentication Providers",
					items: [
						{
							type: "doc",
							id: "integrations/authentication/your-authentication",
							label: "Your Authentication",
						},
						{
							type: "doc",
							id: "integrations/authentication/supertokens",
							label: "SuperTokens x Permit",
						},
						{
							type: "doc",
							id: "integrations/authentication/fusionauth",
							label: "FusionAuth x Permit",
						},
					],
				},
				{
					type: "category",
					collapsible: true,
					label: "Gateways",
					items: [
						{
							type: "doc",
							id: "integrations/gateways/overview",
							label: "Overview",
						},
						{
							type: "doc",
							id: "integrations/gateways/kong",
							label: "Kong x Permit",
						},
					],
				},
				{
					type: "category",
					collapsible: true,
					label: "Gitops",
					items: [
						{
							type: "doc",
							id: "integrations/gitops/overview",
							label: "Overview",
						},
					],
				},
			],
		},
		{
			type: "category",
			collapsible: true,
			collapsed: false,
			label: "Concepts",
			items: [
				{
					type: "doc",
					id: "concepts/glossary",
					label: "Glossary",
				},
				{
					type: "doc",
					id: "concepts/authorization-concepts",
					label: "Authorization Concepts",
				},
				{
					type: "doc",
					id: "concepts/control-plane-and-data-plane",
					label: "Control & Data Planes",
				},
				{
					type: "doc",
					id: "concepts/pdp",
					label: "Policy Decision Point",
				},
			],
		},
		{
			type: "category",
			collapsible: true,
			collapsed: false,
			label: "API",
			items: [
				{
					type: "doc",
					id: "api/v2-migration-guide",
					label: "Migrating v1 to v2",
				},
				{
					type: "category",
					collapsible: true,
					collapsed: true,
					label: "ABAC API",
					items: [
						{
							type: "doc",
							id: "api/working-with-abac/overview",
							label: "Overview",
						},
						{
							type: "doc",
							id: "api/working-with-abac/operators",
							label: "Operators",
						},
						{
							type: "doc",
							id: "api/working-with-abac/building-conditions",
							label: "Building Conditions",
						},
						{
							type: "doc",
							id: "api/working-with-abac/condition-sets",
							label: "Condition Sets",
						},
						{
							type: "doc",
							id: "api/working-with-abac/condition-set-rules",
							label: "Condition Set Rules",
						},
						{
							type: "doc",
							id: "api/working-with-abac/examples",
							label: "Examples",
						},
					],
				},
				{
					type: "doc",
					id: "api/api-reference",
					label: "API Reference",
				},
				{
					type: "doc",
					id: "api/api-with-cli",
					label: "API Calls using the CLI",
				},
			],
		},
		{
			type: "category",
			collapsible: true,
			collapsed: false,
			label: "SDK Reference",
			items: [
				{
					type: "category",
					label: "Golang",
					items: [
						{
							type: "doc",
							id: "sdk/golang/quickstart-golang",
							label: "Quickstart",
						},
						{
							type: "category",
							label: "Tenant",
							items: [
								{
									type: "doc",
									id: "sdk/golang/tenant/Get",
									label: "Get",
								},
								{
									type: "doc",
									id: "sdk/golang/tenant/Create",
									label: "Create",
								},
								{
									type: "doc",
									id: "sdk/golang/tenant/Update",
									label: "Update",
								},
								{
									type: "doc",
									id: "sdk/golang/tenant/Delete",
									label: "Delete",
								},
							],
						},
						{
							type: "category",
							label: "User",
							items: [
								{
									type: "doc",
									id: "sdk/golang/user/SyncUser",
									label: "SyncUser",
								},
								{
									type: "doc",
									id: "sdk/golang/user/Get",
									label: "Get",
								},
								{
									type: "doc",
									id: "sdk/golang/user/Create",
									label: "Create",
								},
								{
									type: "doc",
									id: "sdk/golang/user/Delete",
									label: "Delete",
								},
								{
									type: "doc",
									id: "sdk/golang/user/AssignRole",
									label: "AssignRole",
								},
								{
									type: "doc",
									id: "sdk/golang/user/GetAssignedRoles",
									label: "GetAssignedRoles",
								},
								{
									type: "doc",
									id: "sdk/golang/user/UnassignRole",
									label: "UnassignRole",
								},
							],
						},
						{
							type: "category",
							label: "Role",
							items: [
								{
									type: "doc",
									id: "sdk/golang/role/Get",
									label: "Get",
								},
								{
									type: "doc",
									id: "sdk/golang/role/Create",
									label: "Create",
								},
								{
									type: "doc",
									id: "sdk/golang/role/Delete",
									label: "Delete",
								},
								{
									type: "doc",
									id: "sdk/golang/role/Update",
									label: "Update",
								},
							],
						},
					],
				},
				{
					type: "category",
					label: "NodeJS",
					items: [
						{
							type: "doc",
							id: "sdk/nodejs/quickstart-nodejs",
							label: "Quickstart",
						},
						{
							type: "category",
							label: "Tenant",
							items: [
								{
									type: "doc",
									id: "sdk/nodejs/tenant/get-tenant",
									label: "getTenant",
								},
								{
									type: "doc",
									id: "sdk/nodejs/tenant/create-tenant",
									label: "createTenant",
								},
								{
									type: "doc",
									id: "sdk/nodejs/tenant/update-tenant",
									label: "updateTenant",
								},
								{
									type: "doc",
									id: "sdk/nodejs/tenant/delete-tenant",
									label: "deleteTenant",
								},
								{
									type: "doc",
									id: "sdk/nodejs/tenant/list-tenants",
									label: "listTenants",
								},
							],
						},
						{
							type: "category",
							label: "User",
							items: [
								{
									type: "doc",
									id: "sdk/nodejs/user/sync-user",
									label: "syncUser",
								},
								{
									type: "doc",
									id: "sdk/nodejs/user/get-user",
									label: "getUser",
								},
								{
									type: "doc",
									id: "sdk/nodejs/user/create-user",
									label: "createUser",
								},
								{
									type: "doc",
									id: "sdk/nodejs/user/delete-user",
									label: "deleteUser",
								},
							],
						},
						{
							type: "category",
							label: "Role",
							items: [
								{
									type: "doc",
									id: "sdk/nodejs/role/get-role",
									label: "getRole",
								},
								{
									type: "doc",
									id: "sdk/nodejs/role/get-assigned-roles",
									label: "getAssignedRoles",
								},
								{
									type: "doc",
									id: "sdk/nodejs/role/create-role",
									label: "createRole",
								},
								{
									type: "doc",
									id: "sdk/nodejs/role/update-role",
									label: "updateRoles",
								},
								{
									type: "doc",
									id: "sdk/nodejs/role/delete-role",
									label: "deleteRole",
								},
								{
									type: "doc",
									id: "sdk/nodejs/role/assign-role",
									label: "assignRole",
								},
								{
									type: "doc",
									id: "sdk/nodejs/role/unassign-role",
									label: "unassignRole",
								},
							],
						},
						{
							type: "category",
							label: "Resource",
							items: [
								{
									type: "doc",
									id: "sdk/nodejs/resource/create-resource",
									label: "createResource",
								},
								{
									type: "doc",
									id: "sdk/nodejs/resource/update-resource",
									label: "updateResource",
								},
								{
									type: "doc",
									id: "sdk/nodejs/resource/delete-resource",
									label: "deleteResource",
								},
							],
						},
					],
				},
				{
					type: "category",
					label: "Python",
					items: [
						{
							type: "doc",
							id: "sdk/python/quickstart-python",
							label: "Quickstart Async",
						},
						// {
						// 	type: "doc",
						// 	id: "sdk/python/quickstart-python-sync",
						// 	label: "Quickstart Sync",
						// },
						{
							type: "doc",
							id: "sdk/python/usage-example",
							label: "Usage example",
						},
					],
				},
				{
					type: "category",
					label: "Ruby",
					items: [
						{
							type: "doc",
							id: "sdk/ruby/quickstart-ruby",
							label: "Quickstart Ruby",
						},
						{
							type: "category",
							label: "User",
							items: [
								{
									type: "doc",
									id: "sdk/ruby/user/sync_user",
									label: "sync_user",
								},
							],
						},
					],
				},
				{
					type: "category",
					label: "Java",
					items: [
						{
							type: "doc",
							id: "sdk/java/quickstart-java",
							label: "Quickstart",
						},
						{
							type: "category",
							label: "Tenant",
							items: [
								{
									type: "doc",
									id: "sdk/java/tenant/get",
									label: "get",
								},
								{
									type: "doc",
									id: "sdk/java/tenant/create",
									label: "create",
								},
								{
									type: "doc",
									id: "sdk/java/tenant/update",
									label: "update",
								},
								{
									type: "doc",
									id: "sdk/java/tenant/delete",
									label: "delete",
								},
								{
									type: "doc",
									id: "sdk/java/tenant/list",
									label: "list",
								},
							],
						},
						{
							type: "category",
							label: "User",
							items: [
								{
									type: "doc",
									id: "sdk/java/user/sync",
									label: "sync",
								},
								{
									type: "doc",
									id: "sdk/java/user/get",
									label: "get",
								},
								{
									type: "doc",
									id: "sdk/java/user/create",
									label: "create",
								},
								{
									type: "doc",
									id: "sdk/java/user/delete",
									label: "delete",
								},
								{
									type: "doc",
									id: "sdk/java/user/list",
									label: "list",
								},
							],
						},
						{
							type: "category",
							label: "Role",
							items: [
								{
									type: "doc",
									id: "sdk/java/role/get",
									label: "get",
								},
								{
									type: "doc",
									id: "sdk/java/role/get-assigned-roles",
									label: "getAssignedRoles",
								},
								{
									type: "doc",
									id: "sdk/java/role/create",
									label: "create",
								},
								{
									type: "doc",
									id: "sdk/java/role/update",
									label: "update",
								},
								{
									type: "doc",
									id: "sdk/java/role/delete",
									label: "delete",
								},
								{
									type: "doc",
									id: "sdk/java/role/assign-role",
									label: "assignRole",
								},
								{
									type: "doc",
									id: "sdk/java/role/unassign-role",
									label: "unassignRole",
								},
								{
									type: "doc",
									id: "sdk/java/role/list",
									label: "list",
								},
							],
						},
						{
							type: "category",
							label: "Resource",
							items: [
								{
									type: "doc",
									id: "sdk/java/resource/create",
									label: "create",
								},
								{
									type: "doc",
									id: "sdk/java/resource/update",
									label: "update",
								},
								{
									type: "doc",
									id: "sdk/java/resource/delete",
									label: "delete",
								},
								{
									type: "doc",
									id: "sdk/java/resource/list",
									label: "list",
								},
							],
						},
					],
				},
				{
					type: "category",
					label: "DotNet",
					items: [
						{
							type: "doc",
							id: "sdk/dotnet/quickstart-dotnet",
							label: "Quickstart",
						},
						{
							type: "category",
							label: "Tenant",
							items: [
								{
									type: "doc",
									id: "sdk/dotnet/tenant/GetTenant",
									label: "GetTenant",
								},
								{
									type: "doc",
									id: "sdk/dotnet/tenant/CreateTenant",
									label: "CreateTenant",
								},
								{
									type: "doc",
									id: "sdk/dotnet/tenant/UpdateTenant",
									label: "UpdateTenant",
								},
								{
									type: "doc",
									id: "sdk/dotnet/tenant/DeleteTenant",
									label: "DeleteTenant",
								},
							],
						},
						{
							type: "category",
							label: "User",
							items: [
								{
									type: "doc",
									id: "sdk/dotnet/user/SyncUser",
									label: "SyncUser",
								},
								{
									type: "doc",
									id: "sdk/dotnet/user/GetUser",
									label: "GetUser",
								},
								{
									type: "doc",
									id: "sdk/dotnet/user/CreateUser",
									label: "CreateUser",
								},
								{
									type: "doc",
									id: "sdk/dotnet/user/DeleteUser",
									label: "DeleteUser",
								},
							],
						},
						{
							type: "category",
							label: "Role",
							items: [
								{
									type: "doc",
									id: "sdk/dotnet/role/GetRole",
									label: "GetRole",
								},
								{
									type: "doc",
									id: "sdk/dotnet/role/CreateRole",
									label: "CreateRole",
								},
								{
									type: "doc",
									id: "sdk/dotnet/role/ListRoles",
									label: "ListRoles",
								},
								{
									type: "doc",
									id: "sdk/dotnet/role/AssignRole",
									label: "AssignRole",
								},
								{
									type: "doc",
									id: "sdk/dotnet/role/ListAssignedRoles",
									label: "ListAssignedRoles",
								},
								{
									type: "doc",
									id: "sdk/dotnet/role/UnassignRole",
									label: "UnassignRole",
								},
							],
						},
					],
				},
				{
					type: "category",
					label: "Erlang (Beta)",
					items: [
						{
							type: "doc",
							id: "sdk/erlang/quickstart-erlang",
							label: "Quickstart Erlang",
						},
					],
				},
				{
					type: "category",
					label: "Kotlin (Beta)",
					items: [
						{
							type: "doc",
							id: "sdk/kotlin/quickstart-kotlin",
							label: "Quickstart Kotlin",
						},
					],
				},
				{
					type: "category",
					label: "C++ (Beta)",
					items: [
						{
							type: "doc",
							id: "sdk/cpp/quickstart-cpp",
							label: "Quickstart C++",
						},
					],
				},
				{
					type: "category",
					label: "PHP (Beta)",
					items: [
						{
							type: "doc",
							id: "sdk/php/quickstart-php",
							label: "Quickstart PHP",
						},
					],
				},
			],
		},
		{
			type: "category",
			collapsible: true,
			label: "Security",
			items: [
				{
					type: "doc",
					id: "security/connectivity",
					label: "Connectivity",
				},
			],
		},
		{
			type: "category",
			collapsed: true,
			label: "Release Notes",
			items: [
				{
					type: "doc",
					id: "release-notes/v2",
					label: "v. 2.0.0",
				},
			],
		},
		{
			type: "doc",
			id: "faq",
			label: "FAQ",
		},
		{
			type: "doc",
			id: "status",
			label: "Permit Status",
		},
	],
};

module.exports = sidebars;
