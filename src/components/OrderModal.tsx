import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OrderModal = ({ isOpen, onClose }: OrderModalProps) => {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [description, setDescription] = useState("");
  const [inspirationImage, setInspirationImage] = useState<File | null>(null);
  const [inspirationUrl, setInspirationUrl] = useState("");
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const { toast } = useToast();

  const productTypes = [
    "Custom Rings",
    "Luxury Bracelets", 
    "Designer Necklaces",
    "Custom Earrings",
    "Luxury Cufflinks"
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        toast({
          title: "File too large",
          description: "Please upload an image smaller than 5MB",
          variant: "destructive"
        });
        return;
      }
      
      setInspirationImage(file);
      setPreviewUrl(URL.createObjectURL(file));
      setInspirationUrl(""); // Clear URL input when file is uploaded
    }
  };

  const handleUrlInput = (url: string) => {
    setInspirationUrl(url);
    setInspirationImage(null); // Clear file upload when URL is input
    setPreviewUrl(url);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedProduct || !customerName || !customerEmail) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the data to your backend
    // You can include both the file and URL in your form data
    const formData = new FormData();
    formData.append('product', selectedProduct);
    formData.append('name', customerName);
    formData.append('email', customerEmail);
    formData.append('phone', customerPhone);
    formData.append('description', description);
    if (inspirationImage) {
      formData.append('inspiration_image', inspirationImage);
    }
    if (inspirationUrl) {
      formData.append('inspiration_url', inspirationUrl);
    }

    toast({
      title: "Order Submitted",
      description: "Thank you for your order. We'll contact you within 24 hours.",
    });
    
    // Reset form and close modal
    setSelectedProduct("");
    setCustomerName("");
    setCustomerEmail("");
    setCustomerPhone("");
    setDescription("");
    setInspirationImage(null);
    setInspirationUrl("");
    setPreviewUrl("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-background border-border max-h-[90vh] flex flex-col">
        <DialogHeader className="text-center pb-6">
          <DialogTitle className="nb-medium text-2xl md:text-3xl text-foreground">
            Place Your Order
          </DialogTitle>
          <p className="text-muted-foreground mt-2">
            Tell us about your custom jewelry vision
          </p>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 overflow-y-auto flex-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {/* Product Selection */}
          <div className="space-y-2">
            <Label htmlFor="product" className="text-sm font-medium">
              Product Type *
            </Label>
            <Select value={selectedProduct} onValueChange={setSelectedProduct}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a product type" />
              </SelectTrigger>
              <SelectContent>
                {productTypes.map((product) => (
                  <SelectItem key={product} value={product}>
                    {product}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Customer Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">
                Full Name *
              </Label>
              <Input
                id="name"
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium">
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                placeholder="Enter your phone number"
                className="w-full"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Email Address *
            </Label>
            <Input
              id="email"
              type="email"
              value={customerEmail}
              onChange={(e) => setCustomerEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full"
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description" className="text-sm font-medium">
              Design Description
            </Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your custom jewelry vision, preferred materials, style preferences, special occasions, etc."
              rows={4}
              className="w-full resize-none"
            />
          </div>

          {/* Inspiration Image Upload */}
          <div className="space-y-4">
            <Label className="text-sm font-medium">
              Inspiration Image
            </Label>
            
            <div className="space-y-4">
              {/* File Upload */}
              <div className="space-y-2">
                <Label htmlFor="image-upload" className="text-xs text-muted-foreground">
                  Upload Image (Max 5MB)
                </Label>
                <Input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full"
                />
              </div>

              {/* URL Input */}
              <div className="space-y-2">
                <Label htmlFor="image-url" className="text-xs text-muted-foreground">
                  Or Paste Image URL
                </Label>
                <Input
                  id="image-url"
                  type="url"
                  value={inspirationUrl}
                  onChange={(e) => handleUrlInput(e.target.value)}
                  placeholder="https://example.com/image.jpg"
                  className="w-full"
                />
              </div>

              {/* Preview */}
              {previewUrl && (
                <div className="mt-4">
                  <Label className="text-xs text-muted-foreground mb-2">Preview</Label>
                  <div className="relative aspect-square w-full max-w-[200px] mx-auto overflow-hidden rounded-lg border border-border">
                    <img
                      src={previewUrl}
                      alt="Inspiration preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 sticky bottom-0 bg-background mt-8">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              className="flex-1"
            >
              Submit Order
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default OrderModal;