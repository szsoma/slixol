export const enVertexShader = `
varying vec2 v_uv;

void main() {
    v_uv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
 `
 
 export const enFragmentShader = `
uniform sampler2D u_texture;
uniform vec2 u_mouse;
uniform float u_aspect;
uniform bool u_enable;
uniform float u_time; // Add time for glowing effect
varying vec2 v_uv;

void main() {
    vec4 tex = texture2D(u_texture, v_uv);

    vec2 aspect = vec2(u_aspect, 1.0);
    float radius = 0.2; // Fixed radius for glow
    float dist = distance(u_mouse * aspect, v_uv * aspect);

    // Glow intensity decreases with distance
    float glow = 0.3 / (dist * dist + 0.1); // Glow intensity
    glow *= sin(u_time * 3.0) * 0.5 + 0.5; // Add subtle pulsing

    if (u_enable) {
        tex.a = mix(tex.a, 0.0, smoothstep(radius, radius + 0.01, dist)); // Fade alpha near the mouse
    }

    tex.rgb += glow * vec3(0.2, 0.9, 0.3); // Add greenish glow
    gl_FragColor = tex;
}

 `