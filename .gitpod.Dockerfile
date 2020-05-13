FROM gitpod/workspace-full

# Install Azure Function Core Tools
RUN npm i -g azure-functions-core-tools@3 --unsafe-perm true

# Install jest
RUN npm i -g jest