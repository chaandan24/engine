// impeller/entity/shaders/gradient_mix.frag
#include <impeller/types.glsl>

uniform f16sampler2D original_texture;
uniform f16sampler2D blurred_texture;

in vec2 v_texture_coords;
out f16vec4 frag_color;

void main() {
  f16vec4 crisp_pixel = texture(original_texture, v_texture_coords);
  f16vec4 blurred_pixel = texture(blurred_texture, v_texture_coords);
  
  // Create a fade mask from top (0.0) to bottom (1.0)
  float16_t fade_mask = float16_t(v_texture_coords.y);

  // Mix the two pixels. 
  frag_color = mix(crisp_pixel, blurred_pixel, fade_mask);
}
