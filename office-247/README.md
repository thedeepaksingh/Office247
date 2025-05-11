-- Connection String
DATABASE_URL=postgres://app_user:securepassword@localhost:5432/your_database

-- App role with full access
CREATE ROLE app_user LOGIN PASSWORD 'securepassword';

-- Read-only role (e.g., for analytics)
CREATE ROLE readonly_user LOGIN PASSWORD 'readonlypassword';

-- Create schema
CREATE SCHEMA IF NOT EXISTS user_data;

-- Give app_user full access
GRANT USAGE ON SCHEMA user_data TO app_user;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA user_data TO app_user;

-- Give readonly_user limited access
GRANT USAGE ON SCHEMA user_data TO readonly_user;
GRANT SELECT ON ALL TABLES IN SCHEMA user_data TO readonly_user;

-- Indexes
CREATE INDEX idx_users_email ON user_data.users(email);

