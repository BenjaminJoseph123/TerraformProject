import base64

# Read the private key from the .pem file
with open('keypair.pem', 'r') as file:
    private_key_pem = file.read()

# Remove the header and footer lines
private_key_pem = private_key_pem.replace('-----BEGIN PRIVATE KEY-----', '').replace('-----END PRIVATE KEY-----', '')

# Remove any newline characters or whitespace
private_key_pem = private_key_pem.replace('\n', '').replace(' ', '')

# Calculate the number of padding characters needed
padding_needed = len(private_key_pem) % 4

# Add padding characters if needed
private_key_pem += '=' * padding_needed

# Decode the Base64-encoded private key
private_key_bytes = base64.b64decode(private_key_pem)

# Convert the bytes to a Base64-encoded string
private_key_base64 = base64.b64encode(private_key_bytes).decode()

print(private_key_base64)
